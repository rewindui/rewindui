import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactNode } from 'react';

export type SelectorColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type SelectorTone = 'solid' | 'light';
export type SelectorSize = 'xs' | 'sm' | 'md' | 'lg';
export type SelectorRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type SelectorShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type SelectorOrientation = 'horizontal' | 'vertical';

export interface SelectorProps extends Omit<ComponentPropsWithRef<'div'>, 'value' | 'onChange'> {
  fullWidth?: boolean;
  onChange?(value: string | null | undefined): void;
  orientation?: SelectorOrientation;
  radius?: SelectorRadius;
  separator?: ReactNode;
  shadow?: SelectorShadow;
  size?: SelectorSize;
  tone?: SelectorTone;
  value?: string | null;
  withAnimation?: boolean;
  withSeparator?: boolean;
}

export interface SelectorContext {
  activeTabAnchor?: string | null;
  orientation?: SelectorOrientation;
  radius?: SelectorRadius;
  separator?: ReactNode;
  setActiveTabAnchor(value: string): void;
  shadow?: SelectorShadow;
  size?: SelectorSize;
  tone?: SelectorTone;
  withSeparator?: boolean;
}

export type SelectorComponent = ForwardRefExoticComponent<SelectorProps> & {
  displayName?: string;
};
