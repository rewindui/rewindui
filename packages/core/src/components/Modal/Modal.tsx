import { ModalComponent, ModalProps } from '@components/Modal/Modal.types';
import { FloatingFocusManager, FloatingPortal, useFloating } from '@floating-ui/react';
import { useKeypress } from '@hooks/use-keypress';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import FocusTrap from 'focus-trap-react';
import { forwardRef, Ref, useMemo } from 'react';
import React from 'react';
import { Overlay } from '@components/Overlay';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<ModalProps> = {
  closeOnEscape: true,
  color: 'white',
  mode: 'dialog',
  open: false,
  overlayBlur: 'sm',
  overlayCloseOnClick: true,
  overlayColor: 'dark',
  overlayOpacity: '50',
  radius: 'md',
  shadow: 'base',
  size: 'sm',
};

const Modal: ModalComponent = forwardRef((props: ModalProps, ref?: Ref<HTMLDivElement>) => {
  const theme = useComponentTheme('Modal');
  const {
    children,
    className = '',
    closeOnEscape,
    color,
    mode,
    onClose,
    open,
    overlayBlur,
    overlayCloseOnClick,
    overlayColor,
    overlayOpacity,
    radius,
    shadow,
    size,
    ...additionalProps
  } = {
    ...defaultProps,
    ...props,
  };
  const id = usePropId(props.id);
  const classes = useMemo(() => {
    return twMerge(
      theme({
        className,
        color,
        mode,
        open,
        radius,
        shadow,
        size,
      })
    );
  }, [className, color, mode, open, radius, shadow, size, theme]);
  const { context } = useFloating();

  useKeypress('Escape', closeOnEscape, onClose);

  return (
    <>
      {open && mode !== 'fullscreen' && (
        <Overlay
          onClose={onClose}
          blur={overlayBlur}
          color={overlayColor}
          opacity={overlayOpacity}
          closeOnClick={overlayCloseOnClick}
        />
      )}

      <FloatingPortal>
        {open && (
          <FloatingFocusManager context={context}>
            <div id={id} ref={ref} className={classes} {...additionalProps}>
              {children}
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  );
});

Modal.displayName = 'Modal';

export { Modal };
