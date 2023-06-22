import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type TextareaColor = 'blue' | 'purple' | 'gray' | 'dark' | 'black';
export type TextareaRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type TextareaShadow = 'none' | 'sm' | 'base' | 'md';
export type TextareaSize = 'xs' | 'sm' | 'md' | 'lg';
export type TextareaTone = 'light' | 'solid' | 'transparent';
export type TextareaValidation = 'none' | 'invalid' | 'valid' | 'warning';

export interface TextareaProps extends Omit<ComponentPropsWithRef<'textarea'>, 'size'> {
  color?: TextareaColor;
  disabled?: boolean;
  radius?: TextareaRadius;
  shadow?: TextareaShadow;
  size?: TextareaSize;
  tone?: TextareaTone;
  validation?: TextareaValidation;
  withRing?: boolean;
}

export type TextareaComponent = ForwardRefExoticComponent<TextareaProps> & {
  displayName?: string;
};
