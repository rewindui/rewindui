import * as React from 'react';
import { SandpackLayout, SandpackCodeViewer, SandpackProvider } from '@codesandbox/sandpack-react';
import { theme } from '@/lib/theme';

export const CustomMdxSandpack = (props: any) => {
  const { children } = props;

  return (
    <SandpackProvider
      theme={theme}
      files={{
        '/App.js': children?.props?.children?.trim(),
      }}
      template="react"
    >
      <SandpackLayout>
        <SandpackCodeViewer showLineNumbers={true} />
      </SandpackLayout>
    </SandpackProvider>
  );
};
