import { DrawerComponent, DrawerProps } from '@components/Drawer/Drawer.types';
import { FloatingPortal, useMergeRefs } from '@floating-ui/react';
import { useFocusTrap } from '@hooks/use-focus-trap.hook';
import { useKeypress } from '@hooks/use-keypress';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useEffect, useMemo, useRef, useState } from 'react';
import { Overlay } from '@components/Overlay';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<DrawerProps> = {
  closeOnEscape: true,
  color: 'white',
  open: false,
  overlayBlur: 'sm',
  overlayCloseOnClick: true,
  overlayColor: 'dark',
  overlayOpacity: '50',
  position: 'right',
  shadow: 'base',
};

const Drawer: DrawerComponent = forwardRef((props: DrawerProps, ref?: Ref<HTMLDivElement>) => {
  const theme = useComponentTheme('Drawer');
  const {
    children,
    className = '',
    closeOnEscape,
    onClose,
    open,
    overlayBlur,
    overlayCloseOnClick,
    overlayColor,
    overlayOpacity,
    position,
    shadow,
    ...additionalProps
  } = {
    ...defaultProps,
    ...props,
  };
  const id = usePropId(props.id);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [activeFocusTrap, setActiveFocusTrap] = useState(false);
  const trapRef = useFocusTrap(activeFocusTrap);
  const mergedRef = useMergeRefs<HTMLDivElement | null>([drawerRef, trapRef || null, ref || null]);
  const animation = useRef<Animation | null>(null);

  const classes = useMemo(() => {
    return twMerge(
      theme({
        className,
        position,
        shadow,
      })
    );
  }, [className, position, shadow, theme]);

  useKeypress('Escape', closeOnEscape, onClose);

  const handleOverlayClick = () => {
    if (overlayCloseOnClick && onClose) {
      onClose();
    }
  };

  const translate = useMemo(() => {
    switch (position) {
      case 'left':
        return ['translateX(-100%)', 'translateX(0%)'];
      case 'right':
        return ['translateX(100%)', 'translateX(0%)'];
      case 'top':
        return ['translateY(-100%)', 'translateY(0%)'];
      case 'bottom':
        return ['translateY(100%)', 'translateY(0%)'];
      default:
        return ['translateX(-100%)', 'translateX(0%)'];
    }
  }, [position]);

  useEffect(() => {
    const easing = open ? 'ease-in-out' : 'ease-out';
    const duration = open ? 150 : 100;
    const keyframes = new KeyframeEffect(
      drawerRef.current,
      [
        { opacity: 0.75, transform: translate[0], visibility: 'hidden' },
        {
          opacity: 1,
          visibility: 'visible',
          transform: translate[1],
        },
      ],
      { duration, fill: 'both', easing }
    );

    animation.current = new Animation(keyframes, document.timeline);
  }, [open, drawerRef]);

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
      <Overlay
        open={open}
        onClick={handleOverlayClick}
        blur={overlayBlur}
        color={overlayColor}
        opacity={overlayOpacity}
        closeOnClick={overlayCloseOnClick}
      />

      <FloatingPortal>
        <div className="flex justify-center">
          <div
            id={id}
            role="dialog"
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

Drawer.displayName = 'Drawer';

export default Drawer;
