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
export type SwitchRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type SwitchSize = 'sm' | 'md' | 'lg' | 'xl';

export interface SwitchProps extends Omit<ComponentPropsWithRef<'button'>, 'onChange'> {
  color?: SwitchColor;
  checked?: boolean;
  onChange?(value: boolean | null | undefined): void;
  size?: SwitchSize;
  radius?: SwitchRadius;
  description?: string | ReactNode;
  descriptionClassName?: string;
  error?: string | ReactNode;
  errorClassName?: string;
  disabled?: boolean;
  label?: string | ReactNode;
  labelClassName?: string;
  withRing?: boolean;
}

export type SwitchComponent = ForwardRefExoticComponent<SwitchProps> & {
  displayName?: string;
};
