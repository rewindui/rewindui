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
import { useMemo, useState } from 'react';

export function useCombobox({ offset = 5 }: Partial<ComboboxProps>) {
  const [open, setOpen] = useState(false);
  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'bottom-start',
    middleware: [offsetModifier(offset), shift(), inline(), flip()],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useFocus(context),
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
      reference,
      floating,
      strategy,
      getFloatingProps: getFloatingProps(),
      getReferenceProps: getReferenceProps(),
      open,
      setOpen,
    }),
    [floating, getFloatingProps, getReferenceProps, open, reference, strategy, x, y]
  );
}
