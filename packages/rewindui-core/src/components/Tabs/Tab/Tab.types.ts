import {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export type TabStateType = 'active' | 'inactive';

export interface TabProps extends ComponentPropsWithoutRef<'button'> {
  anchor: string;
}

export type TabComponent = ForwardRefExoticComponent<
  PropsWithoutRef<TabProps> & RefAttributes<HTMLButtonElement>
> & {
  displayName?: string;
};
