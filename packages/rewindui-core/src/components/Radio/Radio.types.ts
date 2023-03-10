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
  descriptionProps?: Record<string, any>;
  error?: string | ReactNode;
  errorClassName?: string;
  errorProps?: Record<string, any>;
  disabled?: boolean;
  label?: string | ReactNode;
  labelClassName?: string;
  labelProps?: Record<string, any>;
  radius?: RadioRadius;
  size?: RadioSize;
  tone?: RadioTone;
  wrapperProps?: Record<string, any>;
  withRing?: boolean;
}

export type RadioComponent = ForwardRefExoticComponent<
  PropsWithoutRef<RadioProps> & RefAttributes<HTMLInputElement>
>;
