import { PopoverContext } from '@components/Popover/Popover.types';
import { createElementContext } from '@hooks/use-element-context.hook';

export const [PopoverContextProvider, usePopoverContext] = createElementContext<PopoverContext>(
  'Popover compound components cannot be rendered outside the Popover component'
);
