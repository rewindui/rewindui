import { ComboboxProps } from '@components/Combobox/Combobox.types';
import {
  autoUpdate,
  offset as offsetModifier,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { flip, inline } from '@floating-ui/react-dom';
import { useEffect, useMemo, useState } from 'react';

export function useCombobox({ offset = 5, disabled = false }: Partial<ComboboxProps>) {
  const [requestedOpen, setOpen] = useState(false);
  const open = requestedOpen && !disabled;

  useEffect(() => {
    if (disabled) setOpen(false);
  }, [disabled]);

  const { x, y, refs, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'bottom-start',
    middleware: [offsetModifier(offset), shift(), inline(), flip()],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useFocus(context, { enabled: !disabled }),
    useDismiss(context, {
      escapeKey: false,
      referencePress: false,
    }),
    useRole(context, { role: 'listbox' }),
  ]);

  return useMemo(
    () => ({
      x,
      y,
      reference: refs.setReference,
      floating: refs.setFloating,
      strategy,
      getFloatingProps: getFloatingProps(),
      getReferenceProps: getReferenceProps(),
      open,
      setOpen,
    }),
    [refs, getFloatingProps, getReferenceProps, open, strategy, x, y]
  );
}
