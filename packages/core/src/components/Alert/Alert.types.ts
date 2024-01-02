import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactNode } from 'react';

export type AlertAccent = 'none' | 'top' | 'right' | 'bottom' | 'left';
export type AlertColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type AlertIconType = 'info' | 'success' | 'warning' | 'error' | 'question' | 'loading';
export type AlertRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type AlertShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type AlertShadowColor =
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
export type AlertSize = 'xs' | 'sm' | 'md' | 'lg';
export type AlertTone = 'solid' | 'light' | 'outline';
export type AlertVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info';

export interface AlertProps extends ComponentPropsWithRef<'div'> {
  accent?: AlertAccent;
  color?: AlertColor;
  dismissable?: boolean;
  dismissableAnimation?: boolean;
  icon?: ReactNode;
  iconType?: AlertIconType;
  radius?: AlertRadius;
  shadow?: AlertShadow;
  shadowColor?: AlertShadowColor;
  size?: AlertSize;
  title?: string;
  tone?: AlertTone;
  variant?: AlertVariant;
}

export type AlertComponent = ForwardRefExoticComponent<AlertProps> & {
  displayName?: string;
};
