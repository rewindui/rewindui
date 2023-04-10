import { OverlayComponent, OverlayProps } from '@components/Overlay/Overlay.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<OverlayProps> = {
  blur: 'sm',
  opacity: '50',
  color: 'dark',
  closeOnClick: false,
};

const Overlay: OverlayComponent = forwardRef((props: OverlayProps, ref?: Ref<HTMLDivElement>) => {
  const theme = useComponentTheme('Overlay');
  const {
    blur,
    color,
    opacity,
    closeOnClick,
    onClose,
    className = '',
    ...additionalProps
  } = {
    ...defaultProps,
    ...props,
  };
  const id = usePropId(props.id);
  const [isOpen, setIsOpen] = useState(true);
  const classes = useMemo(() => {
    return twMerge(theme({ blur, className, color, opacity }));
  }, [blur, className, color, opacity, theme]);
  const handleClick = () => {
    if (!closeOnClick) {
      return;
    }

    setIsOpen(false);

    if (onClose) {
      onClose();
    }
  };

  return isOpen ? (
    <div
      id={id}
      ref={ref}
      className={classes}
      onClick={handleClick}
      aria-hidden="true"
      {...additionalProps}
    ></div>
  ) : null;
});

Overlay.displayName = 'Overlay';

export { Overlay };
