import {
  arrow,
  autoUpdate,
  offset as offsetModifier,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { flip, inline } from '@floating-ui/react-dom';
import { useMemo, useRef, useState } from 'react';
import { PopoverProps } from './Popover.types';

export function usePopover({
  placement = 'bottom',
  initiallyOpen = false,
  offset = 8,
  trigger = 'hover',
}: Partial<PopoverProps>): any {
  const arrowRef = useRef(null);
  const [open, setOpen] = useState(initiallyOpen);
  const { x, y, refs, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    middleware: [
      offsetModifier(offset),
      shift(),
      inline(),
      flip(),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { getFloatingProps, getReferenceProps } = useInteractions([
    useClick(context, {
      enabled: trigger === 'click',
      toggle: true,
    }),
    useHover(context, {
      enabled: trigger === 'hover',
      move: true,
      handleClose: safePolygon(),
    }),
    useFocus(context),
    useDismiss(context, {
      referencePress: false,
    }),
    useRole(context, { role: 'dialog' }),
  ]);

  return useMemo(
    () => ({
      x,
      y,
      reference: refs.setReference,
      floating: refs.setFloating,
      strategy,
      context,
      getFloatingProps: getFloatingProps(),
      getReferenceProps: getReferenceProps(),
      open,
      arrowRef,
    }),
    [open, setOpen, x, y]
  );
}
