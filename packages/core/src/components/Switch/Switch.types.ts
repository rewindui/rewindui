import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactNode } from 'react';

export type SwitchColor =
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type SwitchSize = 'sm' | 'md' | 'lg' | 'xl';
export type SwitchRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';

export interface SwitchProps extends Omit<ComponentPropsWithRef<'button'>, 'onChange'> {
  color?: SwitchColor;
  checked?: boolean;
  onChange?(value: boolean | null | undefined): void;
  size?: SwitchSize;
  radius?: SwitchRadius;
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
  wrapperProps?: Record<string, any>;
  withRing?: boolean;
}

export type SwitchComponent = ForwardRefExoticComponent<SwitchProps> & {
  displayName?: string;
};
