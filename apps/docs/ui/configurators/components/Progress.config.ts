import { ProgressCode, ProgressExample } from '@/ui/configurators/components/Progress.example';

export const ProgressConfig = {
  example: ProgressExample,
  default: ProgressCode,
  state: {
    animated: true,
    color: 'dark',
    radius: 'md',
    shadow: 'none',
    showValue: true,
    size: 'md',
    striped: true,
    value: 75,
    label: 'Uploading...',
    description: 'Filename: photo.png',
  },
  options: [
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
      options: ['none', 'sm', 'base', 'md'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'full'],
    },
    {
      label: 'Striped',
      name: 'striped',
      type: 'switch',
    },
    {
      label: 'Animated',
      name: 'animated',
      type: 'switch',
    },
    {
      label: 'Value',
      name: 'value',
      type: 'number',
    },
    {
      label: 'Show value',
      name: 'showValue',
      type: 'switch',
    },
    {
      label: 'Label',
      name: 'label',
      type: 'input',
    },
    {
      label: 'Description',
      name: 'description',
      type: 'input',
    },
  ],
};
