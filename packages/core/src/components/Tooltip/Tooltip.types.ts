import { Placement } from '@floating-ui/react-dom';
import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactNode } from 'react';

export type TooltipColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type TooltipSize = 'xs' | 'sm' | 'md' | 'lg';
export type TooltipRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type TooltipAccent = 'solid' | 'light';
export type TooltipArrowPlacement = 'left' | 'right' | 'top' | 'bottom';
export type TooltipShadow = 'none' | 'sm' | 'base' | 'md';
export type TooltipPlacement = Placement;

export interface TooltipProps extends Omit<ComponentPropsWithRef<'div'>, 'size'> {
  accent?: TooltipAccent;
  children: ReactNode;
  color?: TooltipColor;
  initiallyOpen?: boolean;
  label?: string;
  offset?: number;
  placement?: TooltipPlacement;
  radius?: TooltipRadius;
  shadow?: TooltipShadow;
  size?: TooltipSize;
  withinPortal?: boolean;
}

export type TooltipComponent = ForwardRefExoticComponent<TooltipProps> & {
  displayName?: string;
};
