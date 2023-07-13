import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface ToastContainerProps extends Omit<ComponentPropsWithRef<'div'>, 'size'> {
  max?: number;
  position?: ToastPosition;
}

export type ToastContainerComponent = ForwardRefExoticComponent<ToastContainerProps> & {
  displayName?: string;
};
