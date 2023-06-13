import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type BadgeColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type BadgeRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type BadgeShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type BadgeShadowColor =
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
export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';
export type BadgeTone = 'solid' | 'light' | 'glossy' | 'outline';
export type BadgeVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';

export interface BadgeProps extends ComponentPropsWithRef<'span'> {
  color?: BadgeColor;
  radius?: BadgeRadius;
  shadow?: BadgeShadow;
  shadowColor?: BadgeShadowColor;
  size?: BadgeSize;
  tone?: BadgeTone;
  variant?: BadgeVariant;
}

export type BadgeComponent = ForwardRefExoticComponent<BadgeProps> & {
  displayName?: string;
};
