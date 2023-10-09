'use client';
import { ModalComponent, ModalProps } from '@components/Modal/Modal.types';
import { ModalGroup } from '@components/Modal/ModalGroup/ModalGroup';
import { useModalGroupContext } from '@components/Modal/ModalGroup/ModalGroup.context';
import { FloatingPortal, useMergeRefs } from '@floating-ui/react';
import { useFocusTrap } from '@hooks/use-focus-trap.hook';
import { useKeypress } from '@hooks/use-keypress';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useEffect, useMemo, useRef, useState } from 'react';
import { Overlay } from '@components/Overlay';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<ModalProps> = {
  closeOnEscape: false,
  color: 'white',
  mode: 'dialog',
  open: false,
  overlayBlur: 'sm',
  overlayCloseOnClick: false,
  overlayColor: 'dark',
  overlayOpacity: '75',
  position: 'center',
  radius: '2xl',
  shadow: 'modal',
  size: 'auto',
};

const _Modal: ModalComponent = forwardRef((props: ModalProps, ref?: Ref<HTMLDivElement>) => {
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
    position,
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
  const [activeFocusTrap, setActiveFocusTrap] = useState(false);
  const trapRef = useFocusTrap(activeFocusTrap);
  const mergedRef = useMergeRefs<HTMLDivElement | null>([modalRef, trapRef || null, ref || null]);
  const animation = useRef<Animation | null>(null);
  const { activeModalId, registry, setRegistry } = useModalGroupContext();

  const translateY = useMemo(() => {
    if (mode === 'fullscreen') {
      return '0%';
    }

    switch (position) {
      case 'top':
        return '0%';
      case 'bottom':
        return '0%';
      default:
        return '-50%';
    }
  }, [position, mode]);

  useEffect(() => {
    if (!setRegistry || !registry || !modalRef.current) {
      return;
    }

    const newRegistry: HTMLDivElement[] = open
      ? [...registry, modalRef.current]
      : registry.filter((ref) => ref !== modalRef.current);
    setRegistry(newRegistry);

    if (newRegistry.length === 0) {
      return;
    }

    if (!open && newRegistry.length < registry.length) {
      const activeModal = newRegistry[newRegistry.length - 1];

      activeModal.animate(
        [
          {
            opacity: 0,
            transform: 'translateY(-50px)',
            visibility: 'hidden',
          },
          { opacity: 1, transform: 'translateY(0%)', visibility: 'visible' },
        ],
        {
          duration: 150,
        }
      );

      setActiveFocusTrap(false);
    }
  }, [open]);

  const classes = useMemo(() => {
    return twMerge(
      theme({
        className,
        color,
        mode,
        position,
        radius,
        shadow,
        size,
      })
    );
  }, [className, color, mode, position, radius, shadow, size, theme]);

  useKeypress('Escape', closeOnEscape, onClose);

  const handleOverlayClick = () => {
    if (overlayCloseOnClick && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const easing = open ? 'ease-in-out' : 'ease-out';
    const duration = open ? 150 : 100;
    const keyframes = new KeyframeEffect(
      modalRef.current,
      [
        {
          opacity: 0,
          transform: 'translateY(-100px)',
          visibility: 'hidden',
        },
        {
          opacity: 1,
          transform: `translateY(${translateY})`,
          visibility: 'visible',
        },
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

  useEffect(() => {
    if (!animation.current) {
      return;
    }

    if (activeModalId === id) {
      setTimeout(() => {
        setActiveFocusTrap(true);
      }, 100);
    } else {
      setActiveFocusTrap(false);
    }
  }, [activeModalId]);

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
        <div className="flex justify-center">
          <div
            id={id}
            role="dialog"
            aria-modal="true"
            aria-hidden={!open}
            style={{
              opacity: 0,
              visibility: 'hidden',
            }}
            ref={mergedRef}
            className={classes}
            {...additionalProps}
          >
            {children}
          </div>
        </div>
      </FloatingPortal>
    </>
  );
});

_Modal.displayName = 'Modal';

const Modal = Object.assign(_Modal, {
  Group: ModalGroup,
});

export default Modal;
