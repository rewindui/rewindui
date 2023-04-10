import { SelectorContext } from '@components/Selector/Selector.types';
import { createElementContext } from '@hooks/use-element-context.hook';

export const [SelectorContextProvider, useSelectorContext] = createElementContext<SelectorContext>(
  'Selector compound components cannot be rendered outside the Selector component'
);
