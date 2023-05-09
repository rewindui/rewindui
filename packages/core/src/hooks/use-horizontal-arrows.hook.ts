import { useKeypress } from '@hooks/use-keypress';

export function useHorizontalArrows(refs: Map<string, HTMLButtonElement>, active: boolean = true) {
  useKeypress('ArrowRight', active, () => {
    if (!active) {
      return;
    }

    const activeElement = document.activeElement as HTMLButtonElement;
    const ids: string[] = [];
    refs.forEach((el) => ids.push(el.id));

    if (!activeElement) {
      return;
    }

    if (!ids.includes(activeElement.id)) {
      return;
    }

    const currentIndex = ids.findIndex((id: string) => id === activeElement.id);
    const nextIndex = ids[currentIndex + 1] ? currentIndex + 1 : 0;
    document.getElementById(ids[nextIndex])?.focus();
  });

  useKeypress('ArrowLeft', active, () => {
    if (!active) {
      return;
    }

    const activeElement = document.activeElement as HTMLButtonElement;
    const ids: string[] = [];
    refs.forEach((el) => ids.push(el.id));

    if (!activeElement) {
      return;
    }

    if (!ids.includes(activeElement.id)) {
      return;
    }

    const currentIndex = ids.findIndex((id: string) => id === activeElement.id);
    const nextIndex = ids[currentIndex - 1] ? currentIndex - 1 : ids.length - 1;
    document.getElementById(ids[nextIndex])?.focus();
  });
}
