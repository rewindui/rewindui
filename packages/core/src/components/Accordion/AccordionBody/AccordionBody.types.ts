import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface AccordionBodyProps extends ComponentPropsWithRef<'div'> {}

export type AccordionBodyComponent = ForwardRefExoticComponent<
  PropsWithoutRef<AccordionBodyProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
