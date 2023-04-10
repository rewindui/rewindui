'use client';
import { allPages, Component, Page } from 'contentlayer/generated';
import Link from 'next/link';
import { clsx } from 'clsx';
import * as React from 'react';
import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react';

type PagerProps = {
  current: Component | Page;
  collection: Component[] | Page[];
};

function getPrevAndNext(array: Component[] | Page[], index: number) {
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

const PagerItem = ({ item, side }: { item: Component | Page; side: 'left' | 'right' }) => {
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
  const { current, collection } = props;
  const index: number | undefined = collection.findIndex(
    (item: Component | Page) => item.slug === current.slug
  );

  const { prev, next } = getPrevAndNext(collection, index);

  return (
    <div className="flex gap-4 w-full pt-10">
      {prev && <PagerItem item={prev} side="left" />}
      {next && <PagerItem item={next} side="right" />}
    </div>
  );
};
