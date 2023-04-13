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

type ComponentProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async (): Promise<ComponentProps['params'][]> => {
  return allComponents.map((page: Component) => ({
    slug: page.slug,
  }));
};

export const generateMetadata = ({ params }: ComponentProps) => {
  const component: Component | undefined = allComponents.find(
    (component: Component) => component.slug === params.slug
  );

  return {
    title: component?.title,
    description: component?.description,
  };
};

const ComponentLayout = async ({ params }: ComponentProps) => {
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
            <div className="flex items-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800">
                {component.title}
              </h2>
              {component.polymorphic && (
                <div className="px-2 py-1 ml-3 text-xs rounded shadow text-white bg-gradient-to-r from-purple-500 to-fuchsia-900 shadow shadow-fuchsia-200">
                  polymorphic
                </div>
              )}
            </div>
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
