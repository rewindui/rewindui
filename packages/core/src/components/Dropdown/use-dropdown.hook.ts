import { DropdownProps } from '@components/Dropdown/Dropdown.types';
import {
  arrow,
  autoUpdate,
  offset,
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

export function useDropdown({
  placement = 'bottom',
  initiallyOpen = false,
  trigger = 'click',
}: Partial<DropdownProps>): any {
  const arrowRef = useRef(null);
  const [open, setOpen] = useState(initiallyOpen);
  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    middleware: [
      offset(8),
      shift(),
      inline(),
      flip(),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });
  const click = useClick(context, {
    toggle: true,
  });
  const hover = useHover(context, {
    move: true,
    handleClose: safePolygon(),
  });
  const { getFloatingProps, getReferenceProps } = useInteractions([
    ...(trigger === 'click' ? [click] : [hover]),
    useFocus(context),
    useDismiss(context, {
      referencePress: false,
    }),
    useRole(context, { role: 'dialog' }),
  ]);

  return useMemo(
    () => ({
      arrowRef,
      context,
      floating,
      getFloatingProps: getFloatingProps(),
      getReferenceProps: getReferenceProps(),
      open,
      reference,
      strategy,
      x,
      y,
    }),
    [context, floating, getFloatingProps, getReferenceProps, open, reference, strategy, x, y]
  );
}
