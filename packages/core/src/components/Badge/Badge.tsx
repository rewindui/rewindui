'use client';
import { BadgeComponent, BadgeProps } from '@components/Badge/Badge.types';
import { useComponentTheme } from '@theme/theme.context';
import { useComponentVariant } from '@theme/variant.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<BadgeProps> = {
  color: 'purple',
  radius: 'md',
  shadow: 'none',
  shadowColor: 'none',
  size: 'sm',
  tone: 'solid',
};

const Badge: BadgeComponent = forwardRef((props: BadgeProps, ref?: Ref<HTMLSpanElement>) => {
  const variantProps = useComponentVariant('Badge', props.variant) as Partial<BadgeProps>;
  const theme = useComponentTheme('Badge');
  const {
    children,
    className = '',
    color,
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

  const classes = useMemo(() => {
    return twMerge(
      theme({
        className,
        color,
        radius,
        shadow,
        shadowColor,
        size,
        tone,
      })
    );
  }, [theme, className, color, radius, shadow, shadowColor, size, tone]);

  const id = usePropId(props.id);

  return (
    <span id={id} ref={ref} className={classes} {...additionalProps}>
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export default Badge;
