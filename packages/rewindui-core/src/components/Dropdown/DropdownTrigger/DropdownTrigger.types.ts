import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export interface DropdownTriggerProps extends Omit<ComponentPropsWithRef<'div'>, 'size'> {}

export type DropdownTriggerComponent = ForwardRefExoticComponent<DropdownTriggerProps> & {
  displayName?: string;
};
