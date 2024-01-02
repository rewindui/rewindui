import { TextareaCode, TextareaExample } from '@/ui/configurators/components/Textarea.example';

export const TextareaConfig = {
  example: TextareaExample,
  default: TextareaCode,
  state: {
    color: 'dark',
    disabled: false,
    placeholder: 'This is just a placeholder...',
    radius: 'lg',
    shadow: 'none',
    size: 'md',
    tone: 'light',
    validation: 'none',
    withRing: true,
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light', 'transparent'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['blue', 'purple', 'gray', 'dark', 'black'],
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
      options: ['none', 'sm', 'base', 'md', 'lg', 'xl'],
    },
    {
      label: 'Disabled',
      name: 'disabled',
      type: 'switch',
    },
    {
      label: 'With ring',
      name: 'withRing',
      type: 'switch',
    },
    {
      label: 'Validation',
      name: 'validation',
      type: 'selector',
      options: ['none', 'invalid', 'valid', 'warning'],
    },
    {
      label: 'Placeholder',
      name: 'placeholder',
      type: 'input',
      placeholder: 'Input placeholder...',
    },
  ],
};
