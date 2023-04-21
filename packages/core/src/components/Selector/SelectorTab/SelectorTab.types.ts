import { SelectorSize } from '@components/Selector';
import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactNode } from 'react';

export type SelectorTabColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';

export interface SelectorTabProps extends ComponentPropsWithRef<'button'> {
  anchor: string;
  color?: SelectorTabColor;
  disabled?: boolean;
  label: string | ReactNode;
}

export type SelectorTabComponent = ForwardRefExoticComponent<SelectorTabProps> & {
  displayName?: string;
};
