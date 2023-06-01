import { AlertProps, AlertVariants } from '@components/Alert/Alert.types';
import { AsProp } from '../../types/polymorphic.types';

export const alertVariants: Record<AlertVariants, AlertProps & AsProp<any>> = {
  primary: {
    color: 'purple',
    tone: 'light',
  },
  secondary: {
    color: 'gray',
    tone: 'light',
  },
  tertiary: {
    color: 'gray',
    tone: 'outline',
  },
  danger: {
    color: 'red',
    tone: 'light',
  },
  success: {
    color: 'green',
    tone: 'light',
  },
  warning: {
    color: 'yellow',
    tone: 'light',
  },
  info: {
    color: 'blue',
    tone: 'light',
  },
};
