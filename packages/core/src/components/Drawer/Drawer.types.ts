import { OverlayBlur, OverlayColor, OverlayOpacity } from '@components/Overlay';
import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';
export type DrawerShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';

export interface DrawerProps extends ComponentPropsWithRef<'div'> {
  closeOnEscape?: boolean;
  onClose?: () => void;
  open?: boolean;
  overlayBlur?: OverlayBlur;
  overlayCloseOnClick?: boolean;
  overlayColor?: OverlayColor;
  overlayOpacity?: OverlayOpacity;
  position?: DrawerPosition;
  shadow?: DrawerShadow;
  withinPortal?: boolean;
}

export type DrawerComponent = ForwardRefExoticComponent<DrawerProps> & {
  displayName?: string;
};
