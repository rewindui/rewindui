import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type ProgressColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type ProgressRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type ProgressShadow = 'none' | 'sm' | 'base' | 'md';
export type ProgressSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ProgressProps extends ComponentPropsWithRef<'div'> {
  animated?: boolean;
  color?: ProgressColor;
  description?: string;
  label?: string;
  radius?: ProgressRadius;
  shadow?: ProgressShadow;
  showValue?: boolean;
  size?: ProgressSize;
  striped?: boolean;
  value?: number;
}

export type ProgressComponent = ForwardRefExoticComponent<ProgressProps> & {
  displayName?: string;
};
