import {
  FormControlCode,
  FormControlExample,
} from '@/ui/configurators/components/FormControl.example';

export const FormControlConfig = {
  example: FormControlExample,
  default: FormControlCode,
  state: {
    size: 'md',
    validation: 'none',
  },
  options: [
    {
      label: 'Size',
      name: 'size',
      type: 'selector',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    {
      label: 'Validation',
      name: 'validation',
      type: 'selector',
      options: ['none', 'invalid', 'valid', 'warning'],
    },
  ],
};
