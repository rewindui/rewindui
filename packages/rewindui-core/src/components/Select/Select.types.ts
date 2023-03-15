import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactElement } from 'react';

export type SelectTone = 'base' | 'solid' | 'transparent';
export type SelectSize = 'xs' | 'sm' | 'md' | 'lg';
export type SelectValidation = 'none' | 'invalid' | 'valid' | 'warning';
export type SelectRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type SelectShadow = 'none' | 'sm' | 'base' | 'md';

export interface SelectProps extends Omit<ComponentPropsWithRef<'select'>, 'size'> {
  disabled?: boolean;
  loading?: boolean;
  tone?: SelectTone;
  size?: SelectSize;
  radius?: SelectRadius;
  validation?: SelectValidation;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  shadow?: SelectShadow;
  withRing?: boolean;
}

export type SelectComponent = ForwardRefExoticComponent<SelectProps> & {
  displayName?: string;
};
