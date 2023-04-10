import {
  ComponentPropsWithRef,
  ForwardedRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export type ImageRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type ImageMode = 'light' | 'dark';

export interface ImageProps extends ComponentPropsWithRef<'div'> {
  alt?: string;
  caption?: string;
  fit?: ImageFit;
  height?: string | number;
  imageRef?: ForwardedRef<HTMLImageElement>;
  loading?: 'eager' | 'lazy';
  mode?: ImageMode;
  radius?: ImageRadius;
  src?: string;
  width?: string | number;
  wrapperClassName?: string;
}

export type ImageComponent = ForwardRefExoticComponent<
  PropsWithoutRef<ImageProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
