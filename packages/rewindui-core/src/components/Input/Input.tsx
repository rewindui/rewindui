import { useFormControlContext } from '@components/FormControl/FormControl.context';
import { InputComponent, InputProps } from '@components/Input/Input.types';
import { useInputGroupContext } from '@components/InputGroup/InputGroup.context';
import { usePropId } from '@utils/usePropId';
import { cloneElement, forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { Spinner, useComponentTheme } from '../..';

const defaultProps: Partial<InputProps> = {
  tone: 'light',
  radius: 'md',
  size: 'md',
  validation: 'none',
  shadow: 'none',
  withRing: true,
  disabled: false,
  loading: false,
};

const Input: InputComponent = forwardRef((props: InputProps, ref?: Ref<HTMLInputElement>) => {
  const theme = useComponentTheme('Input');
  const {
    className = '',
    loading,
    tone,
    size,
    radius,
    validation,
    leftIcon,
    rightIcon,
    shadow,
    withRing,
    type = 'text',
    ...additionalProps
  } = {
    ...defaultProps,
    ...useFormControlContext(),
    ...useInputGroupContext(),
    ...props,
  };
  const id = usePropId(props.id);
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;
  const disabled = props.disabled || loading;

  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        className,
        disabled,
        hasLeftIcon,
        hasRightIcon,
        loading,
        radius,
        shadow,
        size,
        tone,
        type,
        validation,
        withRing,
      })
    );
  }, [
    className,
    disabled,
    hasLeftIcon,
    hasRightIcon,
    loading,
    radius,
    shadow,
    size,
    theme,
    tone,
    type,
    validation,
    withRing,
  ]);

  const inputElement = (
    <input
      id={id}
      type={type}
      ref={ref}
      className={classes}
      {...additionalProps}
      disabled={disabled}
    />
  );

  return hasLeftIcon || hasRightIcon || loading ? (
    <div className={theme.wrapper()}>
      {leftIcon && (
        <span className={theme.leftIconWrapper({ size })}>
          {cloneElement(leftIcon, {
            className: theme.icon({ tone, size, className: leftIcon.props.className }),
          })}
        </span>
      )}
      {inputElement}
      {rightIcon && !loading && (
        <span className={theme.rightIconWrapper({ size })}>
          {cloneElement(rightIcon, {
            className: theme.icon({ tone, size, className: rightIcon.props.className }),
          })}
        </span>
      )}
      {loading && (
        <span className={theme.rightIconWrapper({ size })}>
          <Spinner size={size} color="gray" />
        </span>
      )}
    </div>
  ) : (
    inputElement
  );
});

Input.displayName = 'Input';

export { Input };
