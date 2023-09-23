import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface SidebarSeparatorProps extends ComponentPropsWithRef<'hr'> {}

export type SidebarSeparatorComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarSeparatorProps> & RefAttributes<HTMLHRElement>
> & {
  displayName?: string;
};
