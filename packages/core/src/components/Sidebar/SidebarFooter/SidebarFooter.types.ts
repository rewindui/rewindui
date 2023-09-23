import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface SidebarFooterProps extends ComponentPropsWithRef<'div'> {}

export type SidebarFooterComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarFooterProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
