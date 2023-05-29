import { TableCode, TableExample } from '@/ui/configurators/components/Table.example';

export const TableConfig = {
  example: TableExample,
  default: TableCode,
  state: {
    borderStyle: 'solid',
    footerBorders: true,
    headerBorders: true,
    headerColor: 'gray',
    horizontalBorders: true,
    hoverable: true,
    outerBorders: true,
    radius: 'lg',
    size: 'md',
    striped: true,
    stripePosition: 'even',
    verticalBorders: false,
  },
  options: [
    {
      label: 'Header color',
      name: 'headerColor',
      type: 'select',
      options: ['white', 'gray', 'dark', 'black'],
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
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg'],
    },
    {
      label: 'Striped',
      name: 'striped',
      type: 'switch',
    },
    {
      label: 'Stripe position',
      name: 'stripePosition',
      type: 'selector',
      options: ['even', 'odd'],
    },
    {
      label: 'Hoverable',
      name: 'hoverable',
      type: 'switch',
    },
    {
      label: 'Border style',
      name: 'borderStyle',
      type: 'selector',
      options: ['solid', 'dashed'],
    },
    {
      label: 'Outer borders',
      name: 'outerBorders',
      type: 'switch',
    },
    {
      label: 'Header borders',
      name: 'headerBorders',
      type: 'switch',
    },
    {
      label: 'Footer borders',
      name: 'footerBorders',
      type: 'switch',
    },
    {
      label: 'Horizontal borders',
      name: 'horizontalBorders',
      type: 'switch',
    },
    {
      label: 'Vertical borders',
      name: 'verticalBorders',
      type: 'switch',
    },
  ],
};
