'use client';
import { useSidebarContext } from '@components/Sidebar/Sidebar.context';
import { sidebarActionEnum } from '@components/Sidebar/Sidebar.types';
import {
  SidebarHeadToggleComponent,
  SidebarHeadToggleProps,
} from '@components/Sidebar/SidebarHead/SidebarHeadToggle/SidebarHeadToggle.types';
import { LeftToLineIcon } from '@icons/LeftToLine';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const SidebarHeadToggle: SidebarHeadToggleComponent = forwardRef<
  HTMLButtonElement,
  SidebarHeadToggleProps
>((props: SidebarHeadToggleProps, ref?: Ref<HTMLButtonElement>) => {
  const theme = useComponentTheme('Sidebar');
  const { className, onClick } = props;
  const { color, state, dispatch } = useSidebarContext();
  const classes = useMemo(() => {
    return twMerge(
      theme.headToggle({
        className,
        color,
      })
    );
  }, [className, color, theme]);
  const id = usePropId(props.id);

  return (
    <button
      id={id}
      ref={ref}
      type="button"
      title={state.expanded ? 'Collapse' : 'Expand'}
      aria-pressed={state.expanded}
      aria-expanded={state.expanded}
      data-role="sidebar-head-toggle"
      className={classes}
      onClick={(event) => {
        dispatch({ type: sidebarActionEnum.toggle });

        if (onClick) {
          onClick(event);
        }
      }}
    >
      <LeftToLineIcon className={theme.headToggleIcon({ expanded: state.expanded })} />
    </button>
  );
});

SidebarHeadToggle.displayName = 'SidebarHeadToggle';

export { SidebarHeadToggle };
