import { useComponentTheme } from '@theme/theme.context';
import { useComponentVariant } from '@theme/variant.context';
import { ElementType, forwardRef, useMemo } from 'react';
import { PolymorphicComponentProp, PolymorphicRef } from '../../types';
import { TextComponent, TextProps } from './Text.types';

const defaultProps: Partial<TextProps> = {
  size: 'base',
  color: 'dark',
  weight: 'normal',
};

export const Text: TextComponent = forwardRef(
  <C extends ElementType = 'span'>(
    props: PolymorphicComponentProp<C, TextProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const variant = useComponentVariant('Text', props.variant) as Partial<TextProps>;
    const theme = useComponentTheme('Text');
    const {
      as,
      children,
      className = '',
      color,
      leading,
      size,
      tracking,
      weight,
      ...additionalProps
    } = {
      ...defaultProps,
      ...variant,
      ...props,
    };
    const Component = as || 'span';
    const classes = useMemo(() => {
      return theme({ size, color, weight, leading, tracking, className });
    }, [theme, size, color, weight, leading, tracking, className]);

    return (
      <Component ref={ref} className={classes} {...additionalProps}>
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
