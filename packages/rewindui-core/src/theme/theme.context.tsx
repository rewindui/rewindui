import * as styles from './styles';
import { createContext, useContext } from 'react';

export type Theme = {
  components: ThemeComponents;
};

type ThemeComponents = {
  Accordion: {
    base: typeof styles.accordionStyles;
    body: typeof styles.accordionBodyStyles;
    header: typeof styles.accordionHeaderStyles;
    icon: typeof styles.accordionIconStyles;
  };
  Alert: {
    base: typeof styles.alertStyles;
    infoWrapper: typeof styles.alertInfoWrapperStyles;
    iconWrapper: typeof styles.alertIconWrapper;
    dismissIcon: typeof styles.alertDismissIconStyles;
    title: typeof styles.alertTitleStyles;
    text: typeof styles.alertTextStyles;
  };
  Button: {
    base: typeof styles.buttonStyles;
    chevron: typeof styles.chevronStyles;
    spinner: typeof styles.buttonSpinnerStyles;
  };
  Card: {
    base: typeof styles.cardStyles;
    body: typeof styles.cardBodyStyles;
    header: typeof styles.cardHeaderStyles;
    image: typeof styles.cardImageStyles;
    footer: typeof styles.cardFooterStyles;
  };
  Image: {
    base: typeof styles.imageStyles;
    caption: typeof styles.imageCaptionStyles;
    wrapper: typeof styles.imageWrapperStyles;
  };
  Spinner: typeof styles.spinnerStyles;
  Text: typeof styles.textStyles;
};

const defaultTheme: Theme = {
  components: {
    Accordion: {
      base: styles.accordionStyles,
      body: styles.accordionBodyStyles,
      header: styles.accordionHeaderStyles,
      icon: styles.accordionIconStyles,
    },
    Alert: {
      base: styles.alertStyles,
      infoWrapper: styles.alertInfoWrapperStyles,
      iconWrapper: styles.alertIconWrapper,
      dismissIcon: styles.alertDismissIconStyles,
      title: styles.alertTitleStyles,
      text: styles.alertTextStyles,
    },
    Button: {
      base: styles.buttonStyles,
      chevron: styles.chevronStyles,
      spinner: styles.buttonSpinnerStyles,
    },
    Card: {
      base: styles.cardStyles,
      body: styles.cardBodyStyles,
      header: styles.cardHeaderStyles,
      image: styles.cardImageStyles,
      footer: styles.cardFooterStyles,
    },
    Image: {
      base: styles.imageStyles,
      caption: styles.imageCaptionStyles,
      wrapper: styles.imageWrapperStyles,
    },
    Spinner: styles.spinnerStyles,
    Text: styles.textStyles,
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
