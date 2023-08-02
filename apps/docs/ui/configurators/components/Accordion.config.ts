import { AccordionCode, AccordionExample } from '@/ui/configurators/components/Accordion.example';

export const AccordionConfig = {
  example: AccordionExample,
  default: AccordionCode,
  state: {
    tone: 'solid',
    size: 'md',
    radius: 'md',
    shadow: 'base',
    color: 'white',
    activeColor: 'purple',
    shadowColor: 'gray',
    bordered: false,
    withRing: true,
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'selector',
      options: ['solid', 'light'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'gray', 'zinc', 'slate'],
    },
    {
      label: 'Active Color',
      name: 'activeColor',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Size',
      name: 'size',
      type: 'selector',
      options: ['sm', 'md', 'lg', 'xl'],
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
      colors: ['none', 'gray', 'slate', 'zinc'],
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
      label: 'With ring',
      name: 'withRing',
      type: 'switch',
    },
  ],
};
