import {
  BreadcrumbsCode,
  BreadcrumbsExample,
} from '@/ui/configurators/components/Breadcrumbs.example';

export const BreadcrumbsConfig = {
  example: BreadcrumbsExample,
  default: BreadcrumbsCode,
  state: {
    color: 'gray',
    size: 'md',
  },
  options: [
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['gray', 'zinc', 'slate'],
    },
    {
      label: 'Size',
      name: 'size',
      type: 'selector',
      options: ['sm', 'base', 'md', 'lg'],
    },
  ],
};
