import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactElement } from 'react';

export type SelectColor = 'blue' | 'purple' | 'gray' | 'dark' | 'black';
export type SelectRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type SelectShadow = 'none' | 'sm' | 'base' | 'md';
export type SelectSize = 'xs' | 'sm' | 'md' | 'lg';
export type SelectTone = 'light' | 'solid' | 'transparent';
export type SelectValidation = 'none' | 'invalid' | 'valid' | 'warning';

export interface SelectProps extends Omit<ComponentPropsWithRef<'select'>, 'size'> {
  color?: SelectColor;
  disabled?: boolean;
  leftIcon?: ReactElement;
  radius?: SelectRadius;
  shadow?: SelectShadow;
  size?: SelectSize;
  tone?: SelectTone;
  validation?: SelectValidation;
  withRing?: boolean;
}

export type SelectComponent = ForwardRefExoticComponent<SelectProps> & {
  displayName?: string;
};
