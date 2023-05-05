import { ComboboxColor } from '@components/Combobox/Combobox.types';
import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export interface ComboboxGroupProps extends ComponentPropsWithRef<'div'> {
  color?: ComboboxColor;
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
