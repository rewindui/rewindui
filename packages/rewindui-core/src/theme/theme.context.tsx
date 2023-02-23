import { createContext, useContext } from 'react';
import { textStyles } from './styles';

export type Theme = {
  components: ThemeComponents;
};

type ThemeComponents = {
  Text: typeof textStyles;
  button: string[];
};

const defaultTheme: Theme = {
  components: {
    Text: textStyles,
    button: ['button-primary'],
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

export function useComponentTheme<C extends keyof ThemeComponents>(
  component: C
) {
  const theme = useTheme();

  return theme.components[component];
}
