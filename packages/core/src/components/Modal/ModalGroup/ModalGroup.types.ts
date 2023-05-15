import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export interface ModalGroupContext {
  activeModalId?: string | undefined | null;
  setRegistry?(value: HTMLDivElement[]): void;
  registry?: HTMLDivElement[];
}

export interface ModalGroupProps extends ComponentPropsWithRef<'div'> {}

export type ModalGroupComponent = ForwardRefExoticComponent<ModalGroupProps> & {
  displayName?: string;
};
