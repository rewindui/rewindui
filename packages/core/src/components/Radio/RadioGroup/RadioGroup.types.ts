import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type RadioGroupOrientation = 'horizontal' | 'vertical';

export interface RadioGroupProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  initialValue?: string;
  name: string;
  onChange?(value: string | null | undefined): void;
  orientation?: RadioGroupOrientation;
}

export interface RadioGroupContext {
  initialValue?: string;
  name: string;
  setValue(value: string): void;
  value?: string;
}

export type RadioGroupComponent = ForwardRefExoticComponent<RadioGroupProps> & {
  displayName?: string;
};
