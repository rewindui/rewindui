import {
  Table,
  TableProps,
  TableRadius,
  TableSize,
  TableBorderStyle,
  TableHeaderColor,
} from '@rewind-ui/core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';

const headings = ['ID', 'Country', 'Code', 'City'];

const rows = [
  {
    id: 1,
    country: 'Portugal',
    code: 'PT',
    city: 'Foz do Arelho',
  },
  {
    id: 2,
    country: 'Brazil',
    code: 'BR',
    city: 'Cruz Alta',
  },
  {
    id: 3,
    country: 'Belarus',
    code: 'BY',
    city: 'Veyno',
  },
  {
    id: 4,
    country: 'China',
    code: 'CN',
    city: 'Shangjiangxu',
  },
  {
    id: 5,
    country: 'Sweden',
    code: 'SE',
    city: 'Örnsköldsvik',
  },
  {
    id: 6,
    country: 'Japan',
    code: 'JP',
    city: 'Shibetsu',
  },
  {
    id: 7,
    country: 'Norway',
    code: 'NO',
    city: 'Oslo',
  },
  {
    id: 8,
    country: 'United States',
    code: 'US',
    city: 'Los Angeles',
  },
  {
    id: 9,
    country: 'Ukraine',
    code: 'UA',
    city: 'Truskavets',
  },
  {
    id: 10,
    country: 'Netherlands',
    code: 'NL',
    city: 'Hellevoetsluis',
  },
];

const borderStyles: TableBorderStyle[] = ['solid', 'dashed'];
const headerColors: TableHeaderColor[] = ['white', 'gray', 'dark', 'black'];
const sizes: TableSize[] = ['sm', 'md', 'lg'];
const radiuses: TableRadius[] = ['none', 'sm', 'base', 'md', 'lg'];

const meta: Meta = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    borderStyle: {
      options: borderStyles,
      control: { type: 'radio' },
    },
    headerColor: {
      options: headerColors,
      control: { type: 'radio' },
    },
    size: {
      options: sizes,
      control: { type: 'radio' },
    },
    radius: {
      options: radiuses,
      control: { type: 'select' },
    },
    footerBorders: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    headerBorders: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    horizontalBorders: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    hoverable: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    outerBorders: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    striped: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    verticalBorders: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'gray', value: '#f8fafc' },
        { name: 'dark', value: '#334155' },
      ],
    },
    controls: { expanded: true, sort: 'alpha' },
  },
};

export default meta;

const Template = (args: TableProps) => (
  <Table {...args}>
    <Table.Thead>
      <Table.Tr>
        {headings.map((heading: string, index: number) => (
          <Table.Th key={heading} align={index === 0 ? 'center' : 'left'}>
            {heading}
          </Table.Th>
        ))}
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody>
      {rows.map((row) => (
        <Table.Tr key={row.id}>
          <Table.Td align="center">{row.id}</Table.Td>
          <Table.Td>{row.country}</Table.Td>
          <Table.Td>{row.code}</Table.Td>
          <Table.Td>{row.city}</Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
    <Table.Tfoot>
      <Table.Tr>
        {headings.map((heading: string, index: number) => (
          <Table.Td key={heading} align={index === 0 ? 'center' : 'left'}>
            {heading}
          </Table.Td>
        ))}
      </Table.Tr>
    </Table.Tfoot>
  </Table>
);

const DefaultTemplate: Story<TableProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Template {...args} />
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const SizeTemplate: Story<TableProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <View prop="size" value={size}>
        <Template {...args} size={size} />
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<TableProps> = (args) => {
  const items = radiuses.map((radius) => (
    <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        <Template {...args} radius={radius} />
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});
