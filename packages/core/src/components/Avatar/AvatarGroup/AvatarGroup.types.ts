import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export interface AvatarGroupProps extends ComponentPropsWithRef<'div'> {}

export type AvatarGroupComponent = ForwardRefExoticComponent<AvatarGroupProps> & {
  displayName?: string;
};
