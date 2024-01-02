import { CardCode, CardExample } from '@/ui/configurators/components/Card.example';

export const CardConfig = {
  example: CardExample,
  default: CardCode,
  state: {
    bordered: true,
    color: 'white',
    radius: 'md',
    shadow: 'sm',
    size: 'base',
    withDivider: true,
  },
  options: [
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'gray', 'zinc', 'slate'],
    },
    {
      label: 'Size',
      name: 'size',
      type: 'selector',
      options: ['sm', 'base', 'md', 'lg'],
    },
    {
      label: 'Shadow',
      name: 'shadow',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'xl'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg'],
    },
    {
      label: 'Bordered',
      name: 'bordered',
      type: 'switch',
    },
    {
      label: 'With divider',
      name: 'withDivider',
      type: 'switch',
    },
  ],
};
