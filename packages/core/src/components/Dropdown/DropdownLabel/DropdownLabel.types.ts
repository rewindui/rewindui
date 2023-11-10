import { DropdownSize } from '@components/Dropdown/Dropdown.types';
import { ElementType, ReactElement } from 'react';
import { PolymorphicComponentPropWithRef } from '@types';

export type DropdownLabelColor =
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type DropdownLabelWeight =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'black';

export type DropdownLabelProps = {
  color?: DropdownLabelColor;
  size?: DropdownSize;
  weight?: DropdownLabelWeight;
};

type PolymorphicDropdownLabelProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  DropdownLabelProps
>;

type PolymorphicDropdownLabelComponent = <C extends ElementType = 'span'>(
  props: PolymorphicDropdownLabelProps<C>
) => ReactElement | null;

export type DropdownLabelComponent = PolymorphicDropdownLabelComponent & { displayName?: string };
