import { SelectorTabColor } from '@components/Selector/SelectorTab/SelectorTab.types';
import { ComponentPropsWithRef, ForwardRefExoticComponent, ReactNode } from 'react';

export type SelectorOrientation = 'horizontal' | 'vertical';
export type SelectorRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type SelectorSize = 'xs' | 'sm' | 'md' | 'lg';
export type SelectorShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type SelectorTone = 'solid' | 'light';

export interface SelectorProps extends Omit<ComponentPropsWithRef<'div'>, 'value' | 'onChange'> {
  color?: SelectorTabColor;
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
  color?: SelectorTabColor;
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
