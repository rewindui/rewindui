'use client';
import { useSidebarContext } from '@components/Sidebar/Sidebar.context';
import {
  SidebarSeparatorComponent,
  SidebarSeparatorProps,
} from '@components/Sidebar/SidebarSeparator/SidebarSeparator.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const SidebarSeparator: SidebarSeparatorComponent = forwardRef<
  HTMLHRElement,
  SidebarSeparatorProps
>((props: SidebarSeparatorProps, ref?: Ref<HTMLHRElement>) => {
  const theme = useComponentTheme('Sidebar');
  const { className } = props;
  const { color } = useSidebarContext();
  const classes = useMemo(() => {
    return twMerge(
      theme.separator({
        className,
        color,
      })
    );
  }, [className, color, theme]);
  const id = usePropId(props.id);

  return <hr id={id} className={classes} ref={ref} />;
});

SidebarSeparator.displayName = 'SidebarSeparator';

export { SidebarSeparator };
