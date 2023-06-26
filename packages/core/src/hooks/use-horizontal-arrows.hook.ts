import { useKeypress } from '@hooks/use-keypress';
import { RefObject } from 'react';

export function useHorizontalArrows(
  ref: RefObject<HTMLElement> | undefined,
  active: boolean = true
) {
  useKeypress('ArrowRight', active, () => {
    if (!active) {
      return;
    }

    const activeElement = document.activeElement as HTMLButtonElement;

    if (!activeElement) {
      return;
    }

    if (!ref) {
      return;
    }

    const buttons = ref.current?.querySelectorAll('button:not([disabled="true"])');

    if (!buttons) {
      return;
    }

    const ids: string[] = [];

    buttons.forEach((button: Element) => {
      ids.push(button.id);
    });

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

    if (!activeElement) {
      return;
    }

    if (!ref) {
      return;
    }

    const buttons = ref.current?.querySelectorAll('button:not([disabled="true"])');

    if (!buttons) {
      return;
    }

    const ids: string[] = [];

    buttons.forEach((button: Element) => {
      ids.push(button.id);
    });

    if (!ids.includes(activeElement.id)) {
      return;
    }

    const currentIndex = ids.findIndex((id: string) => id === activeElement.id);
    const nextIndex = ids[currentIndex - 1] ? currentIndex - 1 : ids.length - 1;
    document.getElementById(ids[nextIndex])?.focus();
  });
}
