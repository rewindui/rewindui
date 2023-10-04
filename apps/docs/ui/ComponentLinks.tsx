'use client';
import { Component } from '@/.contentlayer/generated/types';
import { config } from '@/lib/config';
import { Button } from '@idb-dab/ui-core';
import Image from 'next/image';

export const ComponentLinks = (props: { component: Component }) => {
  const { source, theme, variants, storybook } = props.component;

  return (
    <div className="flex flex-wrap gap-2">
      {source && (
        <Button
          as="a"
          href={`${config.github.repo_url}/${config.github.component_dir}/${source}`}
          target="_blank"
          color="white"
          size="sm"
          shadow="sm"
        >
          <Image
            priority
            src="/images/github.svg"
            className="mr-1.5"
            height={14}
            width={14}
            alt="Open source code"
          />
          <span>Source code</span>
        </Button>
      )}

      {theme && (
        <Button
          as="a"
          href={`${config.github.repo_url}/${config.github.theme_dir}/${theme}`}
          target="_blank"
          color="white"
          size="sm"
          shadow="sm"
        >
          <Image
            priority
            src="/images/github.svg"
            className="mr-1.5"
            height={14}
            width={14}
            alt="Open source code"
          />
          <span>Theme</span>
        </Button>
      )}

      {variants && (
        <Button
          as="a"
          href={`${config.github.repo_url}/${config.github.variants_dir}/${variants}`}
          target="_blank"
          color="white"
          size="sm"
          shadow="sm"
        >
          <Image
            priority
            src="/images/github.svg"
            className="mr-1.5"
            height={14}
            width={14}
            alt="Open source code"
          />
          <span>Variants</span>
        </Button>
      )}

      {storybook && (
        <Button
          as="a"
          href={`${config.storybook.url}${storybook}`}
          target="_blank"
          size="sm"
          color="white"
          shadow="sm"
        >
          <Image
            priority
            src="/images/storybook.svg"
            className="mr-1.5"
            height={14}
            width={14}
            alt="View component stories"
          />
          <span>Storybook</span>
        </Button>
      )}
    </div>
  );
};
