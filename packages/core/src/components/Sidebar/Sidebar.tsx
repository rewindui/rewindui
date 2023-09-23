'use client';
import { sidebarReducer } from '@components/Sidebar/sidebar.reducer';
import {
  sidebarActionEnum,
  SidebarComponent,
  SidebarContext,
  SidebarProps,
} from '@components/Sidebar/Sidebar.types';
import { SidebarFooter } from '@components/Sidebar/SidebarFooter/SidebarFooter';
import { SidebarHead } from '@components/Sidebar/SidebarHead/SidebarHead';
import { SidebarNav } from '@components/Sidebar/SidebarNav/SidebarNav';
import { SidebarSeparator } from '@components/Sidebar/SidebarSeparator/SidebarSeparator';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useEffect, useReducer, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { SidebarContextProvider } from './Sidebar.context';

const defaultProps: Partial<SidebarProps> = {
  color: 'slate',
  expanded: true,
  shadow: 'lg',
};

const SidebarRoot: SidebarComponent = forwardRef<HTMLElement, SidebarProps>(
  (props: SidebarProps, ref?: Ref<HTMLElement>) => {
    const theme = useComponentTheme('Sidebar');
    const {
      children,
      color,
      expanded = true,
      className,
      onToggle,
      shadow,
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const mounted = useRef<boolean>(false);
    const [state, dispatch] = useReducer(sidebarReducer, {
      hovered: false,
      expanded,
      mobile: false,
    });
    const classes = twMerge(
      theme.base({
        className,
        color,
        shadow,
        expanded: state.expanded,
        hovered: state.hovered,
        mobile: state.mobile,
      })
    );
    const id = usePropId(props.id);

    const contextValue: SidebarContext = {
      color,
      dispatch,
      state,
    };

    useEffect(() => {
      if (!mounted.current) {
        mounted.current = true;
        return;
      }

      if (typeof onToggle !== 'function') {
        return;
      }

      onToggle(state.expanded);
    }, [state.expanded, onToggle]);

    const toggleMobileEvent = (e: CustomEvent) => {
      dispatch({ type: sidebarActionEnum.mobile });
    };

    useEffect(() => {
      document.addEventListener('sidebar:toggle-mobile', toggleMobileEvent as EventListener);

      return () => {
        document.removeEventListener('sidebar:toggle-mobile', toggleMobileEvent as EventListener);
      };
    });

    return (
      <aside
        id={id}
        ref={ref}
        className={classes}
        onMouseEnter={() => {
          if (state.expanded) {
            return;
          }
          dispatch({ type: sidebarActionEnum.hover, payload: { hovered: true } });
        }}
        onMouseLeave={() => {
          if (state.expanded) {
            return;
          }
          dispatch({ type: sidebarActionEnum.hover, payload: { hovered: false } });
        }}
        {...additionalProps}
      >
        <SidebarContextProvider value={contextValue}>{children}</SidebarContextProvider>
      </aside>
    );
  }
);

SidebarRoot.displayName = 'Sidebar';

const Sidebar = Object.assign(SidebarRoot, {
  Head: SidebarHead,
  Nav: SidebarNav,
  Separator: SidebarSeparator,
  Footer: SidebarFooter,
});

export default Sidebar;
