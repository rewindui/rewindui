import { ModalProps } from '../Modal.types';

export interface SuccessModalProps extends ModalProps {
  headerText: string,
  description: string,
  buttonText: string,
  onButtonClick: () => void;
}
