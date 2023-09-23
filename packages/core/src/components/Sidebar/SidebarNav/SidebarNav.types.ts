import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface SidebarNavProps extends ComponentPropsWithRef<'nav'> {}

export type SidebarNavComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarNavProps> & RefAttributes<HTMLElement>
> & {
  displayName?: string;
};
