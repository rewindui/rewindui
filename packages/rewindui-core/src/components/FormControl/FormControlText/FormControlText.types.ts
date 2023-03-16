import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type FormControlTextValidation = 'none' | 'invalid' | 'valid' | 'warning';

export interface FormControlTextProps extends ComponentPropsWithRef<'div'> {
  validation?: FormControlTextValidation;
}

export type FormControlTextComponent = ForwardRefExoticComponent<FormControlTextProps> & {
  displayName?: string;
};
