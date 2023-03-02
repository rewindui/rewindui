import { ComponentPropsWithRef } from 'react';

export interface FaderProps extends ComponentPropsWithRef<'div'> {
  fadeInDuration?: number;
  fadeOutDuration?: number;
  isActive: boolean;
  isShown: boolean;
  method: 'unmount' | 'hide';
}
