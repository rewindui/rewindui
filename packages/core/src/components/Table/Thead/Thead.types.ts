import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface TheadProps extends ComponentPropsWithRef<'thead'> {}

export type TheadComponent = ForwardRefExoticComponent<
  PropsWithoutRef<TheadProps> & RefAttributes<HTMLTableSectionElement>
> & {
  displayName?: string;
};
