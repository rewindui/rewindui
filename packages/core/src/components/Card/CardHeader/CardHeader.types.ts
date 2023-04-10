import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from 'react';

export interface CardHeaderProps extends ComponentPropsWithRef<'div'> {
  actions?: ReactNode;
}

export type CardHeaderComponent = ForwardRefExoticComponent<
  PropsWithoutRef<CardHeaderProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
