import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactElement, ReactNode } from 'react';

export type ComboboxColor = 'blue' | 'purple' | 'gray' | 'dark' | 'black';
export type ComboboxOptionColor =
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type ComboboxMode = 'spacey' | 'tight';
export type ComboboxRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type ComboboxShadow = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type ComboboxSize = 'xs' | 'sm' | 'md' | 'lg';
export type ComboboxTone = 'light' | 'solid' | 'transparent';
export type ComboboxValidation = 'none' | 'invalid' | 'valid' | 'warning';

export interface ComboboxProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  clearable?: boolean;
  closeOnEscape?: boolean;
  color?: ComboboxColor;
  disabled?: boolean;
  initialValue?: string;
  leftIcon?: ReactElement;
  loading?: boolean;
  maxHeight?: number;
  minWidth?: number;
  mode?: ComboboxMode;
  offset?: number;
  onChange?(value: string | null | undefined): void;
  optionColor?: ComboboxOptionColor;
  placeholder?: string;
  radius?: ComboboxRadius;
  searchable?: boolean;
  shadow?: ComboboxShadow;
  size?: ComboboxSize;
  tone?: ComboboxTone;
  validation?: ComboboxValidation;
  value?: string | null | undefined;
  withRing?: boolean;
}

export interface ComboboxContext {
  mode?: ComboboxMode;
  optionColor?: ComboboxOptionColor;
  radius?: ComboboxRadius;
  search?: string;
  selectedLabel?: string | null;
  selectedValue?: string | null;
  setSearch(value: string): void;
  setSelectedLabel(value: string | null): void;
  setSelectedValue(value: string | null): void;
  size?: ComboboxSize;
}

export type ComboboxOptionType = {
  description?: string;
  disabled?: boolean;
  label: string;
  media?: ReactNode;
  value: string;
};

export type ComboboxGroupType = {
  heading: string;
  options: ComboboxOptionType[];
};

export type ComboboxComponent = ForwardRefExoticComponent<ComboboxProps> & {
  displayName?: string;
};
