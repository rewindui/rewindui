import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface SidebarHeadLogoProps extends ComponentPropsWithRef<'div'> {}

export type SidebarHeadLogoComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarHeadLogoProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
