import {
  ComponentPropsWithRef,
  Dispatch,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export type SidebarColor = 'white' | 'gray' | 'dark' | 'slate' | 'zinc';
export type SidebarSize = 'sm' | 'md' | 'lg';
export type SidebarShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';

export enum sidebarActionEnum {
  mobile = 'MOBILE',
  toggle = 'TOGGLE',
  hover = 'HOVER',
  expand = 'EXPAND',
}

export type SidebarState = {
  expanded: boolean;
  hovered: boolean;
  mobile: boolean;
};

export type SidebarAction =
  | {
      type: sidebarActionEnum.hover;
      payload: {
        hovered: boolean;
      };
    }
  | {
      type: sidebarActionEnum.expand;
      payload: {
        expanded: boolean;
      };
    }
  | {
      type: sidebarActionEnum.toggle;
    }
  | {
      type: sidebarActionEnum.mobile;
    };

export interface SidebarProps extends ComponentPropsWithRef<'aside'> {
  color?: SidebarColor;
  expanded?: boolean;
  size?: SidebarSize;
  shadow?: SidebarShadow;
  onToggle?(expanded: boolean): void;
}

export interface SidebarContext {
  color?: SidebarColor;
  dispatch: Dispatch<SidebarAction>;
  state: SidebarState;
}

export type SidebarComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarProps> & RefAttributes<HTMLElement>
> & {
  displayName?: string;
};
