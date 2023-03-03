import {
  accordionBodyStyles,
  accordionHeaderStyles,
  accordionIconStyles,
  accordionStyles,
  alertDismissIconStyles,
  alertIconWrapper,
  alertInfoWrapperStyles,
  alertStyles,
  alertTextStyles,
  alertTitleStyles,
} from './styles';
import { createContext, useContext } from 'react';
import {
  buttonSpinnerStyles,
  buttonStyles,
  chevronStyles,
  spinnerStyles,
  textStyles,
} from './styles';

export type Theme = {
  components: ThemeComponents;
};

type ThemeComponents = {
  Accordion: {
    base: typeof accordionStyles;
    body: typeof accordionBodyStyles;
    header: typeof accordionHeaderStyles;
    icon: typeof accordionIconStyles;
  };
  Alert: {
    base: typeof alertStyles;
    infoWrapper: typeof alertInfoWrapperStyles;
    iconWrapper: typeof alertIconWrapper;
    dismissIcon: typeof alertDismissIconStyles;
    title: typeof alertTitleStyles;
    text: typeof alertTextStyles;
  };
  Button: {
    base: typeof buttonStyles;
    chevron: typeof chevronStyles;
    spinner: typeof buttonSpinnerStyles;
  };
  Spinner: typeof spinnerStyles;
  Text: typeof textStyles;
};

const defaultTheme: Theme = {
  components: {
    Accordion: {
      base: accordionStyles,
      body: accordionBodyStyles,
      header: accordionHeaderStyles,
      icon: accordionIconStyles,
    },
    Alert: {
      base: alertStyles,
      infoWrapper: alertInfoWrapperStyles,
      iconWrapper: alertIconWrapper,
      dismissIcon: alertDismissIconStyles,
      title: alertTitleStyles,
      text: alertTextStyles,
    },
    Button: {
      base: buttonStyles,
      chevron: chevronStyles,
      spinner: buttonSpinnerStyles,
    },
    Spinner: spinnerStyles,
    Text: textStyles,
  },
};

export type ThemeContext = {
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContext>({
  theme: defaultTheme,
});

export function useTheme(): Theme {
  return useContext(ThemeContext)?.theme || defaultTheme;
}

export function useComponentTheme<C extends keyof ThemeComponents>(component: C) {
  const theme = useTheme();

  return theme.components[component];
}
