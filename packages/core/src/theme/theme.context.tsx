'use client';
import * as styles from './styles';
import { createContext, Provider, useContext } from 'react';

export type Theme = {
  components: ThemeComponents;
};

type ThemeComponents = {
  Accordion: typeof styles.accordionStyles;
  Alert: typeof styles.alertStyles;
  Avatar: typeof styles.avatarStyles;
  Badge: typeof styles.badgeStyles.base;
  Button: typeof styles.buttonStyles;
  Card: typeof styles.cardStyles;
  Checkbox: typeof styles.checkBoxStyles;
  Combobox: typeof styles.comboboxStyles;
  ComboboxOption: typeof styles.comboboxOptionStyles;
  Drawer: typeof styles.drawerStyles.base;
  Dropdown: typeof styles.dropdownStyles;
  FormControl: typeof styles.formControlStyles;
  Image: typeof styles.imageStyles;
  Input: typeof styles.inputStyles;
  InputGroup: typeof styles.inputGroupStyles;
  Modal: typeof styles.modalStyles.base;
  Overlay: typeof styles.overlayStyles.base;
  Popover: typeof styles.popoverStyles;
  Progress: typeof styles.progressStyles;
  Radio: typeof styles.radioStyles;
  Ribbon: typeof styles.ribbonStyles.base;
  Select: typeof styles.selectStyles;
  Selector: typeof styles.selectorStyles;
  Sidebar: typeof styles.sidebarStyles;
  Spinner: typeof styles.spinnerStyles.base;
  Switch: typeof styles.switchStyles;
  Table: typeof styles.tableStyles;
  Tabs: typeof styles.tabStyles;
  Text: typeof styles.textStyles.base;
  Textarea: typeof styles.textareaStyles.base;
  Tooltip: typeof styles.tooltipStyles;
  Toast: typeof styles.toastStyles;
};

const defaultTheme: Theme = {
  components: {
    Accordion: styles.accordionStyles,
    Alert: styles.alertStyles,
    Avatar: styles.avatarStyles,
    Badge: styles.badgeStyles.base,
    Button: styles.buttonStyles,
    Card: styles.cardStyles,
    Checkbox: styles.checkBoxStyles,
    Combobox: styles.comboboxStyles,
    ComboboxOption: styles.comboboxOptionStyles,
    Drawer: styles.drawerStyles.base,
    Dropdown: styles.dropdownStyles,
    Image: styles.imageStyles,
    FormControl: styles.formControlStyles,
    Input: styles.inputStyles,
    InputGroup: styles.inputGroupStyles,
    Modal: styles.modalStyles.base,
    Overlay: styles.overlayStyles.base,
    Popover: styles.popoverStyles,
    Progress: styles.progressStyles,
    Radio: styles.radioStyles,
    Ribbon: styles.ribbonStyles.base,
    Select: styles.selectStyles,
    Selector: styles.selectorStyles,
    Sidebar: styles.sidebarStyles,
    Spinner: styles.spinnerStyles.base,
    Switch: styles.switchStyles,
    Table: styles.tableStyles,
    Tabs: styles.tabStyles,
    Text: styles.textStyles.base,
    Textarea: styles.textareaStyles.base,
    Toast: styles.toastStyles,
    Tooltip: styles.tooltipStyles,
  },
};

export type ThemeContextType = {
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
});

export const ThemeProvider: Provider<ThemeContextType> = ThemeContext.Provider;

export function useTheme(): Theme {
  return useContext(ThemeContext)?.theme || defaultTheme;
}

export function useComponentTheme<C extends keyof ThemeComponents>(component: C) {
  const theme = useTheme();

  return theme.components[component];
}
