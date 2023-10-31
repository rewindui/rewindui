'use client';
import { forwardRef, Ref, useMemo } from 'react';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { twMerge } from 'tailwind-merge';
import {
  BreadcrumbsItemComponent,
  BreadcrumbsItemProps,
} from '@components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem.types';
import { useBreadcrumbsContext } from '@components/Breadcrumbs/Breadcrumbs.context';

const BreadcrumbsItem: BreadcrumbsItemComponent = forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  (props: BreadcrumbsItemProps, ref?: Ref<HTMLLIElement>) => {
    const theme = useComponentTheme('Breadcrumbs');
    const { children, className = '', href, ...additionalProps } = props;
    const { color } = useBreadcrumbsContext();
    const id = usePropId(props.id);

    const classes = useMemo(() => {
      return twMerge(
        theme.item({
          className,
          color,
          isLink: !!href,
        })
      );
    }, [className, color, href, theme]);

    return (
      <li id={id} ref={ref} className={classes} {...additionalProps}>
        {href ? (
          <a href={href} className={theme.anchor()}>
            {children}
          </a>
        ) : (
          children
        )}
      </li>
    );
  }
);

BreadcrumbsItem.displayName = 'BreadcrumbsItem';

export { BreadcrumbsItem };
