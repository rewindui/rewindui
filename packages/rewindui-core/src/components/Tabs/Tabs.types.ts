import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export type TabsColor = 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'gray' | 'dark' | 'black';
export type TabsSize = 'sm' | 'md' | 'lg';
export type TabsRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type TabsTone = 'line' | 'pill';
export type TabsMethod = 'unmount' | 'hide';

export interface TabsContext {
  activeTabAnchor?: string;
  color: TabsColor;
  fullWidth: boolean;
  method: TabsMethod;
  radius: TabsRadius;
  setActiveTabAnchor(value: string): void;
  size: TabsSize;
  tone: TabsTone;
}

export interface TabsProps extends ComponentPropsWithRef<'div'> {
  color: TabsColor;
  defaultTab: string;
  fullWidth: boolean;
  method: TabsMethod;
  radius: TabsRadius;
  size: TabsSize;
  tone: TabsTone;
}

export type TabsComponent = ForwardRefExoticComponent<
  PropsWithoutRef<TabsProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
