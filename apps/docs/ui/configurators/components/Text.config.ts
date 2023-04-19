import { TextCode, TextExample } from '@/ui/configurators/components/Text.example';

export const TextConfig = {
  example: TextExample,
  default: TextCode,
  state: {
    color: 'black',
    leading: 'normal',
    size: 'base',
    tracking: 'normal',
    weight: 'normal',
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
      type: 'select',
      options: [
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
    {
      label: 'Weight',
      name: 'weight',
      type: 'select',
      options: [
        'thin',
        'extraLight',
        'light',
        'normal',
        'medium',
        'semiBold',
        'bold',
        'extraBold',
        'black',
      ],
    },
    {
      label: 'Tracking',
      name: 'tracking',
      type: 'select',
      options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
    },
    {
      label: 'Leading',
      name: 'leading',
      type: 'select',
      options: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
    },
  ],
};
