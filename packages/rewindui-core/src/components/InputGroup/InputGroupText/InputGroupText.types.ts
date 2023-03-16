import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export interface InputGroupTextProps extends ComponentPropsWithRef<'div'> {}

export type InputGroupTextComponent = ForwardRefExoticComponent<InputGroupTextProps> & {
  displayName?: string;
};
