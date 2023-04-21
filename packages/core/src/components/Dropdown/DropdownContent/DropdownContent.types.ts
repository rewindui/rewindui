import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export interface DropdownContentProps extends Omit<ComponentPropsWithRef<'div'>, 'size'> {}

export type DropdownContentComponent = ForwardRefExoticComponent<DropdownContentProps> & {
  displayName?: string;
};
