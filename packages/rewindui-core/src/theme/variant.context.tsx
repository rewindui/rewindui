import { createContext, useContext } from 'react';
import { textVariants } from './variants';

export type Variant = {
  components: VariantComponents;
};

type VariantComponents = {
  Text: typeof textVariants;
};

const defaultVariant: Variant = {
  components: {
    Text: textVariants,
  },
};

export type VariantContext = {
  variant: Variant;
};

export const VariantContext = createContext<VariantContext>({
  variant: defaultVariant,
});

export function useVariant(): Variant {
  return useContext(VariantContext)?.variant || defaultVariant;
}

export function useComponentVariant<C extends keyof VariantComponents>(
  component: C,
  componentVariant?: keyof VariantComponents[C]
) {
  const variant = useVariant();

  if (!componentVariant) {
    return {};
  }

  return variant.components[component][componentVariant];
}
