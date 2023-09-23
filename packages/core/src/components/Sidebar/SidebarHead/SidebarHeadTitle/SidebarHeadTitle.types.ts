import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface SidebarHeadTitleProps extends ComponentPropsWithRef<'div'> {}

export type SidebarHeadTitleComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarHeadTitleProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
