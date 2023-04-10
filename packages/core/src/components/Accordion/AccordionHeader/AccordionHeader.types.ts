import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface AccordionHeaderProps extends ComponentPropsWithRef<'button'> {}

export type AccordionHeaderComponent = ForwardRefExoticComponent<
  PropsWithoutRef<AccordionHeaderProps> & RefAttributes<HTMLButtonElement>
> & {
  displayName?: string;
};
