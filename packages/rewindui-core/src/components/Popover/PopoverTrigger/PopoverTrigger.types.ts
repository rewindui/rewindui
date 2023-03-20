import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export interface PopoverTriggerProps extends Omit<ComponentPropsWithRef<'div'>, 'size'> {}

export type PopoverTriggerComponent = ForwardRefExoticComponent<PopoverTriggerProps> & {
  displayName?: string;
};
