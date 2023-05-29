import { TableContext } from '@components/Table/Table.types';
import { createElementContext } from '@hooks/use-element-context.hook';

export const [TableContextProvider, useTableContext] = createElementContext<TableContext>(
  'Table compound components cannot be rendered outside the Table component'
);
