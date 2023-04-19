import {
  InputGroupCode,
  InputGroupExample,
} from '@/ui/configurators/components/InputGroup.example';

export const InputGroupConfig = {
  example: InputGroupExample,
  default: InputGroupCode,
  state: {
    radius: 'md',
    shadow: 'none',
    size: 'md',
    tone: 'light',
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light', 'transparent'],
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
