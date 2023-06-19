'use client';
import { createContext, ReactNode, useContext } from 'react';

export function createIndependentContext<ContextValue>() {
  const Context = createContext<ContextValue>({} as ContextValue);

  const useIndependentContext = () => {
    return useContext(Context);
  };

  const Provider = ({ children, value }: { value: ContextValue; children: ReactNode }) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  );

  return [Provider, useIndependentContext] as const;
}
