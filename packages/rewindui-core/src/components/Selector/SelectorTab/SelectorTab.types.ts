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
  size?: SelectorSize;
  color?: SelectorTabColor;
  anchor: string;
  label: string | ReactNode;
  disabled?: boolean;
}

export type SelectorTabComponent = ForwardRefExoticComponent<SelectorTabProps> & {
  displayName?: string;
};
