import { RibbonCode, RibbonExample } from '@/ui/configurators/components/Ribbon.example';

export const RibbonConfig = {
  example: RibbonExample,
  default: RibbonCode,
  state: {
    color: 'dark',
    radius: 'md',
    shadow: 'none',
    shadowColor: 'none',
    size: 'md',
    tone: 'solid',
    position: 'top-right',
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light', 'glossy'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Position',
      name: 'position',
      type: 'select',
      options: ['right', 'top-right', 'left', 'top-left'],
    },
    {
      label: 'Size',
      name: 'size',
      type: 'selector',
      options: ['sm', 'md', 'lg'],
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
      options: ['none', 'sm', 'base', 'md', 'lg'],
    },
  ],
};
