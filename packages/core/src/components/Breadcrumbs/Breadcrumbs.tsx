'use client';
import {
  BreadcrumbsComponent,
  BreadcrumbsContext,
  BreadcrumbsProps,
} from '@components/Breadcrumbs/Breadcrumbs.types';
import { Children, forwardRef, ReactNode, Ref, useMemo } from 'react';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { twMerge } from 'tailwind-merge';
import { BreadcrumbsItem } from '@components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem';
import { BreadcrumbsContextProvider } from '@components/Breadcrumbs/Breadcrumbs.context';

const defaultProps: Partial<BreadcrumbsProps> = {
  color: 'gray',
  size: 'md',
};

const BreadcrumbsRoot: BreadcrumbsComponent = forwardRef<HTMLUListElement, BreadcrumbsProps>(
  (props: BreadcrumbsProps, ref?: Ref<HTMLUListElement>) => {
    const theme = useComponentTheme('Breadcrumbs');
    const {
      children,
      className = '',
      color,
      separator = '/',
      size,
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const id = usePropId(props.id);
    const contextValue: BreadcrumbsContext = {
      color,
    };

    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          className,
          color,
          size,
        })
      );
    }, [className, color, size, theme]);

    const items: ReactNode[] = [];

    Children.forEach(children, (child, index) => {
      items.push(child);

      if (index < Children.count(children) - 1) {
        items.push(<li key={index}>{separator}</li>);
      }
    });

    return (
      <BreadcrumbsContextProvider value={contextValue}>
        <nav aria-label="Breadcrumb">
          <ul id={id} ref={ref} className={classes} {...additionalProps}>
            {items}
          </ul>
        </nav>
      </BreadcrumbsContextProvider>
    );
  }
);

BreadcrumbsRoot.displayName = 'Breadcrumbs';

const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
  Item: BreadcrumbsItem,
});

export default Breadcrumbs;
