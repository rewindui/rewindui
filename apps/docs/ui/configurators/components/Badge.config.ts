import { BadgeCode, BadgeExample } from '@/ui/configurators/components/Badge.example';

export const BadgeConfig = {
  example: BadgeExample,
  default: BadgeCode,
  state: {
    color: 'purple',
    radius: 'md',
    shadow: 'none',
    shadowColor: 'none',
    size: 'sm',
    tone: 'solid',
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light', 'glossy', 'outline'],
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
  ],
};
