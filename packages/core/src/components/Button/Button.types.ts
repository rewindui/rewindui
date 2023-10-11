import React, { ElementType, ReactNode } from 'react';
import { PolymorphicComponentPropWithRef } from '../../types';

export type ButtonAnimation = 'none' | 'pulse' | 'bounce';
export type ButtonColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black'
  | 'primary'
  | 'secondary';
export type ButtonRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type ButtonShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type ButtonShadowColor =
  | 'none'
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonTone = 'solid' | 'light' | 'outline' | 'transparent';
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'link'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info';

export type ButtonProps = {
  animation?: ButtonAnimation;
  color?: ButtonColor;
  disabled?: boolean;
  loading?: boolean;
  icon?: boolean;
  radius?: ButtonRadius;
  shadow?: ButtonShadow;
  shadowColor?: ButtonShadowColor;
  size?: ButtonSize;
  tone?: ButtonTone;
  variant?: ButtonVariant;
  withRing?: boolean;
  chevronIcon?: React.ReactElement;
};

type PolymorphicButtonProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  ButtonProps
>;

type PolymorphicButtonComponent = <C extends ElementType = 'button'>(
  props: PolymorphicButtonProps<C>
) => ReactNode;

export type ButtonComponent = PolymorphicButtonComponent & {
  displayName?: string;
};
