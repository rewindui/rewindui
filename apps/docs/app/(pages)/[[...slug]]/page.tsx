import { Mdx } from '@/ui/Mdx';
import { Pager } from '@/ui/Pager';
import { Toc } from '@/ui/Toc';
import { getTableOfContents } from '@/utils/toc.util';
import { allPages, Page } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import * as React from 'react';

export const generateStaticParams = async () =>
  allPages.map((page: Page) => ({ slug: page._raw.flattenedPath }));

export const generateMetadata = ({ params }: any) => {
  const page: Page | undefined = allPages.find(
    (page: Page) => page._raw.flattenedPath === params.slug
  );
  return { title: page?.title };
};

const PageLayout = async ({ params }: { params: { slug: string[] } }) => {
  const slug = params.slug?.join('/') || '';
  const page: Page | undefined = allPages.find((page) => page._raw.flattenedPath === slug);

  if (!page) {
    notFound();
  }

  const toc = await getTableOfContents(page.body.raw);

  return (
    <div className="flex space-x-10 p-4 2xl:py-8 2xl:px-10">
      <article className="w-full 2xl:w-5/6">
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800">{page.title}</h2>
          <p className="text-lg md:text-xl leading-7 text-gray-600">{page.description}</p>
        </div>
        <Mdx code={page.body.code} />
        <Pager current={page} collection={allPages} />
      </article>

      <div className="hidden 2xl:block 2xl:w-1/6">
        <Toc toc={toc} />
      </div>
    </div>
  );
};

export default PageLayout;
