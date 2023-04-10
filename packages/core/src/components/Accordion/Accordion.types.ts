import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export type AccordionTone = 'solid' | 'light';
export type AccordionColor = 'white' | 'gray' | 'slate' | 'zinc';
export type AccordionActiveColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type AccordionShadowColor = 'none' | 'gray' | 'slate' | 'zinc';
export type AccordionRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type AccordionSize = 'sm' | 'md' | 'lg' | 'xl';
export type AccordionShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type AccordionVariants = 'primary';

export interface AccordionContext {
  activeColor?: AccordionActiveColor;
  activeItemAnchor?: string;
  bordered?: boolean;
  color?: AccordionColor;
  radius?: AccordionRadius;
  setActiveItemAnchor(value: string): void;
  size?: AccordionSize;
  tone?: AccordionTone;
  withRing?: boolean;
}

export interface AccordionProps extends ComponentPropsWithRef<'div'> {
  activeColor?: AccordionActiveColor;
  bordered?: boolean;
  color?: AccordionColor;
  defaultItem?: string;
  radius?: AccordionRadius;
  shadow?: AccordionShadow;
  shadowColor?: AccordionShadowColor;
  size?: AccordionSize;
  tone?: AccordionTone;
  variant?: AccordionVariants;
  withRing?: boolean;
}

export type AccordionComponent = ForwardRefExoticComponent<
  PropsWithoutRef<AccordionProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
