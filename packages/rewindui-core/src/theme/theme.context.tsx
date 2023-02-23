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
