import { ComponentPropsWithoutRef, FC } from 'react';

export interface AccordionItemContext {
  anchor: string;
  bodyId: string;
  headerId: string;
}

export interface AccordionItemProps extends ComponentPropsWithoutRef<'div'> {
  anchor: string;
}

export type AccordionItemComponent = FC<AccordionItemProps> & {
  displayName?: string;
};
