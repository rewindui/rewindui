import { useAccordionContext } from '@components/Accordion/Accordion.context';
import {
  AccordionHeaderComponent,
  AccordionHeaderProps,
} from '@components/Accordion/AccordionHeader/AccordionHeader.types';
import { useAccordionItemContext } from '@components/Accordion/AccordionItem/AccordionItem.context';
import { ChevronDownIcon } from '@icons/ChevronDown';
import { useComponentTheme } from '@theme/theme.context';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const AccordionHeader: AccordionHeaderComponent = forwardRef<
  HTMLButtonElement,
  AccordionHeaderProps
>((props: AccordionHeaderProps, ref?: Ref<HTMLButtonElement>) => {
  const theme = useComponentTheme('Accordion');
  const {
    children,
    className = '',
    ...additionalProps
  } = {
    ...props,
  };
  const {
    activeColor,
    activeItemAnchor,
    bordered,
    radius,
    setActiveItemAnchor,
    size,
    tone,
    withRing,
  } = useAccordionContext();
  const { anchor, headerId, bodyId } = useAccordionItemContext();
  const expanded = anchor === activeItemAnchor;
  const handleClick = () => {
    const activeAnchor = expanded ? '' : anchor;
    setActiveItemAnchor(activeAnchor);
  };
  const state = expanded ? 'active' : 'inactive';

  const classes = useMemo(() => {
    return twMerge(
      theme.header({
        bordered,
        className,
        size,
        activeColor,
        radius,
        state,
        tone,
        withRing,
      })
    );
  }, [bordered, className, radius, activeColor, size, state, theme, tone, withRing]);

  const iconClasses = theme.icon({ size, state });

  return (
    <button
      id={headerId}
      ref={ref}
      type="button"
      onClick={handleClick}
      className={classes}
      aria-expanded={expanded}
      aria-controls={bodyId}
      {...additionalProps}
    >
      {children}
      <ChevronDownIcon className={iconClasses} />
    </button>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

export { AccordionHeader };
