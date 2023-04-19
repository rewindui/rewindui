import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type InputGroupRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type InputGroupShadow = 'none' | 'sm' | 'base' | 'md';
export type InputGroupSize = 'xs' | 'sm' | 'md' | 'lg';
export type InputGroupTone = 'light' | 'solid' | 'transparent';

export interface InputGroupContext {
  radius?: InputGroupRadius;
  size?: InputGroupSize;
  tone?: InputGroupTone;
}

export interface InputGroupProps extends ComponentPropsWithRef<'div'> {
  radius?: InputGroupRadius;
  shadow?: InputGroupShadow;
  size?: InputGroupSize;
  tone?: InputGroupTone;
}

export type InputGroupComponent = ForwardRefExoticComponent<InputGroupProps> & {
  displayName?: string;
};
