import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface TfootProps extends ComponentPropsWithRef<'tfoot'> {}

export type TfootComponent = ForwardRefExoticComponent<
  PropsWithoutRef<TfootProps> & RefAttributes<HTMLTableSectionElement>
> & {
  displayName?: string;
};
