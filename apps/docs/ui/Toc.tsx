// Copied from: https://github.com/shadcn/ui/blob/0a241be17ffe07cf21cc72702feb1aea852ef571/apps/www/components/toc.tsx

'use client';
import { useMounted } from '@/hooks/use-mounted';
import { TableOfContents } from '@/utils/toc.util';
import { Text } from '@rewind-ui/core';
import { cva } from 'class-variance-authority';
import { useEffect, useMemo, useState } from 'react';
import * as React from 'react';

interface TocProps {
  toc: TableOfContents;
}

export function Toc({ toc }: TocProps) {
  const itemIds = useMemo(
    () =>
      toc?.items
        ? toc.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split('#')[1])
        : [],
    [toc]
  ) as string[];
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!toc?.items || !mounted) {
    return null;
  }

  return (
    <div className="fixed h-[calc(100%-14rem)] space-y-2 w-[16rem] overflow-auto">
      <Text weight="medium" color="dark" size="base">
        Quick navigation
      </Text>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  );
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | undefined | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TableOfContents;
  level?: number;
  activeItem?: string | null;
}

const tocListStyles = cva(['m-0', 'list-none', ' text-sm'], {
  variants: {
    inner: {
      false: 'pl-0',
      true: 'pl-4',
    },
  },
});

const tocAnchorStyles = cva(['inline-block', 'no-underline'], {
  variants: {
    active: {
      false: 'text-gray-600 hover:text-gray-900',
      true: 'font-medium text-blue-500',
    },
  },
});

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.items?.length && level < 3 ? (
    <ul className={tocListStyles({ inner: level > 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className="pt-3">
            <a
              href={item.url}
              className={tocAnchorStyles({ active: item.url === `#${activeItem}` })}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
