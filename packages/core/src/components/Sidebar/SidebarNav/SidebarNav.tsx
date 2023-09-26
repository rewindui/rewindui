'use client';
import { useSidebarContext } from '@components/Sidebar/Sidebar.context';
import {
  SidebarNavComponent,
  SidebarNavProps,
} from '@components/Sidebar/SidebarNav/SidebarNav.types';
import { SidebarNavSection } from '@components/Sidebar/SidebarNav/SidebarNavSection/SidebarNavSection';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const SidebarNavRoot: SidebarNavComponent = forwardRef<HTMLElement, SidebarNavProps>(
  (props: SidebarNavProps, ref?: Ref<HTMLElement>) => {
    const theme = useComponentTheme('Sidebar');
    const { children, className, ...additionalProps } = props;
    const { color, state } = useSidebarContext();
    const classes = useMemo(() => {
      return twMerge(
        theme.nav({
          className,
          color,
          opened: state.expanded || state.hovered || state.mobile,
        })
      );
    }, [className, color, state, theme]);
    const id = usePropId(props.id);

    return (
      <nav id={id} className={classes} ref={ref} {...additionalProps}>
        {children}
      </nav>
    );
  }
);

SidebarNavRoot.displayName = 'SidebarNav';

const SidebarNav = Object.assign(SidebarNavRoot, {
  Section: SidebarNavSection,
});

export { SidebarNav };
