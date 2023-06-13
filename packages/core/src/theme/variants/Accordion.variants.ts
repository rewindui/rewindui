import { AccordionProps, AccordionVariant } from '@components/Accordion/Accordion.types';
import { AsProp } from '../../types/polymorphic.types';

export const accordionVariants: Record<AccordionVariant, AccordionProps & AsProp<any>> = {
  primary: {},
};
