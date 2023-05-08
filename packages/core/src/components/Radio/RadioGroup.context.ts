import { RadioGroupContext } from '@components/Radio/RadioGroup/RadioGroup.types';
import { createIndependentContext } from '@hooks/use-independent-context.hook';

export const [RadioGroupContextProvider, useRadioGroupContext] =
  createIndependentContext<RadioGroupContext>();
