import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from 'react';

export interface SidebarNavSectionItemProps extends ComponentPropsWithRef<'li'> {
  as?: 'button' | 'a';
  href?: string;
  icon?: ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
}

export interface SidebarNavSectionItemContext {
  childrenCollapsed: boolean;
}

export type SidebarNavSectionItemComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarNavSectionItemProps> & RefAttributes<HTMLLIElement>
> & {
  displayName?: string;
};
