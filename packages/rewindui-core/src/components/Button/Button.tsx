import { Spinner } from '@components/Spinner';
import { useComponentTheme } from '@theme/theme.context';
import { useComponentVariant } from '@theme/variant.context';
import { usePropId } from '@utils/usePropId';
import { PolymorphicComponentProp, PolymorphicRef } from '../../types';
import { ButtonComponent, ButtonProps } from './Button.types';
import { ElementType, forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<ButtonProps> = {
  animation: 'none',
  color: 'blue',
  disabled: false,
  icon: false,
  loading: false,
  radius: 'md',
  shadow: 'none',
  shadowColor: 'none',
  size: 'md',
  tone: 'solid',
  withRing: true,
};

export const Button: ButtonComponent = forwardRef(
  <C extends ElementType = 'button'>(
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
      icon,
      loading,
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
      return twMerge(
        theme.base({
          animation,
          className,
          color,
          disabled,
          icon,
          loading,
          radius,
          shadow,
          shadowColor,
          size,
          tone,
          withRing,
        })
      );
    }, [
      animation,
      className,
      color,
      disabled,
      icon,
      loading,
      radius,
      shadow,
      shadowColor,
      size,
      theme,
      tone,
      withRing,
    ]);
    // const chevronClasses = withChevron ? chevronStyles({ open, size, chevronRotation }) : '';
    const spinnerClasses = loading ? theme.spinner({ size }) : '';

    const Component = as || 'button';
    const id = usePropId(props.id);
    const type = props.type || 'button';

    return (
      <Component
        id={id}
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...additionalProps}
      >
        {loading && <Spinner className={spinnerClasses} />}
        {children}
        {/*{withChevron && <IconChevronDown className={chevronClasses} />}*/}
      </Component>
    );
  }
);

Button.displayName = 'Button';
