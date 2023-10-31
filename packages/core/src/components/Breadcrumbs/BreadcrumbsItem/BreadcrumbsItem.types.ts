import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface BreadcrumbsItemProps extends ComponentPropsWithRef<'li'> {
  href?: string;
}

export type BreadcrumbsItemComponent = ForwardRefExoticComponent<
  PropsWithoutRef<BreadcrumbsItemProps> & RefAttributes<HTMLLIElement>
> & {
  displayName?: string;
};
