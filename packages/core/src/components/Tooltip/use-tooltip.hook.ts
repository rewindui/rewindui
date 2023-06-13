import { TooltipArrowPlacement, TooltipProps } from '@components/Tooltip/Tooltip.types';
import {
  arrow,
  autoUpdate,
  offset as offsetModifier,
  safePolygon,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { flip, inline } from '@floating-ui/react-dom';
import { arrowSideDictionary } from '@helpers/arrow-side.dictionary';
import { useMemo, useRef, useState } from 'react';

export function useTooltip({
  initiallyOpen = false,
  offset = 5,
  placement = 'top',
}: Partial<TooltipProps>): any {
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

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      move: false,
      handleClose: safePolygon(),
    }),
    useFocus(context),
    useDismiss(context, {
      referencePress: true,
    }),
    useRole(context, { role: 'tooltip' }),
  ]);
  const arrowX = context.middlewareData.arrow?.x || 0;
  const arrowY = context.middlewareData.arrow?.y || 0;
  const arrowSide = arrowSideDictionary({
    side: context.placement,
  }) as TooltipArrowPlacement;

  return useMemo(
    () => ({
      arrowRef,
      arrowSide,
      arrowX,
      arrowY,
      context,
      floating: refs.setFloating,
      getFloatingProps: getFloatingProps(),
      getReferenceProps: getReferenceProps(),
      open,
      reference: refs.setReference,
      strategy,
      x,
      y,
    }),
    [
      arrowSide,
      arrowX,
      arrowY,
      context,
      refs,
      getFloatingProps,
      getReferenceProps,
      open,
      strategy,
      x,
      y,
    ]
  );
}
