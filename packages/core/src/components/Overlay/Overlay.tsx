'use client';
import { OverlayComponent, OverlayProps } from '@components/Overlay/Overlay.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useEffect, useMemo } from 'react';
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
    open,
    className = '',
    ...additionalProps
  } = {
    ...defaultProps,
    ...props,
  };
  const id = usePropId(props.id);
  const classes = useMemo(() => {
    return twMerge(theme({ blur, className, color, open, opacity }));
  }, [blur, className, color, open, opacity, theme]);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [open]);

  return <div id={id} ref={ref} className={classes} aria-hidden="true" {...additionalProps}></div>;
});

Overlay.displayName = 'Overlay';

export default Overlay;
