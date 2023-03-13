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
  Checkbox: {
    base: typeof styles.checkBoxStyles;
    label: typeof styles.checkBoxLabelStyles;
    description: typeof styles.checkBoxDescriptionStyles;
    error: typeof styles.checkBoxErrorStyles;
  };
  Image: {
    base: typeof styles.imageStyles;
    caption: typeof styles.imageCaptionStyles;
    wrapper: typeof styles.imageWrapperStyles;
  };
  Radio: {
    base: typeof styles.radioStyles;
    label: typeof styles.radioLabelStyles;
    description: typeof styles.radioDescriptionStyles;
    error: typeof styles.radioErrorStyles;
  };
  Spinner: typeof styles.spinnerStyles;
  Switch: {
    base: typeof styles.switchStyles;
    inner: typeof styles.switchInnerStyles;
    label: typeof styles.switchLabelStyles;
    description: typeof styles.switchDescriptionStyles;
    error: typeof styles.switchErrorStyles;
  };
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
    Checkbox: {
      base: styles.checkBoxStyles,
      label: styles.checkBoxLabelStyles,
      description: styles.checkBoxDescriptionStyles,
      error: styles.checkBoxErrorStyles,
    },
    Image: {
      base: styles.imageStyles,
      caption: styles.imageCaptionStyles,
      wrapper: styles.imageWrapperStyles,
    },
    Radio: {
      base: styles.radioStyles,
      label: styles.radioLabelStyles,
      description: styles.radioDescriptionStyles,
      error: styles.radioErrorStyles,
    },
    Spinner: styles.spinnerStyles,
    Switch: {
      base: styles.switchStyles,
      inner: styles.switchInnerStyles,
      label: styles.switchLabelStyles,
      description: styles.switchDescriptionStyles,
      error: styles.switchErrorStyles,
    },
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
