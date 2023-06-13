import { RibbonProps, RibbonVariant } from '@components/Ribbon/Ribbon.types';

export const ribbonVariants: Record<RibbonVariant, RibbonProps> = {
  primary: {
    color: 'purple',
    tone: 'solid',
  },
  secondary: {
    color: 'gray',
    tone: 'solid',
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
