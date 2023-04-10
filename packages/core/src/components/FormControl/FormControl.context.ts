import { FormControlContext } from '@components/FormControl/FormControl.types';
import { createIndependentContext } from '@hooks/use-independent-context.hook';

export const [FormControlContextProvider, useFormControlContext] =
  createIndependentContext<FormControlContext>();
