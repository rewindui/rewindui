import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface ThProps extends ComponentPropsWithRef<'th'> {}

export type ThComponent = ForwardRefExoticComponent<
  PropsWithoutRef<ThProps> & RefAttributes<HTMLTableHeaderCellElement>
> & {
  displayName?: string;
};
