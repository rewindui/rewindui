import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from 'react';

export type BreadcrumbsColor = 'gray' | 'slate' | 'zinc';
export type BreadcrumbsSize = 'sm' | 'base' | 'md' | 'lg';

export interface BreadcrumbsProps extends ComponentPropsWithRef<'ul'> {
  color?: BreadcrumbsColor;
  separator?: ReactNode;
  size?: BreadcrumbsSize;
}

export interface BreadcrumbsContext {
  color?: BreadcrumbsColor;
}

export type BreadcrumbsComponent = ForwardRefExoticComponent<
  PropsWithoutRef<BreadcrumbsProps> & RefAttributes<HTMLUListElement>
> & {
  displayName?: string;
};
