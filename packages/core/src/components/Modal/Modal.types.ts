import { OverlayBlur, OverlayColor, OverlayOpacity } from '@components/Overlay';
import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type ModalColor = 'white' | 'gray' | 'slate' | 'zinc';
export type ModalMode = 'fullscreen' | 'dialog';
export type ModalPosition = 'top' | 'center' | 'bottom';
export type ModalRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';
export type ModalShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type ModalSize = 'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'screen';

export interface ModalProps extends ComponentPropsWithRef<'div'> {
  closeOnEscape?: boolean;
  color?: ModalColor;
  mode?: ModalMode;
  onClose?: () => void;
  open: boolean;
  overlayBlur?: OverlayBlur;
  overlayCloseOnClick?: boolean;
  overlayColor?: OverlayColor;
  overlayOpacity?: OverlayOpacity;
  position?: ModalPosition;
  radius?: ModalRadius;
  shadow?: ModalShadow;
  size?: ModalSize;
}

export type ModalComponent = ForwardRefExoticComponent<ModalProps> & {
  displayName?: string;
};
