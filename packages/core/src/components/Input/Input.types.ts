import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactElement } from 'react';

export type InputColor = 'blue' | 'purple' | 'gray' | 'dark' | 'black';
export type InputRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type InputShadow = 'none' | 'sm' | 'base' | 'md';
export type InputSize = 'xs' | 'sm' | 'md' | 'lg';
export type InputTone = 'light' | 'solid' | 'transparent';
export type InputType =
  | 'text'
  | 'number'
  | 'password'
  | 'file'
  | 'date'
  | 'time'
  | 'email'
  | 'search'
  | 'range'
  | 'datetime-local'
  | 'color'
  | 'tel';
export type InputValidation = 'none' | 'invalid' | 'valid' | 'warning';

export interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'size' | 'type'> {
  color?: InputColor;
  disabled?: boolean;
  leftIcon?: ReactElement;
  loading?: boolean;
  radius?: InputRadius;
  rightIcon?: ReactElement;
  shadow?: InputShadow;
  size?: InputSize;
  tone?: InputTone;
  type?: InputType;
  validation?: InputValidation;
  withRing?: boolean;
  withKeyboard?: boolean;
  enabledPasswordToggle?: boolean;
  enableCountryCode?: boolean;
  setCountryCode?: (inputText:string) => void;
}

export type InputComponent = ForwardRefExoticComponent<InputProps> & {
  displayName?: string;
};
