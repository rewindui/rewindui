import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type FormControlSize = 'xs' | 'sm' | 'md' | 'lg';
export type FormControlValidation = 'none' | 'invalid' | 'valid' | 'warning';

export interface FormControlContext {
  controlId?: string;
  size?: FormControlSize;
  validation?: FormControlValidation;
}

export interface FormControlProps extends ComponentPropsWithRef<'div'> {
  size?: FormControlSize;
  validation?: FormControlValidation;
}

export type FormControlComponent = ForwardRefExoticComponent<FormControlProps> & {
  displayName?: string;
};
