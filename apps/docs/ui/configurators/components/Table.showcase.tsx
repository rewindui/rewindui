import {
  Table,
  TableProps,
  TableRadius,
  TableSize,
  TableBorderStyle,
  TableHeaderColor,
  Badge,
  Dropdown,
  Button,
} from '@rewind-ui/core';
import { TableStripePosition } from '@rewind-ui/core/dist/components/Table/Table.types';
import { TrColor } from '@rewind-ui/core/dist/components/Table/Tr/Tr.types';
import * as React from 'react';
import { DotsThree, ChartLineUp, ChartLineDown } from '@phosphor-icons/react';

export type TableShowcaseProps = {
  showcase:
    | 'header-color'
    | 'size'
    | 'radius'
    | 'striped'
    | 'stripe-position'
    | 'hoverable'
    | 'border-style'
    | 'row-color'
    | 'outer-borders'
    | 'vertical-borders'
    | 'horizontal-borders'
    | 'header-borders'
    | 'footer-borders'
    | 'users-table'
    | 'products-table';
};

const borderStyles: TableBorderStyle[] = ['solid', 'dashed'];
const headerColors: TableHeaderColor[] = ['white', 'gray', 'dark', 'black'];
const colors: TrColor[] = [
  'white',
  'blue',
  'red',
  'green',
  'yellow',
  'purple',
  'gray',
  'dark',
  'black',
];
const sizes: TableSize[] = ['sm', 'md', 'lg'];
const radiuses: TableRadius[] = ['none', 'sm', 'base', 'md', 'lg'];
const boolean: boolean[] = [true, false];
const stripePositions: TableStripePosition[] = ['odd', 'even'];

const headings: { name: string; key: string; align: 'left' | 'center' }[] = [
  {
    name: 'First Name',
    key: 'first_name',
    align: 'left',
  },
  {
    name: 'Last Name',
    key: 'last_name',
    align: 'left',
  },
  {
    name: 'Age',
    key: 'age',
    align: 'center',
  },
];

const rows = [
  {
    first_name: 'John',
    last_name: 'Doe',
    age: 32,
    color: 'none',
  },
  {
    first_name: 'Jane',
    last_name: 'Stan',
    age: 28,
    color: 'none',
  },
  {
    first_name: 'Chris',
    last_name: 'Doe',
    age: 3,
    color: 'none',
  },
];

