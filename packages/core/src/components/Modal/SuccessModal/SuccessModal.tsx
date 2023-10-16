'use client';

import { SuccessModalProps } from './SuccessModal.types';
import Modal from '../Modal';
import Button from '../../../components/Button/Button';
import { SuccessIcon } from '@icons/Success';
import { FunctionComponent, PropsWithoutRef } from 'react';

const SuccessModal: FunctionComponent<PropsWithoutRef<SuccessModalProps>> = (
  props: SuccessModalProps
) => {
  const { open, onButtonClick, headerText, description, buttonText, ...additionalProps } = {
    ...props,
  };

  return (
    <Modal
      open={open}
      {...additionalProps}
      className="h-[26rem] w-[22rem] md:h-[26.5rem] md:w-[31.5rem]"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <SuccessIcon className="h-20 w-20" />
        <div className="flex w-[90%] flex-col gap-3 text-center md:w-[80%]">
          <div className="text-xl font-bold md:text-2xl">{headerText}</div>
          <div className="text-sm text-slate-700 text-opacity-70 md:text-base">{description}</div>
        </div>
        <Button className="mt-6" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </Modal>
  );
};

SuccessModal.displayName = 'Success Modal';

export { SuccessModal };
