import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export type CardColor = 'white' | 'gray' | 'slate' | 'zinc';
export type CardRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type CardSize = 'sm' | 'base' | 'md' | 'lg';
export type CardShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';

export interface CardProps extends ComponentPropsWithRef<'div'> {
  color?: CardColor;
  radius?: CardRadius;
  shadow?: CardShadow;
  size?: CardSize;
  bordered?: boolean;
  withDivider?: boolean;
}

export interface CardContext {
  radius?: CardRadius;
  size?: CardSize;
  withDivider?: boolean;
}

export type CardComponent = ForwardRefExoticComponent<
  PropsWithoutRef<CardProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
