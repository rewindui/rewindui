import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from 'react';

export type RadioColor = 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'gray' | 'dark' | 'black';
export type RadioRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type RadioSize = 'sm' | 'md' | 'lg' | 'xl';
export type RadioTone = 'solid' | 'light';

export interface RadioProps extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  color?: RadioColor;
  description?: string | ReactNode;
  descriptionClassName?: string;
  disabled?: boolean;
  error?: string | ReactNode;
  errorClassName?: string;
  label?: string | ReactNode;
  labelClassName?: string;
  radius?: RadioRadius;
  size?: RadioSize;
  tone?: RadioTone;
  withRing?: boolean;
}

export type RadioComponent = ForwardRefExoticComponent<
  PropsWithoutRef<RadioProps> & RefAttributes<HTMLInputElement>
>;
