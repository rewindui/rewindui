import {
  ComponentPropsWithRef,
  Dispatch,
  ForwardRefExoticComponent,
  ReactElement,
  ReactNode,
} from 'react';

export enum ComboboxActionEnum {
  register = 'REGISTER',
  reset = 'RESET',
  single_select = 'SINGLE_SELECT',
  multi_select = 'MULTI_SELECT',
  init_multi_select = 'INIT_MULTI_SELECT',
  search_start = 'SEARCH_START',
  search_reset = 'SEARCH_RESET',
  remove_last = 'REMOVE_LAST',
}

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

export type ComboboxOptionEntry = {
  label: string;
  value: string;
};

export type ComboboxState = {
  initialValue: string | string[] | null | undefined;
  multiple: boolean;
  onChange?(value: string | string[] | null | undefined): void;
  options: ComboboxOptionEntry[] | any[];
  search: string;
  searching: boolean;
  selectedOptions: ComboboxOptionEntry[] | any[];
};

export type ComboboxAction =
  | {
      type: ComboboxActionEnum.register;
      payload: ComboboxOptionEntry;
    }
  | {
      type: ComboboxActionEnum.reset;
      payload: null;
    }
  | {
      type: ComboboxActionEnum.remove_last;
      payload: null;
    }
  | {
      type: ComboboxActionEnum.search_reset;
      payload: null;
    }
  | {
      type: ComboboxActionEnum.search_start;
      payload: { search: string };
    }
  | {
      type: ComboboxActionEnum.single_select | ComboboxActionEnum.multi_select;
      payload: Omit<ComboboxOptionEntry, 'label'> & { toggle?: boolean; emitOnChange?: boolean };
    }
  | {
      type: ComboboxActionEnum.init_multi_select;
      payload: { values: string[] };
    };

export interface ComboboxProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  clearable?: boolean;
  closeOnEscape?: boolean;
  closeOnSelect?: boolean;
  color?: ComboboxColor;
  disabled?: boolean;
  initialValue?: string | string[];
  leftIcon?: ReactElement;
  loading?: boolean;
  maxHeight?: number;
  minWidth?: number;
  mode?: ComboboxMode;
  multiple?: boolean;
  offset?: number;
  onChange?(value: string | string[] | null | undefined): void;
  onSearch?(value: string | null | undefined): void;
  optionColor?: ComboboxOptionColor;
  placeholder?: string;
  radius?: ComboboxRadius;
  searchable?: boolean;
  shadow?: ComboboxShadow;
  size?: ComboboxSize;
  tone?: ComboboxTone;
  validation?: ComboboxValidation;
  value?: string | string[] | null | undefined;
  withRing?: boolean;
}

export interface ComboboxContext {
  dispatch: Dispatch<ComboboxAction>;
  externalSearch?: boolean;
  mode?: ComboboxMode;
  multiple?: boolean;
  optionColor?: ComboboxOptionColor;
  radius?: ComboboxRadius;
  size?: ComboboxSize;
  state: ComboboxState;
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
