import { ElementType, ReactElement } from 'react';
import { PolymorphicComponentPropWithRef } from '@types';

export type TextColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type TextLeading =
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'none'
  | 'tight'
  | 'snug'
  | 'normal'
  | 'relaxed'
  | 'loose';
export type TextSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
export type TextTracking = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
export type TextVariant = 'd1' | 'd2' | 'd3' | 'd4' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export type TextWeight =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'black';

export type TextProps = {
  color?: TextColor;
  leading?: TextLeading;
  size?: TextSize;
  tracking?: TextTracking;
  variant?: TextVariant;
  weight?: TextWeight;
};

type PolymorphicTextProps<C extends ElementType> = PolymorphicComponentPropWithRef<C, TextProps>;

type PolymorphicTextComponent = <C extends ElementType = 'span'>(
  props: PolymorphicTextProps<C>
) => ReactElement | null;

export type TextComponent = PolymorphicTextComponent & { displayName?: string };
