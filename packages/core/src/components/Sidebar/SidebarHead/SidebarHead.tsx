'use client';
import { useSidebarContext } from '@components/Sidebar/Sidebar.context';
import {
  SidebarHeadComponent,
  SidebarHeadProps,
} from '@components/Sidebar/SidebarHead/SidebarHead.types';
import { SidebarHeadLogo } from '@components/Sidebar/SidebarHead/SidebarHeadLogo/SidebarHeadLogo';
import { SidebarHeadTitle } from '@components/Sidebar/SidebarHead/SidebarHeadTitle/SidebarHeadTitle';
import { SidebarHeadToggle } from '@components/Sidebar/SidebarHead/SidebarHeadToggle/SidebarHeadToggle';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const SidebarHeadRoot: SidebarHeadComponent = forwardRef<HTMLDivElement, SidebarHeadProps>(
  (props: SidebarHeadProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Sidebar');
    const { children, className, ...additionalProps } = props;
    const { state, color } = useSidebarContext();
    const classes = useMemo(() => {
      return twMerge(
        theme.head({
          className,
          color,
          mobile: state.mobile,
        })
      );
    }, [className, color, state, theme]);
    const id = usePropId(props.id);

    return (
      <div id={id} className={classes} ref={ref} {...additionalProps}>
        {children}
      </div>
    );
  }
);

SidebarHeadRoot.displayName = 'SidebarHead';

const SidebarHead = Object.assign(SidebarHeadRoot, {
  Logo: SidebarHeadLogo,
  Title: SidebarHeadTitle,
  Toggle: SidebarHeadToggle,
});

export { SidebarHead };
