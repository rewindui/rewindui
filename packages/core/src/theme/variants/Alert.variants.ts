import { AlertProps, AlertVariant } from '@components/Alert/Alert.types';
import { AsProp } from '../../types/polymorphic.types';

export const alertVariants: Record<AlertVariant, AlertProps & AsProp<any>> = {
  primary: {
    color: 'purple',
    tone: 'light',
    iconType: 'info',
    className: 'border-dashed',
  },
  secondary: {
    color: 'gray',
    tone: 'light',
    iconType: 'info',
    className: 'border-dashed',
  },
  tertiary: {
    color: 'gray',
    tone: 'outline',
    iconType: 'info',
    className: 'border-dashed',
  },
  danger: {
    color: 'red',
    tone: 'light',
    iconType: 'error',
    className: 'border-dashed',
  },
  success: {
    color: 'green',
    tone: 'light',
    iconType: 'success',
    className: 'border-dashed',
  },
  warning: {
    color: 'yellow',
    tone: 'light',
    iconType: 'warning',
    className: 'border-dashed',
  },
  info: {
    color: 'blue',
    tone: 'light',
    iconType: 'info',
    className: 'border-dashed',
  },
};
