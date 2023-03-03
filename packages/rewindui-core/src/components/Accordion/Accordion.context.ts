import { AccordionContext } from '@components/Accordion/Accordion.types';
import { createElementContext } from '@hooks/use-element-context.hook';

export const [AccordionContextProvider, useAccordionContext] =
  createElementContext<AccordionContext>(
    'Accordion compound components cannot be rendered outside the Accordion component'
  );
