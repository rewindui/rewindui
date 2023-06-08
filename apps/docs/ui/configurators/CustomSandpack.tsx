'use client';
import { SandpackLayout, SandpackCodeViewer, SandpackProvider } from '@codesandbox/sandpack-react';
import { theme } from '@/lib/theme';

export const CustomSandpack = (props: any) => {
  const { children, showLineNumbers = true } = props;

  return (
    <SandpackProvider
      theme={theme}
      files={{
        '/App.js': children,
      }}
      template="react"
    >
      <SandpackLayout>
        <SandpackCodeViewer showLineNumbers={showLineNumbers} wrapContent />
      </SandpackLayout>
    </SandpackProvider>
  );
};
