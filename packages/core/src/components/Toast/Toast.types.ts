import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type ToastAction = {
  label: string;
  onClick: () => void;
  primary?: boolean;
};
export type ToastColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type ToastIconType = 'info' | 'success' | 'warning' | 'error' | 'question';
export type ToastRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type ToastShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type ToastShadowColor =
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
export type ToastTone = 'solid' | 'light';
export type ToastVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';

export interface ToastProps extends Omit<ComponentPropsWithRef<'div'>, 'size'> {
  actions?: ToastAction[];
  closeOnClick?: boolean;
  color?: ToastColor;
  description?: string;
  duration?: number;
  halted?: boolean;
  iconType?: ToastIconType;
  pauseOnHover?: boolean;
  radius?: ToastRadius;
  shadow?: ToastShadow;
  shadowColor?: ToastShadowColor;
  showProgress?: boolean;
  title?: string;
  tone?: ToastTone;
  variant?: ToastVariant;
}

export type ToastComponent = ForwardRefExoticComponent<ToastProps> & {
  displayName?: string;
};
