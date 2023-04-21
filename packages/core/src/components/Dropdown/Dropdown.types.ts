import { DropdownItemColor } from '@components/Dropdown/DropdownItem/DropdownItem.types';
import { Strategy } from '@floating-ui/core';
import { Placement } from '@floating-ui/react-dom';
import { FloatingContext, ReferenceType } from '@floating-ui/react';
import { ComponentPropsWithRef, ForwardRefExoticComponent, Ref } from 'react';

export type DropdownArrowPlacement = 'left' | 'right' | 'top' | 'bottom';
export type DropdownColor = 'white' | 'gray' | 'slate' | 'zinc';
export type DropdownMode = 'tight' | 'spacey';
export type DropdownPlacement = Placement;
export type DropdownRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type DropdownShadow = 'none' | 'sm' | 'base' | 'md';
export type DropdownSize = 'xs' | 'sm' | 'md' | 'lg';
export type DropdownTone = 'solid' | 'light';
export type DropdownTrigger = 'click' | 'hover';

export interface DropdownProps extends Omit<ComponentPropsWithRef<'div'>, 'size'> {
  chevronRotation?: boolean;
  color?: DropdownColor;
  initiallyOpen?: boolean;
  itemColor?: DropdownItemColor;
  mode?: DropdownMode;
  outsidePress?: boolean;
  placement?: DropdownPlacement;
  radius?: DropdownRadius;
  shadow?: DropdownShadow;
  size?: DropdownSize;
  tone?: DropdownTone;
  trigger?: DropdownTrigger;
  withChevron?: boolean;
  withinPortal?: boolean;
}

export interface DropdownContext<RT extends ReferenceType = ReferenceType> {
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
  setOpen: (open: boolean) => void;
  radius?: DropdownRadius;
  reference: (node: RT | null) => void;
  shadow?: DropdownShadow;
  size?: DropdownSize;
  strategy: Strategy;
  tone?: DropdownTone;
  withChevron?: boolean;
  withinPortal?: boolean;
  x: number | null;
  y: number | null;
}

export type DropdownComponent = ForwardRefExoticComponent<DropdownProps> & {
  displayName?: string;
};
