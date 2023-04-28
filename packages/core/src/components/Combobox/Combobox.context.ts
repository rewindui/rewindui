import { ComboboxContext } from '@components/Combobox/Combobox.types';
import { createIndependentContext } from '@hooks/use-independent-context.hook';

export const [ComboboxContextProvider, useComboboxContext] =
  createIndependentContext<ComboboxContext>();
