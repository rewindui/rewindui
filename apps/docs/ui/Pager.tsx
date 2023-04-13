'use client';
import { allComponents, allPages, Component, Page } from 'contentlayer/generated';
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

function getPrevAndNext(array: CollectionItem[], index: number) {
  let prev = null;
  let next = null;

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
        'flex justify-between items-center rounded border border-gray-200 hover:bg-gray-50 hover:shadow-sm p-4 w-1/2',
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
      url: '/',
      slug: '',
    },
    {
      title: 'Theming',
      url: '/theming',
      slug: 'theming',
    },
    {
      title: 'Accordion',
      url: '/components/accordion',
      slug: 'accordion',
    },
    {
      title: 'Text',
      url: '/components/text',
      slug: 'text',
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
  ];
  console.log(collection);
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
