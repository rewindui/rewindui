import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export interface FormControlLabelProps extends ComponentPropsWithRef<'label'> {
  formControlId?: any;
  required?: boolean;
}

export type FormControlLabelComponent = ForwardRefExoticComponent<FormControlLabelProps> & {
  displayName?: string;
};
