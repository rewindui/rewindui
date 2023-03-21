import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactElement } from 'react';

export type InputTone = 'light' | 'solid' | 'transparent';
export type InputSize = 'xs' | 'sm' | 'md' | 'lg';
export type InputValidation = 'none' | 'invalid' | 'valid' | 'warning';
export type InputRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type InputShadow = 'none' | 'sm' | 'base' | 'md';
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
  | 'color';

export interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'size' | 'type'> {
  disabled?: boolean;
  loading?: boolean;
  tone?: InputTone;
  size?: InputSize;
  radius?: InputRadius;
  validation?: InputValidation;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  shadow?: InputShadow;
  type?: InputType;
  withRing?: boolean;
}

export type InputComponent = ForwardRefExoticComponent<InputProps> & {
  displayName?: string;
};
