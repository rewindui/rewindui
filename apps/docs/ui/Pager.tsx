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
      {side === 'left' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="1.5em"
          viewBox="0 0 512 512"
        >
          <path d="M167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273z" />
          <path
            className="opacity-20"
            d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"
          />
        </svg>
      )}
      <span>{item.title}</span>
      {side === 'right' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="1.5em"
          viewBox="0 0 512 512"
        >
          <path d="M345 239c9.4 9.4 9.4 24.6 0 33.9L241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239z" />
          <path
            className="opacity-20"
            d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"
          />
        </svg>
      )}
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
      title: 'Breadcrumbs',
      url: '/components/breadcrumbs',
      slug: 'breadcrumbs',
    },
    {
      title: 'Card',
      url: '/components/card',
      slug: 'card',
    },
    {
      title: 'Progress',
      url: '/components/progress',
      slug: 'progress',
    },
    {
      title: 'Ribbon',
      url: '/components/ribbon',
      slug: 'ribbon',
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
      title: 'Drawer',
      url: '/components/drawer',
      slug: 'drawer',
    },
    {
      title: 'Dropdown',
      url: '/components/dropdown',
      slug: 'dropdown',
    },
    {
      title: 'Modal',
      url: '/components/modal',
      slug: 'modal',
    },
    {
      title: 'Popover',
      url: '/components/popover',
      slug: 'popover',
    },
    {
      title: 'Sidebar',
      url: '/components/sidebar',
      slug: 'sidebar',
    },
    {
      title: 'Toast',
      url: '/components/toast',
      slug: 'toast',
    },
    {
      title: 'Tooltip',
      url: '/components/tooltip',
      slug: 'tooltip',
    },
    {
      title: 'Button',
      url: '/components/button',
      slug: 'button',
    },
    {
      title: 'Checkbox',
      url: '/components/checkbox',
      slug: 'checkbox',
    },
    {
      title: 'Combobox',
      url: '/components/combobox',
      slug: 'combobox',
    },
    {
      title: 'Form Control',
      url: '/components/form-control',
      slug: 'form-control',
    },
    {
      title: 'Input',
      url: '/components/input',
      slug: 'input',
    },
    {
      title: 'Input Group',
      url: '/components/input-group',
      slug: 'input-group',
    },
    {
      title: 'Radio',
      url: '/components/radio',
      slug: 'radio',
    },
    {
      title: 'Select',
      url: '/components/select',
      slug: 'select',
    },
    {
      title: 'Selector',
      url: '/components/selector',
      slug: 'selector',
    },
    {
      title: 'Switch',
      url: '/components/switch',
      slug: 'switch',
    },
    {
      title: 'Textarea',
      url: '/components/textarea',
      slug: 'textarea',
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
