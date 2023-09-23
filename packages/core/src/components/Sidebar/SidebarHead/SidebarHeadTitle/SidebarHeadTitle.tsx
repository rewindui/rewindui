'use client';
import { useSidebarContext } from '@components/Sidebar/Sidebar.context';
import {
  SidebarHeadTitleComponent,
  SidebarHeadTitleProps,
} from '@components/Sidebar/SidebarHead/SidebarHeadTitle/SidebarHeadTitle.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const SidebarHeadTitle: SidebarHeadTitleComponent = forwardRef<
  HTMLDivElement,
  SidebarHeadTitleProps
>((props: SidebarHeadTitleProps, ref?: Ref<HTMLDivElement>) => {
  const theme = useComponentTheme('Sidebar');
  const { children, className } = props;
  const { state } = useSidebarContext();
  const classes = useMemo(() => {
    return twMerge(
      theme.headTitle({
        className,
      })
    );
  }, [className, theme]);
  const id = usePropId(props.id);

  return (
    <div id={id} ref={ref} className={classes}>
      {(state.expanded || state.hovered) && children}
    </div>
  );
});

SidebarHeadTitle.displayName = 'SidebarHeadTitle';

export { SidebarHeadTitle };
