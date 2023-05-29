import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export type TrColor =
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

export interface TrProps extends ComponentPropsWithRef<'tr'> {
  color?: TrColor;
}

export type TrComponent = ForwardRefExoticComponent<
  PropsWithoutRef<TrProps> & RefAttributes<HTMLTableRowElement>
> & {
  displayName?: string;
};
