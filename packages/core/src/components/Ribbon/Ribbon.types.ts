import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type RibbonColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type RibbonPosition = 'left' | 'right' | 'top-left' | 'top-right';
export type RibbonRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type RibbonShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type RibbonShadowColor =
  | 'none'
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type RibbonSize = 'sm' | 'md' | 'lg';
export type RibbonTone = 'solid' | 'light' | 'glossy';
export type RibbonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';

export interface RibbonProps extends ComponentPropsWithRef<'div'> {
  color?: RibbonColor;
  position?: RibbonPosition;
  radius?: RibbonRadius;
  shadow?: RibbonShadow;
  shadowColor?: RibbonShadowColor;
  size?: RibbonSize;
  tone?: RibbonTone;
  variant?: RibbonVariant;
}

export type RibbonComponent = ForwardRefExoticComponent<RibbonProps> & {
  displayName?: string;
};
