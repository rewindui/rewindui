'use client';
import { CustomMdxSandpack } from '@/ui/CustomMdxSandpack';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Button } from '@rewind-ui/core';
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
  p: ({ ...props }) => <p className="mt-6" {...props} />,
  a: ({ ...props }) => (
    <a className="text-blue-500 underline decoration-2 decoration-blue-500" {...props} />
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
      className="py-[0.25rem] px-[0.3rem] bg-blue-50 text-blue-500 rounded font-mono text-sm font-semibold"
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-2 border-gray-200 border-dashed" {...props} />,
  Button: ({ ...props }) => <Button {...props} />,
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
