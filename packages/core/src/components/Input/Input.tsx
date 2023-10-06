'use client';
import { useFormControlContext } from '@components/FormControl/FormControl.context';
import { InputComponent, InputProps } from '@components/Input/Input.types';
import { useInputGroupContext } from '@components/InputGroup/InputGroup.context';
import { default as Spinner } from '@components/Spinner/Spinner';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { cloneElement, forwardRef, Ref, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { KeyboardIcon } from '@icons/Keyboard';
import { EyeSlashIcon } from '@icons/EyeSlash';
import { EyeIcon } from '@icons/Eye';

const defaultProps: Partial<InputProps> = {
  color: 'blue',
  disabled: false,
  loading: false,
  radius: 'base',
  shadow: 'none',
  size: 'sm',
  tone: 'light',
  validation: 'none',
  withRing: false,
  withKeyboard: false,
  enabledPasswordToggle: true
};

const Input: InputComponent = forwardRef((props: InputProps, ref?: Ref<HTMLInputElement>) => {
  const theme = useComponentTheme('Input');
  const {
    className = '',
    color,
    controlId,
    leftIcon,
    loading,
    radius,
    rightIcon,
    shadow,
    size,
    tone,
    type = 'text',
    validation,
    withRing,
    withKeyboard,
    enabledPasswordToggle,
    ...additionalProps
  } = {
    ...defaultProps,
    ...useFormControlContext(),
    ...useInputGroupContext(),
    ...props,
  };
  const propId = usePropId(props.id);
  const id = controlId || propId;
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;
  const disabled = props.disabled || loading;
  const [showText, setShowText] = useState(false);

  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        className,
        color,
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
        withKeyboard,
        enabledPasswordToggle
      })
    );
  }, [
    className,
    color,
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
    withKeyboard,
    enabledPasswordToggle
  ]);

  const togglePassword = () => setShowText(!showText);

  const getActiveType = () => {
    if (showText)
      return 'text';
    return 'password';
  }

  const inputElement = (
    <input
      id={id}
      type={type === 'password' ? getActiveType() : type}
      ref={ref}
      className={classes}
      {...additionalProps}
      disabled={disabled}
    />
  );

  return hasLeftIcon || hasRightIcon || loading || withKeyboard || (type == 'password' && enabledPasswordToggle) ? (
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
      {
        type == 'password' && enabledPasswordToggle && (
          <span className={theme.eyeIconWrapper({ size, withKeyboard })} onClick={togglePassword}>
            {showText ? <EyeSlashIcon /> : <EyeIcon />}
          </span>
        )
      }
      {withKeyboard && (
        <span className={theme.keyboardIconWrapper({ size })}>
          <KeyboardIcon />
        </span>
      )}
    </div>
  ) : (
    inputElement
  );
});

Input.displayName = 'Input';

export default Input;
