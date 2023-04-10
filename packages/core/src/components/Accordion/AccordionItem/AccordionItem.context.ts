import { AccordionItemContext } from '@components/Accordion/AccordionItem/AccordionItem.types';
import { createElementContext } from '@hooks/use-element-context.hook';

export const [AccordionItemContextProvider, useAccordionItemContext] =
  createElementContext<AccordionItemContext>(
    'Accordion Item compound components cannot be rendered outside the Accordion Item component'
  );
