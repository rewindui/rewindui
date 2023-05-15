import { ModalGroupContext } from '@components/Modal/ModalGroup/ModalGroup.types';
import { createIndependentContext } from '@hooks/use-independent-context.hook';

export const [ModalGroupContextProvider, useModalGroupContext] =
  createIndependentContext<ModalGroupContext>();
