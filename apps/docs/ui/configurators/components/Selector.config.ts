import { SelectorCode, SelectorExample } from '@/ui/configurators/components/Selector.example';

export const SelectorConfig = {
  example: SelectorExample,
  default: SelectorCode,
  state: {
    color: 'dark',
    fullWidth: false,
    orientation: 'horizontal',
    radius: 'lg',
    shadow: 'base',
    size: 'md',
    tone: 'solid',
    withAnimation: true,
    withSeparator: true,
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light'],
    },
    {
      label: 'Tab Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Orientation',
      name: 'orientation',
      type: 'select',
      options: ['horizontal', 'vertical'],
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
      options: ['none', 'sm', 'base', 'md'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'full'],
    },
    {
      label: 'Full width',
      name: 'fullWidth',
      type: 'switch',
    },
    {
      label: 'With animation',
      name: 'withAnimation',
      type: 'switch',
    },
    {
      label: 'With separator',
      name: 'withSeparator',
      type: 'switch',
    },
  ],
};
