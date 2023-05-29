import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface TdProps extends ComponentPropsWithRef<'td'> {}

export type TdComponent = ForwardRefExoticComponent<
  PropsWithoutRef<TdProps> & RefAttributes<HTMLTableCellElement>
> & {
  displayName?: string;
};
