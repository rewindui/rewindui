'use client';
import { RibbonComponent, RibbonProps } from '@components/Ribbon/Ribbon.types';
import { useComponentTheme } from '@theme/theme.context';
import { useComponentVariant } from '@theme/variant.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<RibbonProps> = {
  color: 'purple',
  position: 'top-right',
  radius: 'base',
  shadow: 'base',
  shadowColor: 'none',
  size: 'md',
  tone: 'solid',
};

const Ribbon: RibbonComponent = forwardRef((props: RibbonProps, ref?: Ref<HTMLDivElement>) => {
  const variantProps = useComponentVariant('Ribbon', props.variant) as Partial<RibbonProps>;
  const theme = useComponentTheme('Ribbon');
  const {
    children,
    className = '',
    color,
    position,
    radius,
    shadow,
    shadowColor,
    size,
    tone,
    variant,
    ...additionalProps
  } = {
    ...defaultProps,
    ...variantProps,
    ...props,
  };
  const id = usePropId(props.id);

  const classes = useMemo(() => {
    return twMerge(
      theme({
        className,
        position,
        radius,
        shadow,
        shadowColor,
        size,
        color,
        tone,
      })
    );
  }, [className, color, position, radius, shadow, shadowColor, size, theme, tone]);

  return (
    <div id={id} ref={ref} className={classes} {...additionalProps}>
      {children}
    </div>
  );
});

Ribbon.displayName = 'Ribbon';

export default Ribbon;
