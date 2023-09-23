import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface SidebarHeadToggleProps extends ComponentPropsWithRef<'button'> {}

export type SidebarHeadToggleComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarHeadToggleProps> & RefAttributes<HTMLButtonElement>
> & {
  displayName?: string;
};
