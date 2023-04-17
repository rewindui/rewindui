'use client';
import { CustomMdxSandpack } from '@/ui/CustomMdxSandpack';
import { AccordionItemProps } from '@rewind-ui/core/src/components/Accordion/AccordionItem/AccordionItem.types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Accordion, Text, Button } from '@rewind-ui/core';
import { HTMLAttributes } from 'react';
import { View } from './View';

const components = {
  h1: ({ ...props }) => (
    <h1 className="mt-8 text-3xl text-gray-800 font-semibold scroll-mt-[7rem]" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="mt-8 text-2xl text-gray-700 font-semibold scroll-mt-[7rem]" {...props} />
  ),
  h3: ({ ...props }) => <p className="mt-8 text-xl text-gray-700 font-semibold" {...props} />,
  h4: ({ ...props }) => <p className="mt-8 text-lg text-gray-700 font-medium" {...props} />,
  p: ({ ...props }) => (
    <p className="mt-6 text-base text-gray-600 leading-normal md:leading-relaxed" {...props} />
  ),
  a: ({ ...props }) => (
    <a
      className="text-blue-500 underline decoration-2 decoration-blue-500"
      target="_blank"
      {...props}
    />
  ),
  ul: ({ ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-6 ml-6 list-disc" {...props} />
  ),
  pre: ({ ...props }) => (
    <div className="mt-4 overflow-auto">
      <CustomMdxSandpack {...props} />
    </div>
  ),
  code: ({ ...props }) => (
    <code
      className="py-[0.2rem] px-[0.3rem] bg-blue-50/75 text-blue-500 rounded font-mono text-sm font-medium"
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-2 border-gray-200 border-dashed" {...props} />,
  table: ({ className, ...props }: HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto text-sm">
      <table className="w-full rounded" {...props} />
    </div>
  ),
  tr: ({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="m-0 border-t border-gray-300 p-0 even:bg-gray-50" {...props} />
  ),
  th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border border-gray-100 bg-gray-50 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="border border-gray-100 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  Accordion: ({ ...props }) => <Accordion {...props} />,
  AccordionItem: ({ anchor, ...props }: AccordionItemProps) => (
    <Accordion.Item anchor={anchor} {...props} />
  ),
  AccordionHeader: ({ ...props }) => <Accordion.Header {...props} />,
  AccordionBody: ({ ...props }) => <Accordion.Body {...props} />,
  Button: ({ ...props }) => <Button {...props} />,
  Text: ({ ...props }) => <Text {...props} />,
  View: ({ ...props }) => <View {...props} />,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
