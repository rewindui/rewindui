'use client';
import {
  SidebarHeadLogoComponent,
  SidebarHeadLogoProps,
} from '@components/Sidebar/SidebarHead/SidebarHeadLogo/SidebarHeadLogo.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const SidebarHeadLogo: SidebarHeadLogoComponent = forwardRef<HTMLDivElement, SidebarHeadLogoProps>(
  (props: SidebarHeadLogoProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Sidebar');
    const { children, className, ...additionalProps } = props;
    const classes = useMemo(() => {
      return twMerge(
        theme.headLogo({
          className,
        })
      );
    }, [className, theme]);
    const id = usePropId(props.id);

    return (
      <div id={id} ref={ref} className={classes} {...additionalProps}>
        {children}
      </div>
    );
  }
);

SidebarHeadLogo.displayName = 'SidebarHeadLogo';

export { SidebarHeadLogo };
