import { ComponentPropsWithRef } from 'react';

export interface DropdownDividerProps extends ComponentPropsWithRef<'hr'> {
  color?: 'gray' | 'slate' | 'dark';
}
