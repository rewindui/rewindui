import { TabsCode, TabsExample } from '@/ui/configurators/components/Tabs.example';

export const TabsConfig = {
  example: TabsExample,
  default: TabsCode,
  state: {
    color: 'dark',
    fullWidth: false,
    method: 'hide',
    radius: 'none',
    size: 'md',
    tone: 'line',
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'selector',
      options: ['line', 'pill'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Size',
      name: 'size',
      type: 'selector',
      options: ['sm', 'md', 'lg'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'selector',
      options: ['none', 'sm', 'base', 'md', 'lg', 'full'],
    },
    {
      label: 'Full width',
      name: 'fullWidth',
      type: 'switch',
    },
  ],
};
