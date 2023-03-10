import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface CardFooterProps extends ComponentPropsWithRef<'div'> {}

export type CardFooterComponent = ForwardRefExoticComponent<
  PropsWithoutRef<CardFooterProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
