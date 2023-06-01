import {
  AccordionComponent,
  AccordionContext,
  AccordionProps,
} from '@components/Accordion/Accordion.types';
import { AccordionBody } from '@components/Accordion/AccordionBody/AccordionBody';
import { AccordionHeader } from '@components/Accordion/AccordionHeader/AccordionHeader';
import { AccordionItem } from '@components/Accordion/AccordionItem/AccordionItem';
import { useComponentTheme } from '@theme/theme.context';
import { useComponentVariant } from '@theme/variant.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AccordionContextProvider } from './Accordion.context';

const defaultProps: Partial<AccordionProps> = {
  activeColor: 'purple',
  bordered: true,
  color: 'white',
  radius: 'md',
  shadow: 'none',
  shadowColor: 'none',
  size: 'md',
  tone: 'solid',
  withRing: true,
};

const AccordionRoot: AccordionComponent = forwardRef<HTMLDivElement, AccordionProps>(
  (props: AccordionProps, ref?: Ref<HTMLDivElement>) => {
    const variant = useComponentVariant('Accordion', props.variant) as Partial<AccordionProps>;
    const theme = useComponentTheme('Accordion');
    const {
      activeColor,
      bordered = true,
      children,
      className = '',
      color,
      defaultItem,
      radius,
      shadow,
      shadowColor,
      size,
      tone,
      withRing,
      ...additionalProps
    } = {
      ...defaultProps,
      ...variant,
      ...props,
    };
    const id = usePropId(props.id);
    const [activeItemAnchor, setActiveItemAnchor] = useState(defaultItem);
    const contextValue: AccordionContext = {
      activeColor,
      activeItemAnchor,
      bordered,
      color,
      radius,
      setActiveItemAnchor,
      size,
      tone,
      withRing,
    };

    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          bordered,
          className,
          color,
          radius,
          shadow,
          shadowColor,
          size,
        })
      );
    }, [bordered, className, color, radius, shadow, shadowColor, size, theme]);

    return (
      <AccordionContextProvider value={contextValue}>
        <div id={id} ref={ref} className={classes} {...additionalProps}>
          {children}
        </div>
      </AccordionContextProvider>
    );
  }
);

AccordionRoot.displayName = 'Accordion';

const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Header: AccordionHeader,
  Body: AccordionBody,
});

export default Accordion;
