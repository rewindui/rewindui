import { TextareaCode, TextareaExample } from '@/ui/configurators/components/Textarea.example';

export const TextareaConfig = {
  example: TextareaExample,
  default: TextareaCode,
  state: {
    disabled: false,
    placeholder: 'This is just a placeholder...',
    radius: 'md',
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
