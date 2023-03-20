import * as styles from './styles';
import { createContext, useContext } from 'react';

export type Theme = {
  components: ThemeComponents;
};

type ThemeComponents = {
  Accordion: {
    base: typeof styles.accordionStyles.base;
    body: typeof styles.accordionStyles.body;
    header: typeof styles.accordionStyles.header;
    icon: typeof styles.accordionStyles.icon;
  };
  Alert: {
    base: typeof styles.alertStyles.base;
    infoWrapper: typeof styles.alertStyles.infoWrapper;
    iconWrapper: typeof styles.alertStyles.iconWrapper;
    dismissIcon: typeof styles.alertStyles.dismissIcon;
    title: typeof styles.alertStyles.title;
    text: typeof styles.alertStyles.text;
  };
  Button: {
    base: typeof styles.buttonStyles.base;
    chevron: typeof styles.buttonStyles.chevron;
    spinner: typeof styles.buttonStyles.spinner;
  };
  Card: {
    base: typeof styles.cardStyles.base;
    body: typeof styles.cardStyles.body;
    header: typeof styles.cardStyles.header;
    image: typeof styles.cardStyles.image;
    footer: typeof styles.cardStyles.footer;
  };
  Checkbox: {
    base: typeof styles.checkBoxStyles.base;
    label: typeof styles.checkBoxStyles.label;
    description: typeof styles.checkBoxStyles.description;
    error: typeof styles.checkBoxStyles.error;
  };
  FormControl: {
    base: typeof styles.formControlStyles.base;
    label: typeof styles.formControlStyles.label;
    text: typeof styles.formControlStyles.text;
  };
  Image: {
    base: typeof styles.imageStyles.base;
    caption: typeof styles.imageStyles.caption;
    wrapper: typeof styles.imageStyles.wrapper;
  };
  Input: {
    base: typeof styles.inputStyles.base;
    wrapper: typeof styles.inputStyles.wrapper;
    icon: typeof styles.inputStyles.icon;
    leftIconWrapper: typeof styles.inputStyles.leftIconWrapper;
    rightIconWrapper: typeof styles.inputStyles.rightIconWrapper;
  };
  InputGroup: {
    base: typeof styles.inputGroupStyles.base;
    text: typeof styles.inputGroupStyles.text;
  };
  Popover: {
    base: typeof styles.popoverStyles.base;
    arrow: typeof styles.popoverStyles.arrow;
  };
  Radio: {
    base: typeof styles.radioStyles.base;
    label: typeof styles.radioStyles.label;
    description: typeof styles.radioStyles.description;
    error: typeof styles.radioStyles.error;
  };
  Select: {
    base: typeof styles.selectStyles.base;
    wrapper: typeof styles.selectStyles.wrapper;
    icon: typeof styles.selectStyles.icon;
    leftIconWrapper: typeof styles.selectStyles.leftIconWrapper;
    rightIconWrapper: typeof styles.selectStyles.rightIconWrapper;
  };
  Spinner: typeof styles.spinnerStyles.base;
  Switch: {
    base: typeof styles.switchStyles.base;
    inner: typeof styles.switchStyles.inner;
    label: typeof styles.switchStyles.label;
    description: typeof styles.switchStyles.description;
    error: typeof styles.switchStyles.error;
  };
  Tabs: {
    tab: typeof styles.tabStyles.tab;
    list: typeof styles.tabStyles.list;
  };
  Text: typeof styles.textStyles.base;
  Textarea: typeof styles.textareaStyles.base;
  Tooltip: {
    base: typeof styles.tooltipStyles.base;
    arrow: typeof styles.tooltipStyles.arrow;
  };
};

const defaultTheme: Theme = {
  components: {
    Accordion: {
      base: styles.accordionStyles.base,
      body: styles.accordionStyles.body,
      header: styles.accordionStyles.header,
      icon: styles.accordionStyles.icon,
    },
    Alert: {
      base: styles.alertStyles.base,
      infoWrapper: styles.alertStyles.infoWrapper,
      iconWrapper: styles.alertStyles.iconWrapper,
      dismissIcon: styles.alertStyles.dismissIcon,
      title: styles.alertStyles.title,
      text: styles.alertStyles.text,
    },
    Button: {
      base: styles.buttonStyles.base,
      chevron: styles.buttonStyles.chevron,
      spinner: styles.buttonStyles.spinner,
    },
    Card: {
      base: styles.cardStyles.base,
      body: styles.cardStyles.body,
      header: styles.cardStyles.header,
      image: styles.cardStyles.image,
      footer: styles.cardStyles.footer,
    },
    Checkbox: {
      base: styles.checkBoxStyles.base,
      label: styles.checkBoxStyles.label,
      description: styles.checkBoxStyles.description,
      error: styles.checkBoxStyles.error,
    },
    Image: {
      base: styles.imageStyles.base,
      caption: styles.imageStyles.caption,
      wrapper: styles.imageStyles.wrapper,
    },
    FormControl: {
      base: styles.formControlStyles.base,
      label: styles.formControlStyles.label,
      text: styles.formControlStyles.text,
    },
    Input: {
      base: styles.inputStyles.base,
      wrapper: styles.inputStyles.wrapper,
      icon: styles.inputStyles.icon,
      leftIconWrapper: styles.inputStyles.leftIconWrapper,
      rightIconWrapper: styles.inputStyles.rightIconWrapper,
    },
    InputGroup: {
      base: styles.inputGroupStyles.base,
      text: styles.inputGroupStyles.text,
    },
    Popover: {
      base: styles.popoverStyles.base,
      arrow: styles.popoverStyles.arrow,
    },
    Radio: {
      base: styles.radioStyles.base,
      label: styles.radioStyles.label,
      description: styles.radioStyles.description,
      error: styles.radioStyles.error,
    },
    Select: {
      base: styles.selectStyles.base,
      wrapper: styles.selectStyles.wrapper,
      icon: styles.selectStyles.icon,
      leftIconWrapper: styles.selectStyles.leftIconWrapper,
      rightIconWrapper: styles.selectStyles.rightIconWrapper,
    },
    Spinner: styles.spinnerStyles.base,
    Switch: {
      base: styles.switchStyles.base,
      inner: styles.switchStyles.inner,
      label: styles.switchStyles.label,
      description: styles.switchStyles.description,
      error: styles.switchStyles.error,
    },
    Tabs: {
      tab: styles.tabStyles.tab,
      list: styles.tabStyles.list,
    },
    Text: styles.textStyles.base,
    Textarea: styles.textareaStyles.base,
    Tooltip: {
      base: styles.tooltipStyles.base,
      arrow: styles.tooltipStyles.arrow,
    },
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
