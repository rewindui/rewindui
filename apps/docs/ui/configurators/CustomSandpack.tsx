'use client';
import { SandpackLayout, SandpackCodeViewer, SandpackProvider } from '@codesandbox/sandpack-react';
import { theme } from '@/lib/theme';

export const CustomSandpack = (props: any) => {
  const { children } = props;

  return (
    <SandpackProvider
      theme={theme}
      files={{
        '/App.js': children,
      }}
      template="react"
    >
      <SandpackLayout>
        <SandpackCodeViewer showLineNumbers={true} wrapContent />
      </SandpackLayout>
    </SandpackProvider>
  );
};
