import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export interface ComboboxGroupProps extends ComponentPropsWithRef<'div'> {
  heading?: string;
  weight?:
    | 'thin'
    | 'extraLight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semiBold'
    | 'bold'
    | 'extraBold'
    | 'black';
}

export type ComboboxGroupComponent = ForwardRefExoticComponent<ComboboxGroupProps> & {
  displayName?: string;
};
