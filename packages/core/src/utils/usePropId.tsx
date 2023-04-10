import { useId } from 'react';

export function usePropId(propId: any): string {
  const id = useId();
  return propId || id;
}