export const TableShowcase = (props: TableShowcaseProps) => {
  const { showcase } = props;

  const components = {
    'header-color': <HeaderColor />,
    size: <Size />,
    radius: <Radius />,
    striped: <Striped />,
    'stripe-position': <StripePosition />,
    hoverable: <Hoverable />,
    'border-style': <BorderStyle />,
    'row-color': <RowColor />,
    'outer-borders': <OuterBorders />,
    'vertical-borders': <VerticalBorders />,
    'horizontal-borders': <HorizontalBorders />,
    'header-borders': <HeaderBorders />,
    'footer-borders': <FooterBorders />,
    'users-table': <UsersTable />,
    'products-table': <ProductsTable />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const Template = (args: TableProps) => (
  <Table {...args}>
    <Table.Thead>
      <Table.Tr>
        {headings.map((heading) => (
          <Table.Th key={heading.key} align={heading.align}>
            {heading.name}
          </Table.Th>
        ))}
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody>
      {rows.map((row) => (
        <Table.Tr key={row.first_name}>
          <Table.Td>{row.first_name}</Table.Td>
          <Table.Td>{row.last_name}</Table.Td>
          <Table.Td align="center">{row.age}</Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
    <Table.Tfoot>
      <Table.Tr>
        {headings.map((heading) => (
          <Table.Th key={heading.key} align={heading.align}>
            {heading.name}
          </Table.Th>
        ))}
      </Table.Tr>
    </Table.Tfoot>
  </Table>
);

const HeaderColor = () => {
  const items = headerColors.map((headerColor: TableHeaderColor) => (
    <Template key={headerColor} headerColor={headerColor} />
  ));

  return <>{items}</>;
};

const Size = () => {
  const items = sizes.map((size: TableSize) => <Template key={size} size={size} />);

  return <>{items}</>;
};

const Radius = () => {
  const items = radiuses.map((radius: TableRadius) => <Template key={radius} radius={radius} />);

  return <>{items}</>;
};

const Striped = () => {
  const items = boolean.map((bool: boolean, index: number) => (
    <Template key={index} striped={bool} />
  ));

  return <>{items}</>;
};

const StripePosition = () => {
  const items = stripePositions.map((stripePosition: TableStripePosition) => (
    <Template key={stripePosition} striped={true} stripePosition={stripePosition} />
  ));

  return <>{items}</>;
};

const Hoverable = () => {
  const items = boolean.map((bool: boolean, index: number) => (
    <Template key={index} hoverable={bool} />
  ));

  return <>{items}</>;
};

const BorderStyle = () => {
  const items = borderStyles.map((borderStyle: TableBorderStyle) => (
    <Template
      key={borderStyle}
      borderStyle={borderStyle}
      stripePosition="odd"
      headerColor="white"
    />
  ));

  return <>{items}</>;
};

const RowColor = () => {
  const items = colors.map((color: TrColor) => (
    <Table key={color}>
      <Table.Thead>
        <Table.Tr>
          {headings.map((heading) => (
            <Table.Th key={heading.key} align={heading.align}>
              {heading.name}
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows.map((row, index: number) => (
          <Table.Tr key={row.first_name} color={index === 1 ? color : 'none'}>
            <Table.Td>{row.first_name}</Table.Td>
            <Table.Td>{row.last_name}</Table.Td>
            <Table.Td align="center">{row.age}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  ));

  return <>{items}</>;
};

const OuterBorders = () => {
  const items = boolean.map((bool: boolean, index: number) => (
    <Template key={index} outerBorders={bool} />
  ));

  return <>{items}</>;
};

const VerticalBorders = () => {
  const items = boolean.map((bool: boolean, index: number) => (
    <Template key={index} verticalBorders={bool} />
  ));

  return <>{items}</>;
};

const HorizontalBorders = () => {
  const items = boolean.map((bool: boolean, index: number) => (
    <Template key={index} horizontalBorders={bool} />
  ));

  return <>{items}</>;
};

const HeaderBorders = () => {
  const items = boolean.map((bool: boolean, index: number) => (
    <Template key={index} headerBorders={bool} />
  ));

  return <>{items}</>;
};

const FooterBorders = () => {
  const items = boolean.map((bool: boolean, index: number) => (
    <Template key={index} footerBorders={bool} />
  ));

  return <>{items}</>;
};

const UserCard = ({ initials, color = 'blue', name, email }) => {
  const colors = {
    red: 'bg-red-600',
    purple: 'bg-purple-600',
    gray: 'bg-gray-600',
  };

  return (
    <div className="flex space-x-3 p-2">
      <div
        className={`rounded-full w-12 h-12 flex items-center justify-center text-white ${colors[color]}`}
      >
        {initials}
      </div>
      <div className="flex flex-col space-y-1 text-sm">
        <div className="font-medium">{name}</div>
        <div className="text-gray-500">{email}</div>
      </div>
    </div>
  );
};

const UsersTable = () => (
  <Table radius="lg" striped={true} hoverable={true} headerColor="white" borderStyle="dashed">
    <Table.Thead>
      <Table.Tr>
        <Table.Th align="left">User</Table.Th>
        <Table.Th align="left">Role</Table.Th>
        <Table.Th align="left">Status</Table.Th>
        <Table.Th align="right">Actions</Table.Th>
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody>
      <Table.Tr>
        <Table.Td>
          <UserCard initials="JD" name="John Doe" email="john.doe@mail.com" color="purple" />
        </Table.Td>
        <Table.Td>
          <Badge color="purple" tone="light">
            Admin
          </Badge>
        </Table.Td>
        <Table.Td>
          <Badge color="green" tone="outline">
            <div className="w-1.5 h-1.5 bg-green-500 animate-pulse rounded-full mr-1.5" />
            Active
          </Badge>
        </Table.Td>
        <Table.Td align="right">
          <Dropdown
            itemColor="gray"
            tone="light"
            placement="bottom-end"
            shadow="sm"
            withChevron={false}
          >
            <Dropdown.Trigger>
              <Button color="white" tone="light" size="sm" shadow="sm" icon>
                <DotsThree size={18} />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Content className="min-w-[7rem]">
              <Dropdown.Item>View</Dropdown.Item>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item color="red">Delete</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          <UserCard initials="JS" name="Jane Stan" email="jane.stan@mail.com" color="red" />
        </Table.Td>
        <Table.Td>
          <Badge color="red" tone="light">
            Moderator
          </Badge>
        </Table.Td>
        <Table.Td>
          <Badge color="green" tone="outline">
            <div className="w-1.5 h-1.5 bg-green-500 animate-pulse rounded-full mr-1.5" />
            Active
          </Badge>
        </Table.Td>
        <Table.Td align="right">
          <Dropdown
            itemColor="gray"
            tone="light"
            placement="bottom-end"
            shadow="sm"
            withChevron={false}
          >
            <Dropdown.Trigger>
              <Button color="white" tone="light" size="sm" shadow="sm" icon>
                <DotsThree size={18} />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Content className="min-w-[7rem]">
              <Dropdown.Item>View</Dropdown.Item>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item color="red">Delete</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          <UserCard initials="CD" name="Chris Doe" email="chris.dow@mail.com" color="gray" />
        </Table.Td>
        <Table.Td>
          <Badge color="dark" tone="light">
            User
          </Badge>
        </Table.Td>
        <Table.Td>
          <Badge color="red" tone="outline">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5" />
            Inactive
          </Badge>
        </Table.Td>
        <Table.Td align="right">
          <Dropdown
            itemColor="gray"
            tone="light"
            placement="bottom-end"
            shadow="sm"
            withChevron={false}
          >
            <Dropdown.Trigger>
              <Button color="white" tone="light" size="sm" shadow="sm" icon>
                <DotsThree size={18} />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Content className="min-w-[7rem]">
              <Dropdown.Item>View</Dropdown.Item>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item color="red">Delete</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          <UserCard initials="JC" name="John Clark" email="john.clark@mail.com" color="gray" />
        </Table.Td>
        <Table.Td>
          <Badge color="dark" tone="light">
            User
          </Badge>
        </Table.Td>
        <Table.Td>
          <Badge color="green" tone="outline">
            <div className="w-1.5 h-1.5 bg-green-500 animate-pulse rounded-full mr-1.5" />
            Active
          </Badge>
        </Table.Td>
        <Table.Td align="right">
          <Dropdown
            itemColor="gray"
            tone="light"
            placement="bottom-end"
            shadow="sm"
            withChevron={false}
          >
            <Dropdown.Trigger>
              <Button color="white" tone="light" size="sm" shadow="sm" icon>
                <DotsThree size={18} />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Content className="min-w-[7rem]">
              <Dropdown.Item>View</Dropdown.Item>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item color="red">Delete</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </Table.Td>
      </Table.Tr>
    </Table.Tbody>
  </Table>
);

const ProductsTable = () => (
  <Table
    radius="base"
    striped={true}
    hoverable={true}
    horizontalBorders={false}
    outerBorders={false}
    headerColor="dark"
  >
    <Table.Thead>
      <Table.Tr>
        <Table.Th align="left">Product</Table.Th>
        <Table.Th align="left">Category</Table.Th>
        <Table.Th align="right">Price</Table.Th>
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody>
      <Table.Tr>
        <Table.Td>Google Pixel 7</Table.Td>
        <Table.Td>
          <Badge color="purple" tone="light">
            Mobile
          </Badge>
        </Table.Td>
        <Table.Td align="right">
          <Badge color="red" tone="outline">
            <ChartLineDown size={16} className="mr-1" weight="duotone" />
            $599.00
          </Badge>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>iPhone 12 Pro Max</Table.Td>
        <Table.Td>
          <Badge color="purple" tone="light">
            Mobile
          </Badge>
        </Table.Td>
        <Table.Td align="right">
          <Badge color="green" tone="outline">
            <ChartLineUp size={16} className="mr-1" weight="duotone" />
            $1,099.00
          </Badge>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Apple Studio Display</Table.Td>
        <Table.Td>
          <Badge color="red" tone="light">
            Monitors
          </Badge>
        </Table.Td>
        <Table.Td align="right">
          <Badge color="red" tone="outline">
            <ChartLineDown size={16} className="mr-1" weight="duotone" />
            $1,799.00
          </Badge>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Microsoft Surface Pro</Table.Td>
        <Table.Td>
          <Badge color="blue" tone="light">
            Laptop
          </Badge>
        </Table.Td>
        <Table.Td align="right">
          <Badge color="green" tone="outline">
            <ChartLineUp size={16} className="mr-1" weight="duotone" />
            $1,099.00
          </Badge>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Magic Keyboard</Table.Td>
        <Table.Td>
          <Badge color="green" tone="light">
            Accessories
          </Badge>
        </Table.Td>
        <Table.Td align="right">
          <Badge color="green" tone="outline">
            <ChartLineUp size={16} className="mr-1" weight="duotone" />
            $349.00
          </Badge>
        </Table.Td>
      </Table.Tr>
    </Table.Tbody>
  </Table>
);
