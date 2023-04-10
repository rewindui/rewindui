import { AlertProps, AlertVariants } from '@components/Alert/Alert.types';
import { AsProp } from '../../types/polymorphic.types';

export const alertVariants: Record<AlertVariants, AlertProps & AsProp<any>> = {
  primary: {
    color: 'blue',
    tone: 'solid',
  },
  secondary: {
    color: 'gray',
    tone: 'solid',
  },
  tertiary: {
    color: 'gray',
    tone: 'outline',
  },
  danger: {
    color: 'red',
    tone: 'solid',
  },
  success: {
    color: 'green',
    tone: 'solid',
  },
  warning: {
    color: 'yellow',
    tone: 'solid',
  },
  info: {
    color: 'purple',
    tone: 'solid',
  },
};
