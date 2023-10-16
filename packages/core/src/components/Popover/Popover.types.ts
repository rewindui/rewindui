import { FloatingContext } from '@floating-ui/react';
import { Placement, ReferenceType, Strategy } from '@floating-ui/react-dom';
import { ComponentPropsWithRef, ForwardRefExoticComponent, Ref } from 'react';

export type PopoverColor = 'white' | 'gray' | 'slate' | 'zinc';
export type PopoverSize = 'tight' | 'xs' | 'sm' | 'md' | 'lg';
export type PopoverRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type PopoverShadow = 'none' | 'sm' | 'base' | 'md';
export type PopoverArrowPlacement = 'left' | 'right' | 'top' | 'bottom';
export type PopoverPlacement = Placement;

export interface PopoverContext<RT extends ReferenceType = ReferenceType> {
  arrowRef?: Ref<HTMLSpanElement>;
  color?: PopoverColor;
  context: FloatingContext<RT>;
  controlsId: string;
  floating: (node: HTMLElement | null) => void;
  getFloatingProps: Record<string, unknown>;
  getReferenceProps: Record<string, unknown>;
  initiallyOpen?: boolean;
  labelledbyId: string;
  open?: boolean;
  placement?: PopoverPlacement;
  radius?: PopoverRadius;
  reference: (node: RT | null) => void;
  shadow?: PopoverShadow;
  size?: PopoverSize;
  strategy: Strategy;
  withinPortal?: boolean;
  x: number | null;
  y: number | null;
}

export interface PopoverProps extends Omit<ComponentPropsWithRef<'div'>, 'size'> {
  color?: PopoverColor;
  initiallyOpen?: boolean;
  offset?: number;
  placement?: PopoverPlacement;
  radius?: PopoverRadius;
  shadow?: PopoverShadow;
  size?: PopoverSize;
  withinPortal?: boolean;
}

export type PopoverComponent = ForwardRefExoticComponent<PopoverProps> & {
  displayName?: string;
};
