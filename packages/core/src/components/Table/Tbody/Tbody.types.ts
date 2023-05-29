import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface TbodyProps extends ComponentPropsWithRef<'tbody'> {}

export type TbodyComponent = ForwardRefExoticComponent<
  PropsWithoutRef<TbodyProps> & RefAttributes<HTMLTableSectionElement>
> & {
  displayName?: string;
};
