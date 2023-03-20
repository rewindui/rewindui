import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactNode } from 'react';

export interface PopoverContentProps extends Omit<ComponentPropsWithRef<'div'>, 'size'> {
  children: ReactNode;
}

export type PopoverContentComponent = ForwardRefExoticComponent<PopoverContentProps> & {
  displayName?: string;
};
