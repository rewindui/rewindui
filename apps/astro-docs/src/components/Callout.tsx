import type { FC, PropsWithChildren } from 'react';
import { Alert } from '@rewind-ui/core';

export const Callout: FC = ({ children }: PropsWithChildren) => {
  return (
    <Alert size="sm" color="purple" tone="light" className="mt-6">
      {children}
    </Alert>
  );
};
