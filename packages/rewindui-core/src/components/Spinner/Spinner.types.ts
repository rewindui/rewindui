import { ComponentPropsWithRef } from 'react';

export interface SpinnerProps extends ComponentPropsWithRef<'svg'> {
  color?: 'gray' | 'slate' | 'white';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}
