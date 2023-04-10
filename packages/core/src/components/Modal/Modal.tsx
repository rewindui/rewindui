import { ModalComponent, ModalProps } from '@components/Modal/Modal.types';
import { FloatingPortal } from '@floating-ui/react';
import { useKeypress } from '@hooks/use-keypress';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import FocusTrap from 'focus-trap-react';
import { forwardRef, Ref, useMemo } from 'react';
import React from 'react';
import { Overlay } from '@components/Overlay';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<ModalProps> = {
  color: 'white',
  radius: 'md',
  size: 'sm',
  shadow: 'base',
  mode: 'dialog',
  overlayBlur: 'sm',
  overlayColor: 'dark',
  overlayOpacity: '50',
  overlayCloseOnClick: true,
  closeOnEscape: true,
  open: false,
};

const Modal: ModalComponent = forwardRef((props: ModalProps, ref?: Ref<HTMLDivElement>) => {
  const theme = useComponentTheme('Modal');
  const {
    overlayBlur,
    overlayColor,
    overlayOpacity,
    overlayCloseOnClick,
    closeOnEscape,
    color,
    radius,
    size,
    shadow,
    mode,
    open,
    onClose,
    className = '',
    children,
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

  useKeypress('Escape', closeOnEscape, onClose);

  return (
    <FloatingPortal>
      {open && mode !== 'fullscreen' && (
        <Overlay
          onClose={onClose}
          blur={overlayBlur}
          color={overlayColor}
          opacity={overlayOpacity}
          closeOnClick={overlayCloseOnClick}
        />
      )}

      <FocusTrap active={open}>
        <div id={id} ref={ref} className={classes} {...additionalProps}>
          {children}
        </div>
      </FocusTrap>
    </FloatingPortal>
  );
});

Modal.displayName = 'Modal';

export { Modal };
