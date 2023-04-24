import { Placement } from '@floating-ui/react-dom';
import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactNode } from 'react';

export type TooltipArrowPlacement = 'left' | 'right' | 'top' | 'bottom';
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
export type TooltipPlacement = Placement;
export type TooltipRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type TooltipShadow = 'none' | 'sm' | 'base' | 'md';
export type TooltipSize = 'xs' | 'sm' | 'md' | 'lg';
export type TooltipTone = 'solid' | 'light';

export interface TooltipProps extends Omit<ComponentPropsWithRef<'div'>, 'size'> {
  children: ReactNode;
  color?: TooltipColor;
  initiallyOpen?: boolean;
  label?: string;
  offset?: number;
  placement?: TooltipPlacement;
  radius?: TooltipRadius;
  shadow?: TooltipShadow;
  size?: TooltipSize;
  tone?: TooltipTone;
  withinPortal?: boolean;
}

export type TooltipComponent = ForwardRefExoticComponent<TooltipProps> & {
  displayName?: string;
};
