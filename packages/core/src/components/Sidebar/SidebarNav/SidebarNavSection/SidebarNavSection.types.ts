import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface SidebarNavSectionProps extends ComponentPropsWithRef<'ul'> {
  isChild?: boolean;
}

export type SidebarNavSectionComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarNavSectionProps> & RefAttributes<HTMLUListElement>
> & {
  displayName?: string;
};
