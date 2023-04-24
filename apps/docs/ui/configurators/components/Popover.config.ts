import { PopoverCode, PopoverExample } from '@/ui/configurators/components/Popover.example';

export const PopoverConfig = {
  example: PopoverExample,
  default: PopoverCode,
  state: {
    color: 'white',
    placement: 'top',
    radius: 'md',
    shadow: 'none',
    size: 'sm',
  },
  options: [
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'gray', 'slate', 'zinc'],
    },
    {
      label: 'Placement',
      name: 'placement',
      type: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
    },
    {
      label: 'Size',
      name: 'size',
      type: 'select',
      options: ['tight', 'xs', 'sm', 'md', 'lg'],
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
  ],
};
