import { DropdownItemColor } from '@components/Dropdown/DropdownItem/DropdownItem.types';
import { Strategy } from '@floating-ui/core';
import { Placement } from '@floating-ui/react-dom';
import { FloatingContext, ReferenceType } from '@floating-ui/react';
import { ComponentPropsWithRef, ForwardRefExoticComponent, Ref } from 'react';

export type DropdownColor = 'white' | 'gray' | 'slate' | 'zinc';
export type DropdownSize = 'xs' | 'sm' | 'md' | 'lg';
export type DropdownRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type DropdownShadow = 'none' | 'sm' | 'base' | 'md';
export type DropdownArrowPlacement = 'left' | 'right' | 'top' | 'bottom';
export type DropdownPlacement = Placement;
export type DropdownTrigger = 'click' | 'hover';
export type DropdownMode = 'tight' | 'spacey';
export type DropdownAccent = 'solid' | 'light';

export interface DropdownContext<RT extends ReferenceType = ReferenceType> {
  accent?: DropdownAccent;
  arrowRef?: Ref<HTMLSpanElement>;
  chevronRotation?: boolean;
  color?: DropdownColor;
  context: FloatingContext<RT>;
  floating: (node: HTMLElement | null) => void;
  getFloatingProps: Record<string, unknown>;
  getReferenceProps: Record<string, unknown>;
  itemColor?: DropdownItemColor;
  mode?: DropdownMode;
  open?: boolean;
  radius?: DropdownRadius;
  reference: (node: RT | null) => void;
  shadow?: DropdownShadow;
  size?: DropdownSize;
  strategy: Strategy;
  withChevron?: boolean;
  withinPortal?: boolean;
  x: number | null;
  y: number | null;
}

export interface DropdownProps extends Omit<ComponentPropsWithRef<'div'>, 'size'> {
  accent?: DropdownAccent;
  chevronRotation?: boolean;
  color?: DropdownColor;
  initiallyOpen?: boolean;
  itemColor?: DropdownItemColor;
  mode?: DropdownMode;
  placement?: DropdownPlacement;
  radius?: DropdownRadius;
  shadow?: DropdownShadow;
  size?: DropdownSize;
  trigger?: DropdownTrigger;
  withChevron?: boolean;
  withinPortal?: boolean;
}

export type DropdownComponent = ForwardRefExoticComponent<DropdownProps> & {
  displayName?: string;
};
