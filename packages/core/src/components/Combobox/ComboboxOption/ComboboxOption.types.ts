import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactNode } from 'react';

export interface ComboboxOptionProps extends ComponentPropsWithRef<'button'> {
  description?: string;
  label: string;
  media?: ReactNode;
  value: string;
}

export type ComboboxOptionComponent = ForwardRefExoticComponent<ComboboxOptionProps> & {
  displayName?: string;
};
