import {
  alertDismissIconStyles,
  alertIconWrapper,
  alertInfoWrapperStyles,
  alertStyles,
  alertTextStyles,
  alertTitleStyles,
} from '@theme/styles/Alert.styles';
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
