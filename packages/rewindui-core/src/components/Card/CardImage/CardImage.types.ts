import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface CardImageProps extends ComponentPropsWithRef<'div'> {
  src: string;
  alt?: string;
  caption?: string;
  mode?: 'dark' | 'light';
}

export type CardImageComponent = ForwardRefExoticComponent<
  PropsWithoutRef<CardImageProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
