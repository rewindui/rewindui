import { DropdownContext } from '@components/Dropdown/Dropdown.types';
import { createIndependentContext } from '@hooks/use-independent-context.hook';

export const [DropdownContextProvider, useDropdownContext] =
  createIndependentContext<DropdownContext>();
