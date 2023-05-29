import { PopoverArrowPlacement } from '@components/Popover';
import { usePopoverContext } from '@components/Popover/Popover.context';
import {
  PopoverContentComponent,
  PopoverContentProps,
} from '@components/Popover/PopoverContent/PopoverContent.types';
import { FloatingPortal } from '@floating-ui/react';
import { arrowSideDictionary } from '@helpers/arrow-side.dictionary';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const PopoverContent: PopoverContentComponent = forwardRef<HTMLDivElement, PopoverContentProps>(
  (props: PopoverContentProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Popover');
    const {
      children,
      className = '',
      ...additionalProps
    } = {
      ...props,
    };
    const id = usePropId(props.id);
    const {
      arrowRef,
      color,
      context,
      floating,
      getFloatingProps,
      open,
      radius,
      shadow,
      size,
      strategy,
      withinPortal,
      x,
      y,
    } = usePopoverContext();
    const [hidden, setHidden] = useState(!open);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      setTimeoutId(setTimeout(() => setHidden(!open), open ? 0 : 75));
    }, [open]);

    const arrowX = context.middlewareData.arrow?.x || 0;
    const arrowY = context.middlewareData.arrow?.y || 0;
    const arrowSide = arrowSideDictionary({
      side: context.placement,
    }) as PopoverArrowPlacement;

    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          arrowSide,
          className,
          color,
          open,
          radius,
          shadow,
          size,
        })
      );
    }, [arrowSide, className, color, open, radius, shadow, size, theme]);

    const arrowElement = (
      <span
        ref={arrowRef}
        className={theme.arrow({ arrowSide, color })}
        style={{
          ...(arrowSide !== 'right' && { left: `${arrowX}px` }),
          ...(arrowSide !== 'top' && { bottom: `${arrowY}px` }),
          [arrowSide]: '-5px',
        }}
      />
    );
    const popoverElement = !hidden && (
      <div
        id={id}
        ref={floating}
        className={classes}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
          visibility: x == null ? 'hidden' : 'visible',
        }}
        {...getFloatingProps}
        {...additionalProps}
      >
        {arrowElement}
        {children}
      </div>
    );

    return (
      <div ref={ref} className={className} aria-hidden={!open}>
        {withinPortal ? <FloatingPortal>{popoverElement}</FloatingPortal> : popoverElement}
      </div>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';

export { PopoverContent };
