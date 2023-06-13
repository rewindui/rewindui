import { TextProps, TextVariant } from '@components/Text';
import { AsProp } from '../../types/polymorphic.types';

export const textVariants: Record<TextVariant, TextProps & AsProp<any>> = {
  d1: {
    size: '9xl',
    weight: 'light',
    leading: 'tight',
    tracking: 'normal',
    as: 'h1',
  },
  d2: {
    size: '8xl',
    weight: 'light',
    leading: 'tight',
    tracking: 'normal',
    as: 'h2',
  },
  d3: {
    size: '7xl',
    weight: 'light',
    leading: 'tight',
    tracking: 'normal',
    as: 'h3',
  },
  d4: {
    size: '6xl',
    weight: 'light',
    leading: 'tight',
    tracking: 'normal',
    as: 'h4',
  },
  h1: {
    size: '5xl',
    weight: 'medium',
    leading: 'tight',
    tracking: 'normal',
    as: 'h1',
  },
  h2: {
    size: '4xl',
    weight: 'medium',
    leading: 'tight',
    tracking: 'normal',
    as: 'h2',
  },
  h3: {
    size: '3xl',
    weight: 'medium',
    leading: 'tight',
    tracking: 'normal',
    as: 'h3',
  },
  h4: {
    size: '2xl',
    weight: 'medium',
    leading: 'tight',
    tracking: 'normal',
    as: 'h4',
  },
  h5: {
    size: 'xl',
    weight: 'medium',
    leading: 'tight',
    tracking: 'normal',
    as: 'h5',
  },
  h6: {
    size: 'lg',
    weight: 'medium',
    leading: 'tight',
    tracking: 'normal',
    as: 'h6',
  },
  p: {
    size: 'base',
    weight: 'normal',
    leading: 'tight',
    tracking: 'normal',
    as: 'p',
  },
};
