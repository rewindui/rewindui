import { accordionVariants } from '@theme/variants/Accordion.variants';
import { alertVariants } from '@theme/variants/Alert.variants';
import { buttonVariants } from '@theme/variants/Button.variants';
import { createContext, Provider, useContext } from 'react';
import { badgeVariants, ribbonVariants, textVariants } from './variants';

export type Variant = {
  components: VariantComponents;
};

type VariantComponents = {
  Accordion: typeof accordionVariants;
  Alert: typeof alertVariants;
  Badge: typeof badgeVariants;
  Button: typeof buttonVariants;
  Text: typeof textVariants;
  Ribbon: typeof ribbonVariants;
};

const defaultVariant: Variant = {
  components: {
    Accordion: accordionVariants,
    Alert: alertVariants,
    Badge: badgeVariants,
    Button: buttonVariants,
    Text: textVariants,
    Ribbon: ribbonVariants,
  },
};

export type VariantContextType = {
  variant: Variant;
};

const VariantContext = createContext<VariantContextType>({
  variant: defaultVariant,
});

export const VariantProvider: Provider<VariantContextType> = VariantContext.Provider;

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
