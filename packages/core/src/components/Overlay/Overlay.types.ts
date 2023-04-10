import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export type OverlayColor = 'white' | 'gray' | 'dark';
export type OverlayOpacity = '25' | '50' | '75';
export type OverlayBlur = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';

export interface OverlayProps extends ComponentPropsWithRef<'div'> {
  blur?: OverlayBlur;
  closeOnClick?: boolean;
  color?: OverlayColor;
  onClose?: () => void;
  opacity?: OverlayOpacity;
}

export type OverlayComponent = ForwardRefExoticComponent<OverlayProps> & {
  displayName?: string;
};
