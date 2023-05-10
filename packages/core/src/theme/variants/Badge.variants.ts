import { BadgeProps, BadgeVariants } from '@components/Badge/Badge.types';

export const badgeVariants: Record<BadgeVariants, BadgeProps> = {
  primary: {
    color: 'blue',
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
    color: 'purple',
    tone: 'solid',
  },
};
