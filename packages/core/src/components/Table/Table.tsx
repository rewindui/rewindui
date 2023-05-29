import { TableContextProvider } from '@components/Table/Table.context';
import { TableComponent, TableContext, TableProps } from '@components/Table/Table.types';
import { Tbody } from '@components/Table/Tbody/Tbody';
import { Td } from '@components/Table/Td/Td';
import { Tfoot } from '@components/Table/Tfoot/Tfoot';
import { Th } from '@components/Table/Th/Th';
import { Thead } from '@components/Table/Thead/Thead';
import { Tr } from '@components/Table/Tr/Tr';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { ForwardedRef, forwardRef } from 'react';

const defaultProps: Partial<TableProps> = {
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

const TableRoot: TableComponent = forwardRef<HTMLDivElement, TableProps>(
  (props: TableProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      borderStyle,
      children,
      className,
      color,
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
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const theme = useComponentTheme('Table');
    const id = usePropId(props.id);
    const contextValue: TableContext = {
      borderStyle,
      footerBorders,
      headerBorders,
      headerColor,
      horizontalBorders,
      hoverable,
      outerBorders,
      size,
      striped,
      stripePosition,
      verticalBorders,
    };

    return (
      <TableContextProvider value={contextValue}>
        <div
          id={id}
          ref={ref}
          className={theme.wrapper({ borderStyle, className, outerBorders, radius })}
          {...additionalProps}
        >
          <table className={theme.table({ radius, size })}>{children}</table>
        </div>
      </TableContextProvider>
    );
  }
);

TableRoot.displayName = 'Table';

const Table = Object.assign(TableRoot, {
  Thead: Thead,
  Tbody: Tbody,
  Tfoot: Tfoot,
  Tr: Tr,
  Th: Th,
  Td: Td,
});

export default Table;
