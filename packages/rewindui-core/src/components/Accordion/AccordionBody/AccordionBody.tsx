import { useAccordionContext } from '@components/Accordion/Accordion.context';
import {
  AccordionBodyComponent,
  AccordionBodyProps,
} from '@components/Accordion/AccordionBody/AccordionBody.types';
import { useAccordionItemContext } from '@components/Accordion/AccordionItem/AccordionItem.context';
import { Collapse } from '@components/Collapse';
import { useComponentTheme } from '@theme/theme.context';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

export const AccordionBody: AccordionBodyComponent = forwardRef<HTMLDivElement, AccordionBodyProps>(
  (props: AccordionBodyProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Accordion');
    const {
      children,
      className = '',
      ...additionalProps
    } = {
      ...props,
    };
    const { activeItemAnchor, bordered, size } = useAccordionContext();
    const { anchor, bodyId, headerId } = useAccordionItemContext();

    const classes = useMemo(() => {
      return twMerge(
        theme.body({
          bordered,
          className,
          size,
        })
      );
    }, [bordered, className, size, theme]);

    return (
      <Collapse isOpen={anchor === activeItemAnchor}>
        <div
          id={bodyId}
          ref={ref}
          role="region"
          aria-labelledby={headerId}
          className={classes}
          {...additionalProps}
        >
          {children}
        </div>
      </Collapse>
    );
  }
);

AccordionBody.displayName = 'AccordionBody';
