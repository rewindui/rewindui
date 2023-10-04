import { TableProps, Table } from '@idb-dab/ui-core';
import * as React from 'react';

export const TableCode = (props: any) => {
  const {
    borderStyle,
    footerBorders,
    headerBorders,
    headerColor,
    horizontalBorders,
    hoverable,
    outerBorders,
    radius,
    size,
    striped,
    stripePosition,
    verticalBorders,
  } = props;

  const defaultProps = {
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
  };

  const attributes = [
    borderStyle !== defaultProps.borderStyle ? `borderStyle="${borderStyle}"` : null,
    footerBorders !== defaultProps.footerBorders ? `footerBorders={${footerBorders}}` : null,
    headerBorders !== defaultProps.headerBorders ? `headerBorders={${headerBorders}}` : null,
    headerColor !== defaultProps.headerColor ? `headerColor="${headerColor}"` : null,
    horizontalBorders !== defaultProps.horizontalBorders
      ? `horizontalBorders={${horizontalBorders}}`
      : null,
    hoverable !== defaultProps.hoverable ? `hoverable={${hoverable}}` : null,
    outerBorders !== defaultProps.outerBorders ? `outerBorders={${outerBorders}}` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    striped !== defaultProps.striped ? `striped={${striped}}` : null,
    stripePosition !== defaultProps.stripePosition ? `stripePosition="${stripePosition}"` : null,
    verticalBorders !== defaultProps.verticalBorders
      ? `verticalBorders={${verticalBorders}}`
      : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Table } from '@idb-dab/ui-core';

function App() {
  return (
    <Table${attributes.join(' ')}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th align="left">First Name</Table.Th>
          <Table.Th align="left">Last Name</Table.Th>
          <Table.Th>Age</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>John</Table.Td>
          <Table.Td>Doe</Table.Td>
          <Table.Td align="center">32</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Jane</Table.Td>
          <Table.Td>Stan</Table.Td>
          <Table.Td align="center">28</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Chris</Table.Td>
          <Table.Td>Doe</Table.Td>
          <Table.Td align="center">3</Table.Td>
        </Table.Tr>
      </Table.Tbody>
      <Table.Tfoot>
        <Table.Tr>
          <Table.Th align="left">First Name</Table.Th>
          <Table.Th align="left">Last Name</Table.Th>
          <Table.Th>Age</Table.Th>
        </Table.Tr>
      </Table.Tfoot>
    </Table>
  );
}
`.trim();
};

export const TableExample = (props: TableProps) => {
  return (
    <Table {...props}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th align="left">First Name</Table.Th>
          <Table.Th align="left">Last Name</Table.Th>
          <Table.Th>Age</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>John</Table.Td>
          <Table.Td>Doe</Table.Td>
          <Table.Td align="center">32</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Jane</Table.Td>
          <Table.Td>Stan</Table.Td>
          <Table.Td align="center">28</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Chris</Table.Td>
          <Table.Td>Doe</Table.Td>
          <Table.Td align="center">3</Table.Td>
        </Table.Tr>
      </Table.Tbody>
      <Table.Tfoot>
        <Table.Tr>
          <Table.Th align="left">First Name</Table.Th>
          <Table.Th align="left">Last Name</Table.Th>
          <Table.Th>Age</Table.Th>
        </Table.Tr>
      </Table.Tfoot>
    </Table>
  );
};
