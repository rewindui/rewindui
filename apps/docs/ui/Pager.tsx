'use client';
import { Component, Page } from 'contentlayer/generated';
import Link from 'next/link';
import { clsx } from 'clsx';
import * as React from 'react';
import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react';

export type CollectionItem = {
  title: string;
  url: string;
  slug: string;
};
type PagerProps = {
  current: Component | Page;
};

function getPrevAndNext(
  array: CollectionItem[],
  index: number
): { next: null | CollectionItem; prev: null | CollectionItem } {
  let prev: CollectionItem | null = null;
  let next: CollectionItem | null = null;

  if (index > 0) {
    prev = array[index - 1];
  }

  if (index < array.length - 1) {
    next = array[index + 1];
  }

  return {
    prev,
    next,
  };
}

const PagerItem = ({ item, side }: { item: CollectionItem; side: 'left' | 'right' }) => {
  return (
    <Link
      href={item.url}
      className={clsx(
        'flex justify-between items-center rounded border border-gray-200 hover:border-purple-500 hover:text-purple-500 hover:bg-purple-50 hover:shadow-sm p-4 w-1/2',
        side === 'right' && 'ml-auto'
      )}
    >
      {side === 'left' && <CaretCircleLeft size={28} weight="duotone" />}
      <span>{item.title}</span>
      {side === 'right' && <CaretCircleRight size={28} weight="duotone" />}
    </Link>
  );
};

export const Pager = (props: PagerProps) => {
  const collection: CollectionItem[] = [
    {
      title: 'Introduction',
      url: '/introduction',
      slug: 'introduction',
    },
    {
      title: 'Theming',
      url: '/theming',
      slug: 'theming',
    },
    {
      title: 'Variants',
      url: '/variants',
      slug: 'variants',
    },
    {
      title: 'Accessibility',
      url: '/accessibility',
      slug: 'accessibility',
    },
    {
      title: 'Roadmap',
      url: '/roadmap',
      slug: 'roadmap',
    },
    {
      title: 'Contributing',
      url: '/contributing',
      slug: 'contributing',
    },
    {
      title: 'Accordion',
      url: '/components/accordion',
      slug: 'accordion',
    },
    {
      title: 'Alert',
      url: '/components/alert',
      slug: 'alert',
    },
    {
      title: 'Avatar',
      url: '/components/avatar',
      slug: 'avatar',
    },
    {
      title: 'Badge',
      url: '/components/badge',
      slug: 'badge',
    },
    {
      title: 'Ribbon',
      url: '/components/ribbon',
      slug: 'ribbon',
    },
    {
      title: 'Card',
      url: '/components/card',
      slug: 'card',
    },
    {
      title: 'Modal',
      url: '/components/modal',
      slug: 'modal',
    },
    {
      title: 'Drawer',
      url: '/components/drawer',
      slug: 'drawer',
    },
    {
      title: 'Popover',
      url: '/components/popover',
      slug: 'popover',
    },
    {
      title: 'Selector',
      url: '/components/selector',
      slug: 'selector',
    },
    {
      title: 'Table',
      url: '/components/table',
      slug: 'table',
    },
    {
      title: 'Tabs',
      url: '/components/tabs',
      slug: 'tabs',
    },
    {
      title: 'Text',
      url: '/components/text',
      slug: 'text',
    },
    {
      title: 'Tooltip',
      url: '/components/tooltip',
      slug: 'tooltip',
    },
    {
      title: 'Progress',
      url: '/components/progress',
      slug: 'progress',
    },
    {
      title: 'Button',
      url: '/components/button',
      slug: 'button',
    },
    {
      title: 'Dropdown',
      url: '/components/dropdown',
      slug: 'dropdown',
    },
    {
      title: 'Checkbox',
      url: '/components/checkbox',
      slug: 'checkbox',
    },
    {
      title: 'Radio',
      url: '/components/radio',
      slug: 'radio',
    },
    {
      title: 'Switch',
      url: '/components/switch',
      slug: 'switch',
    },
    {
      title: 'Input',
      url: '/components/input',
      slug: 'input',
    },
    {
      title: 'Select',
      url: '/components/select',
      slug: 'select',
    },
    {
      title: 'Combobox',
      url: '/components/combobox',
      slug: 'combobox',
    },
    {
      title: 'Textarea',
      url: '/components/textarea',
      slug: 'textarea',
    },
    {
      title: 'Input Group',
      url: '/components/input-group',
      slug: 'input-group',
    },
    {
      title: 'Form Control',
      url: '/components/form-control',
      slug: 'form-control',
    },
  ];
  const { current } = props;
  const index: number | undefined = collection.findIndex(
    (item: CollectionItem) => item.slug === current.slug
  );

  const { prev, next } = getPrevAndNext(collection, index);

  return (
    <div className="flex gap-4 w-full pt-10">
      {prev && <PagerItem item={prev} side="left" />}
      {next && <PagerItem item={next} side="right" />}
    </div>
  );
};
