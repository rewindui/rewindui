import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactNode } from 'react';

export interface DropdownContentProps extends Omit<ComponentPropsWithRef<'div'>, 'size'> {
  children: ReactNode;
}

export type DropdownContentComponent = ForwardRefExoticComponent<DropdownContentProps> & {
  displayName?: string;
};
