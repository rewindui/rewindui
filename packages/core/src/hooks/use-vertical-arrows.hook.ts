import { useKeypress } from '@hooks/use-keypress';

export function useVerticalArrows(refs: HTMLButtonElement[] = [], active: boolean = true) {
  useKeypress('ArrowDown', true, () => {
    if (!active || !refs?.length) {
      return;
    }

    const activeElement = document.activeElement as HTMLButtonElement;

    if (!activeElement) {
      refs[0]?.focus();
      return;
    }

    const currentIndex = refs.findIndex((el) => el.id === activeElement.id);
    const nextIndex = refs[currentIndex + 1] ? currentIndex + 1 : 0;
    refs[nextIndex]?.focus();
  });

  useKeypress('ArrowUp', true, () => {
    if (!active || !refs?.length) {
      return;
    }

    const activeElement = document.activeElement as HTMLButtonElement;

    if (!activeElement) {
      refs[0]?.focus();
      return;
    }

    const currentIndex = refs.findIndex((el) => el.id === activeElement.id);
    const nextIndex = refs[currentIndex - 1] ? currentIndex - 1 : refs.length - 1;
    refs[nextIndex]?.focus();
  });
}
