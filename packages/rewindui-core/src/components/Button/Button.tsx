import { Spinner } from '@components/Spinner';
import { useComponentTheme } from '@theme/theme.context';
import { useComponentVariant } from '@theme/variant.context';
import { usePropId } from '@utils/usePropId';
import { PolymorphicComponentProp, PolymorphicRef } from '../../types';
import { ButtonComponent, ButtonProps } from './Button.types';
import React, { forwardRef, useMemo } from 'react';

const defaultProps: Partial<ButtonProps> = {
  animation: 'none',
  color: 'blue',
  disabled: false,
  loading: false,
  icon: false,
  withRing: true,
  radius: 'md',
  size: 'md',
  tone: 'solid',
  shadow: 'none',
  shadowColor: 'none',
};

export const Button: ButtonComponent = forwardRef(
  <C extends React.ElementType = 'button'>(
    props: PolymorphicComponentProp<C, ButtonProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const variant = useComponentVariant('Button', props.variant) as Partial<ButtonProps>;
    const theme = useComponentTheme('Button');
    const {
      animation,
      as,
      children,
      className = '',
      color,
      disabled,
      loading,
      icon,
      radius,
      shadow,
      shadowColor,
      size,
      tone,
      withRing,
      ...additionalProps
    } = {
      ...defaultProps,
      // ...useInputGroupContext(),
      ...variant,
      ...props,
    };
    // const { open, withChevron, chevronRotation } = {
    //   ...useDropdownContext(),
    // };

    const classes = useMemo(() => {
      return theme.base({
        tone,
        color,
        size,
        radius,
        animation,
        shadow,
        shadowColor,
        icon,
        loading,
        disabled,
        withRing,
        className,
      });
    }, [
      theme,
      tone,
      color,
      size,
      radius,
      animation,
      shadow,
      shadowColor,
      icon,
      loading,
      disabled,
      withRing,
      className,
    ]);
    // const chevronClasses = withChevron ? chevronStyles({ open, size, chevronRotation }) : '';
    const spinnerClasses = loading ? theme.spinner({ color, size, tone }) : '';

    const Component = as || 'button';
    const id = usePropId(props.id);
    const title = props.title || '';
    const type = props.type || 'button';
    const spinnerColors = {
      white: 'gray',
      blue: 'white',
      red: 'white',
      green: 'white',
      yellow: 'white',
      purple: 'white',
      gray: 'gray',
      dark: 'white',
      black: 'white',
    } as const;

    return (
      <Component
        id={id}
        title={title}
        className={classes}
        type={type}
        {...additionalProps}
        disabled={disabled || loading}
        ref={ref}
      >
        {loading && <Spinner className={spinnerClasses} />}
        {children}
        {/*{withChevron && <IconChevronDown className={chevronClasses} />}*/}
      </Component>
    );
  }
);

Button.displayName = 'Button';
