import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export interface FormControlLabelProps extends ComponentPropsWithRef<'label'> {
  required?: boolean;
}

export type FormControlLabelComponent = ForwardRefExoticComponent<FormControlLabelProps> & {
  displayName?: string;
};
