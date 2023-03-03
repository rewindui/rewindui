import { createContext, ReactNode, useContext } from 'react';

export function createElementContext<ContextValue>(errorMessage: string) {
  const Context = createContext<ContextValue | null>(null);

  const useElementContext = () => {
    const context = useContext(Context);

    if (context === null) {
      throw new Error(errorMessage);
    }

    return context;
  };

  const Provider = ({ children, value }: { value: ContextValue; children: ReactNode }) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  );

  return [Provider, useElementContext] as const;
}
