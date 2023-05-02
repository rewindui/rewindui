import { comboboxOptionStyles } from './styles';
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
  Combobox: {
    base: typeof styles.comboboxStyles.base;
    wrapper: typeof styles.comboboxStyles.wrapper;
    noResults: typeof styles.comboboxStyles.noResults;
    list: typeof styles.comboboxStyles.list;
    icon: typeof styles.comboboxStyles.icon;
    leftIconWrapper: typeof styles.comboboxStyles.leftIconWrapper;
    rightIconWrapper: typeof styles.comboboxStyles.rightIconWrapper;
    group: typeof styles.comboboxStyles.group;
    button: typeof styles.comboboxOptionStyles.button;
    optionIcon: typeof styles.comboboxOptionStyles.optionIcon;
    optionWrapper: typeof styles.comboboxOptionStyles.optionWrapper;
    infoWrapper: typeof styles.comboboxOptionStyles.infoWrapper;
    label: typeof styles.comboboxOptionStyles.label;
    description: typeof styles.comboboxOptionStyles.description;
  };
  Dropdown: {
    base: typeof styles.dropdownStyles.base;
    arrow: typeof styles.dropdownStyles.arrow;
    content: typeof styles.dropdownStyles.content;
    divider: typeof styles.dropdownStyles.divider;
    item: typeof styles.dropdownStyles.item;
    label: typeof styles.dropdownStyles.label;
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
  Modal: typeof styles.modalStyles.base;
  Overlay: typeof styles.overlayStyles.base;
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
  Selector: {
    base: typeof styles.selectorStyles.base;
    separator: typeof styles.selectorStyles.separator;
    tab: typeof styles.selectorStyles.tab;
    wrapper: typeof styles.selectorStyles.wrapper;
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
    wrapper: typeof styles.tabStyles.wrapper;
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
    Combobox: {
      base: styles.comboboxStyles.base,
      wrapper: styles.comboboxStyles.wrapper,
      noResults: styles.comboboxStyles.noResults,
      list: styles.comboboxStyles.list,
      icon: styles.comboboxStyles.icon,
      leftIconWrapper: styles.comboboxStyles.leftIconWrapper,
      rightIconWrapper: styles.comboboxStyles.rightIconWrapper,
      group: styles.comboboxStyles.group,
      button: styles.comboboxOptionStyles.button,
      optionIcon: styles.comboboxOptionStyles.optionIcon,
      optionWrapper: styles.comboboxOptionStyles.optionWrapper,
      infoWrapper: styles.comboboxOptionStyles.infoWrapper,
      label: styles.comboboxOptionStyles.label,
      description: styles.comboboxOptionStyles.description,
    },
    Dropdown: {
      arrow: styles.dropdownStyles.arrow,
      base: styles.dropdownStyles.base,
      content: styles.dropdownStyles.content,
      divider: styles.dropdownStyles.divider,
      item: styles.dropdownStyles.item,
      label: styles.dropdownStyles.label,
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
    Modal: styles.modalStyles.base,
    Overlay: styles.overlayStyles.base,
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
    Selector: {
      base: styles.selectorStyles.base,
      separator: styles.selectorStyles.separator,
      tab: styles.selectorStyles.tab,
      wrapper: styles.selectorStyles.wrapper,
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
      wrapper: styles.tabStyles.wrapper,
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

export type ThemeContextType = {
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
});

export function useTheme(): Theme {
  return useContext(ThemeContext)?.theme || defaultTheme;
}

export function useComponentTheme<C extends keyof ThemeComponents>(component: C) {
  const theme = useTheme();

  return theme.components[component];
}
