import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type AvatarColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type AvatarRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type AvatarShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type AvatarShadowColor =
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
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarStatus = 'none' | 'online' | 'offline' | 'busy' | 'away';
export type AvatarStatusPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type AvatarTone = 'solid' | 'light' | 'glossy' | 'outline';

export interface AvatarProps extends ComponentPropsWithRef<'div'> {
  alt?: string;
  color?: AvatarColor;
  initials?: string;
  outlined?: boolean;
  radius?: AvatarRadius;
  shadow?: AvatarShadow;
  shadowColor?: AvatarShadowColor;
  size?: AvatarSize;
  src?: string;
  status?: AvatarStatus;
  statusPosition?: AvatarStatusPosition;
  tone?: AvatarTone;
}

export type AvatarComponent = ForwardRefExoticComponent<AvatarProps> & {
  displayName?: string;
};
