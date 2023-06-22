import { ComboboxCode, ComboboxExample } from '@/ui/configurators/components/Combobox.example';

export const ComboboxConfig = {
  example: ComboboxExample,
  default: ComboboxCode,
  state: {
    clearable: true,
    closeOnEscape: true,
    color: 'dark',
    disabled: false,
    loading: false,
    mode: 'spacey',
    placeholder: 'Select a fruit...',
    radius: 'md',
    searchable: true,
    shadow: 'none',
    size: 'md',
    tone: 'light',
    validation: 'none',
    withRing: true,
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light', 'transparent'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['blue', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Mode',
      name: 'mode',
      type: 'selector',
      options: ['tight', 'spacey'],
    },
    {
      label: 'Size',
      name: 'size',
      type: 'selector',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    {
      label: 'Shadow',
      name: 'shadow',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg'],
    },
    {
      label: 'Clearable',
      name: 'clearable',
      type: 'switch',
    },
    {
      label: 'Close on escape',
      name: 'closeOnEscape',
      type: 'switch',
    },
    {
      label: 'Disabled',
      name: 'disabled',
      type: 'switch',
    },
    {
      label: 'Loading',
      name: 'loading',
      type: 'switch',
    },
    {
      label: 'With ring',
      name: 'withRing',
      type: 'switch',
    },
    {
      label: 'Validation',
      name: 'validation',
      type: 'selector',
      options: ['none', 'invalid', 'valid', 'warning'],
    },
    {
      label: 'Placeholder',
      name: 'placeholder',
      type: 'input',
      placeholder: 'Input placeholder...',
    },
  ],
};
