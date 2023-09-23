import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface SidebarNavSectionTitleProps extends ComponentPropsWithRef<'li'> {}

export type SidebarNavSectionTitleComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarNavSectionTitleProps> & RefAttributes<HTMLLIElement>
> & {
  displayName?: string;
};
