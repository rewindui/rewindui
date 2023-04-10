import { InputGroupContext } from '@components/InputGroup/InputGroup.types';
import { createIndependentContext } from '@hooks/use-independent-context.hook';

export const [InputGroupContextProvider, useInputGroupContext] =
  createIndependentContext<InputGroupContext>();
