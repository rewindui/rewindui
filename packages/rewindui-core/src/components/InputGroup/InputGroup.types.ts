import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type InputGroupTone = 'base' | 'solid' | 'transparent';
export type InputGroupSize = 'xs' | 'sm' | 'md' | 'lg';
export type InputGroupRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type InputGroupShadow = 'none' | 'sm' | 'base' | 'md';

export interface InputGroupContext {
  tone?: InputGroupTone;
  size?: InputGroupSize;
  radius?: InputGroupRadius;
}

export interface InputGroupProps extends ComponentPropsWithRef<'div'> {
  tone?: InputGroupTone;
  size?: InputGroupSize;
  radius?: InputGroupRadius;
  shadow?: InputGroupShadow;
}

export type InputGroupComponent = ForwardRefExoticComponent<InputGroupProps> & {
  displayName?: string;
};
