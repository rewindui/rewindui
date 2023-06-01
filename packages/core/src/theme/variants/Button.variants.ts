import { ButtonProps, ButtonVariants } from '@components/Button/Button.types';
import { AsProp } from '../../types/polymorphic.types';

export const buttonVariants: Record<ButtonVariants, ButtonProps & AsProp<any>> = {
  primary: {
    color: 'purple',
    tone: 'solid',
  },
  secondary: {
    color: 'gray',
    tone: 'solid',
  },
  tertiary: {
    color: 'gray',
    tone: 'transparent',
  },
  link: {
    color: 'purple',
    tone: 'transparent',
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
    color: 'blue',
    tone: 'solid',
  },
};
