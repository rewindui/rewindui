import { ModalComponent, ModalProps } from '@components/Modal/Modal.types';
import { FloatingPortal, useMergeRefs } from '@floating-ui/react';
import { useKeypress } from '@hooks/use-keypress';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useEffect, useMemo, useRef, useState } from 'react';
import { Overlay } from '@components/Overlay';
import { twMerge } from 'tailwind-merge';
import FocusLock from 'react-focus-lock';

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
  const modalRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergeRefs<HTMLDivElement | null>([modalRef, ref || null]);
  const animation = useRef<Animation | null>(null);
  const [activeFocusTrap, setActiveFocusTrap] = useState(false);

  const classes = useMemo(() => {
    return twMerge(
      theme({
        className,
        color,
        mode,
        radius,
        shadow,
        size,
      })
    );
  }, [className, color, mode, radius, shadow, size, theme]);

  useKeypress('Escape', closeOnEscape, onClose);

  const handleOverlayClick = () => {
    if (overlayCloseOnClick && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const easing = open ? 'ease-in-out' : 'ease-out';
    const duration = open ? 300 : 100;
    const keyframes = new KeyframeEffect(
      modalRef.current,
      [
        { opacity: 0, transform: 'translateY(-50px)', filter: 'blur(15px)', visibility: 'hidden' },
        { opacity: 1, transform: 'translateY(0%)', filter: 'blur(0)', visibility: 'visible' },
      ],
      { duration, fill: 'both', easing }
    );

    animation.current = new Animation(keyframes, document.timeline);
  }, [open, modalRef]);

  useEffect(() => {
    if (!animation.current) {
      return;
    }

    if (open) {
      animation.current.play();
      animation.current.onfinish = () => {
        setActiveFocusTrap(true);
      };
    } else {
      animation.current.reverse();
      setActiveFocusTrap(false);
    }
  }, [open]);

  return (
    <>
      {mode !== 'fullscreen' && (
        <Overlay
          open={open}
          onClick={handleOverlayClick}
          blur={overlayBlur}
          color={overlayColor}
          opacity={overlayOpacity}
          closeOnClick={overlayCloseOnClick}
        />
      )}

      <FloatingPortal>
        <FocusLock disabled={!activeFocusTrap} className="flex justify-center">
          <div
            id={id}
            role="dialog"
            aria-modal="true"
            aria-hidden={!open}
            style={{
              opacity: 0,
              transform: 'translateY(-200%)',
              visibility: 'hidden',
            }}
            ref={mergedRef}
            className={classes}
            {...additionalProps}
          >
            {children}
          </div>
        </FocusLock>
      </FloatingPortal>
    </>
  );
});

Modal.displayName = 'Modal';

export default Modal;
