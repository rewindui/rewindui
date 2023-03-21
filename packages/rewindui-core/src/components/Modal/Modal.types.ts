import { OverlayBlur, OverlayColor, OverlayOpacity } from '@components/Overlay';
import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type ModalColor = 'white' | 'gray' | 'slate' | 'zinc';
export type ModalRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type ModalSize = 'auto' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'screen';
export type ModalShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type ModalMode = 'fullscreen' | 'dialog';

export interface ModalProps extends ComponentPropsWithRef<'div'> {
  closeOnEscape?: boolean;
  color?: ModalColor;
  mode?: ModalMode;
  onClose?: () => void;
  open?: boolean;
  overlayBlur?: OverlayBlur;
  overlayCloseOnClick?: boolean;
  overlayColor?: OverlayColor;
  overlayOpacity?: OverlayOpacity;
  radius?: ModalRadius;
  shadow?: ModalShadow;
  size?: ModalSize;
}

export type ModalComponent = ForwardRefExoticComponent<ModalProps> & {
  displayName?: string;
};
