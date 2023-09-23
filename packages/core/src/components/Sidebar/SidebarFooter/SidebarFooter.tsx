'use client';
import { useSidebarContext } from '@components/Sidebar/Sidebar.context';
import {
  SidebarFooterComponent,
  SidebarFooterProps,
} from '@components/Sidebar/SidebarFooter/SidebarFooter.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const SidebarFooter: SidebarFooterComponent = forwardRef<HTMLDivElement, SidebarFooterProps>(
  (props: SidebarFooterProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Sidebar');
    const { children, className } = props;
    const { color, state } = useSidebarContext();
    const classes = useMemo(() => {
      return twMerge(
        theme.footer({
          className,
          color,
          expanded: state.expanded,
          hovered: state.hovered,
          mobile: state.mobile,
        })
      );
    }, [className, color, state, theme]);
    const id = usePropId(props.id);

    return (
      <div id={id} ref={ref} className={classes}>
        {(state.expanded || state.hovered) && children}
      </div>
    );
  }
);

SidebarFooter.displayName = 'SidebarFooter';

export { SidebarFooter };
