import { ComponentPropsWithRef } from 'react';

export interface CollapseProps extends ComponentPropsWithRef<'div'> {
  isOpen: boolean;
  duration?: number;
}
