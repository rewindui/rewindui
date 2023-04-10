import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface CardBodyProps extends ComponentPropsWithRef<'div'> {}

export type CardBodyComponent = ForwardRefExoticComponent<
  PropsWithoutRef<CardBodyProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
