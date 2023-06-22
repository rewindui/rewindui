import { ButtonCode, ButtonExample } from '@/ui/configurators/components/Button.example';

export const ButtonConfig = {
  example: ButtonExample,
  default: ButtonCode,
  state: {
    animation: 'none',
    color: 'dark',
    disabled: false,
    loading: false,
    icon: false,
    radius: 'md',
    shadow: 'base',
    shadowColor: 'none',
    size: 'md',
    tone: 'solid',
    withRing: true,
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light', 'outline', 'transparent'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
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
      options: ['none', 'sm', 'base', 'md', 'lg', 'xl'],
    },
    {
      label: 'Shadow Color',
      name: 'shadowColor',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'full'],
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
      label: 'Animation',
      name: 'animation',
      type: 'selector',
      options: ['none', 'pulse', 'bounce'],
    },
  ],
};
