import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type TextareaTone = 'base' | 'solid' | 'transparent';
export type TextareaSize = 'xs' | 'sm' | 'md' | 'lg';
export type TextareaValidation = 'none' | 'invalid' | 'valid' | 'warning';
export type TextareaRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type TextareaShadow = 'none' | 'sm' | 'base' | 'md';

export interface TextareaProps extends Omit<ComponentPropsWithRef<'textarea'>, 'size'> {
  disabled?: boolean;
  tone?: TextareaTone;
  size?: TextareaSize;
  radius?: TextareaRadius;
  validation?: TextareaValidation;
  shadow?: TextareaShadow;
  withRing?: boolean;
}

export type TextareaComponent = ForwardRefExoticComponent<TextareaProps> & {
  displayName?: string;
};
