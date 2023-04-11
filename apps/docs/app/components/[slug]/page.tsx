import { ComponentSlug } from '@/contentlayer.config';
import { ComponentLinks } from '@/ui/ComponentLinks';
import { Configurator } from '@/ui/Configurator';
import { Mdx } from '@/ui/Mdx';
import { Toc } from '@/ui/Toc';
import { getTableOfContents } from '@/utils/toc.util';
import { allComponents, Component } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import * as React from 'react';
import { Pager } from '@/ui/Pager';

export const generateStaticParams = async () =>
  allComponents.map((component: Component) => ({ slug: component.slug }));

export const generateMetadata = ({ params }: any) => {
  const component: Component | undefined = allComponents.find(
    (component: Component) => component.slug === params.slug
  );
  return { title: component?.title };
};

const ComponentLayout = async ({ params }: { params: { slug: ComponentSlug } }) => {
  const component: Component | undefined = allComponents.find(
    (component: Component) => component.slug === params.slug
  );

  if (!component) {
    notFound();
  }

  const slug = component.slug as ComponentSlug;
  const toc = await getTableOfContents(component.body.raw);

  return (
    <>
      <div className="flex space-x-10 p-4 2xl:py-8 2xl:px-10">
        <article className="w-full 2xl:w-5/6">
          <div className="mb-8 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800">{component.title}</h2>
            <p className="text-lg md:text-xl leading-7 text-gray-600">{component.description}</p>
            <p className="text-gray-800">{component.intro}</p>

            <ComponentLinks component={component} />
          </div>
          <Configurator component={slug} />
          <Mdx code={component.body.code} />
          <Pager current={component} />
        </article>

        <div className="hidden 2xl:block 2xl:w-1/6">
          <Toc toc={toc} />
        </div>
      </div>
    </>
  );
};

export default ComponentLayout;
