import { ToastProps, ToastVariant } from '@components/Toast';
import { AsProp } from '../../types/polymorphic.types';

export const toastVariants: Record<ToastVariant, ToastProps & AsProp<any>> = {
  primary: {
    color: 'purple',
    tone: 'solid',
    iconType: 'info',
  },
  secondary: {
    color: 'dark',
    tone: 'solid',
    iconType: 'info',
  },
  danger: {
    color: 'red',
    tone: 'solid',
    iconType: 'error',
  },
  success: {
    color: 'green',
    tone: 'solid',
    iconType: 'success',
  },
  warning: {
    color: 'yellow',
    tone: 'solid',
    iconType: 'warning',
  },
  info: {
    color: 'blue',
    tone: 'solid',
    iconType: 'info',
  },
};
