import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from 'react';

export type CheckboxColor =
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type CheckboxRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type CheckboxSize = 'sm' | 'md' | 'lg' | 'xl';
export type CheckboxTone = 'solid' | 'light';

export interface CheckboxProps extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  color?: CheckboxColor;
  description?: string | ReactNode;
  descriptionClassName?: string;
  error?: string | ReactNode;
  errorClassName?: string;
  disabled?: boolean;
  label?: string | ReactNode;
  labelClassName?: string;
  radius?: CheckboxRadius;
  size?: CheckboxSize;
  tone?: CheckboxTone;
  withRing?: boolean;
}

export type CheckboxComponent = ForwardRefExoticComponent<
  PropsWithoutRef<CheckboxProps> & RefAttributes<HTMLInputElement>
>;
