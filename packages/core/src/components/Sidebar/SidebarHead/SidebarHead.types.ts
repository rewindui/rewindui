import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface SidebarHeadProps extends ComponentPropsWithRef<'div'> {}

export type SidebarHeadComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarHeadProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
