import { TooltipCode, TooltipExample } from '@/ui/configurators/components/Tooltip.example';

export const TooltipConfig = {
  example: TooltipExample,
  default: TooltipCode,
  state: {
    color: 'dark',
    placement: 'top',
    radius: 'md',
    shadow: 'none',
    size: 'sm',
    tone: 'solid',
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
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
  ],
};
