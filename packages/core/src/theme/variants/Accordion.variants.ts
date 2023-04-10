import { AccordionProps, AccordionVariants } from '@components/Accordion/Accordion.types';
import { AsProp } from '../../types/polymorphic.types';

export const accordionVariants: Record<AccordionVariants, AccordionProps & AsProp<any>> = {
  primary: {},
};
