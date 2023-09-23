'use client';
import { useSidebarContext } from '@components/Sidebar/Sidebar.context';
import {
  SidebarNavSectionComponent,
  SidebarNavSectionProps,
} from '@components/Sidebar/SidebarNav/SidebarNavSection/SidebarNavSection.types';
import { SidebarNavSectionItem } from '@components/Sidebar/SidebarNav/SidebarNavSection/SidebarNavSectionItem/SidebarNavSectionItem';
import { SidebarNavSectionTitle } from '@components/Sidebar/SidebarNav/SidebarNavSection/SidebarNavSectionTitle/SidebarNavSectionTitle';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const SidebarNavSectionRoot: SidebarNavSectionComponent = forwardRef<
  HTMLUListElement,
  SidebarNavSectionProps
>((props: SidebarNavSectionProps, ref?: Ref<HTMLUListElement>) => {
  const theme = useComponentTheme('Sidebar');
  const { children, className, isChild = false } = props;
  const { color } = useSidebarContext();
  const classes = useMemo(() => {
    return twMerge(
      theme.navSection({
        className,
        color,
        isChild,
      })
    );
  }, [className, color, isChild, theme]);
  const id = usePropId(props.id);

  return (
    <ul id={id} className={classes} ref={ref}>
      {children}
    </ul>
  );
});

SidebarNavSectionRoot.displayName = 'SidebarNavSection';

const SidebarNavSection = Object.assign(SidebarNavSectionRoot, {
  Title: SidebarNavSectionTitle,
  Item: SidebarNavSectionItem,
});

export { SidebarNavSection };
