'use client';
import { useFormControlContext } from '@components/FormControl/FormControl.context';
import { InputComponent, InputProps } from '@components/Input/Input.types';
import { useInputGroupContext } from '@components/InputGroup/InputGroup.context';
import { default as Spinner } from '@components/Spinner/Spinner';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { cloneElement, forwardRef, Ref, useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { KeyboardIcon } from '@icons/Keyboard';
import { EyeSlashIcon } from '@icons/EyeSlash';
import { EyeIcon } from '@icons/Eye';
import { countryData } from './Countries';
import { default as Dropdown } from '@components/Dropdown/Dropdown';
import { default as Button } from '@components/Button/Button';

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
  enabledPasswordToggle: true,
  enableCountryCode: true,
  validationMessage: '',
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
    enableCountryCode,
    setCountryCode,
    validationMessage,
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
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);

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
        validation: validationMessage === '' ? validation : 'invalid',
        withRing,
        withKeyboard,
        enabledPasswordToggle,
        enableCountryCode,
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
    validationMessage,
    withRing,
    withKeyboard,
    enabledPasswordToggle,
    enableCountryCode,
  ]);


  useEffect(() => {
    if (props.setCountryCode) {
      props.setCountryCode(selectedCountry.code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  const togglePassword = () => setShowText(!showText);

  const getActiveType = () => {
    if (showText) return 'text';
    return 'password';
  };

  const handleCountryCodeSelection = (country: typeof selectedCountry) => {
    let selectedCountry = { ...country };
    setSelectedCountry(selectedCountry);
  };

  const inputElement = (
    <input
      id={id}
      ref={ref}
      type={type === 'password' ? getActiveType() : type}
      className={classes}
      {...additionalProps}
      disabled={disabled}
    />
  );

  const dropdownItem = (country: typeof selectedCountry) => {
    return (
      <Dropdown.Item
        key={`country-item-${country.code}`}
        onClick={(event) => handleCountryCodeSelection(country)}
        className="hover:bg-primary-100 flex cursor-pointer flex-row items-center gap-2 p-2.5 border-b-2 border-solid border-gray-200 "
      >
        {country.code} - {country.name}
      </Dropdown.Item>
    );
  };

  return hasLeftIcon ||
    hasRightIcon ||
    loading ||
    withKeyboard ||
    validationMessage ||
    (type == 'password' && enabledPasswordToggle) ||
    (type == 'tel' && enableCountryCode) ? (
    <div className="flex flex-col">
      <div className={theme.wrapper()}>
        {leftIcon && (
          <span className={theme.leftIconWrapper({ size })}>
            {cloneElement(leftIcon, {
              className: theme.icon({ tone, size, className: leftIcon.props.className }),
            })}
          </span>
        )}
        {type == 'tel' && enableCountryCode && (
          <span className={theme.countryCodeWrapper({})}>
            <Dropdown>
              <Dropdown.Trigger>
                <Button variant="tertiary" className="px-4">
                  {selectedCountry.code}
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Content>
                {countryData.map((country) => dropdownItem(country))}
              </Dropdown.Content>
            </Dropdown>
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
        {type == 'password' && enabledPasswordToggle && (
          <span className={theme.eyeIconWrapper({ size, withKeyboard })} onClick={togglePassword}>
            {showText ? <EyeSlashIcon /> : <EyeIcon />}
          </span>
        )}
        {withKeyboard && (
          <span className={theme.keyboardIconWrapper({ size })}>
            <KeyboardIcon />
          </span>
        )}
      </div>
      {validationMessage?.trim() !== '' && (
        <div className={theme.validationMessage({ size })}>{validationMessage}</div>
      )}
    </div>
  ) : (
    inputElement
  );
});

Input.displayName = 'Input';

export default Input;
