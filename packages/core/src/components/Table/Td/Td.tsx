import { useTableContext } from '@components/Table/Table.context';
import { TdComponent, TdProps } from '@components/Table/Td/Td.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { ForwardedRef, forwardRef } from 'react';

const defaultProps: Partial<TdProps> = {};

const Td: TdComponent = forwardRef<HTMLTableCellElement, TdProps>(
  (props: TdProps, ref: ForwardedRef<HTMLTableCellElement>) => {
    const { className, children, ...additionalProps } = {
      ...defaultProps,
      ...props,
    };
    const theme = useComponentTheme('Table');
    const id = usePropId(props.id);
    const { size } = useTableContext();

    return (
      <td id={id} ref={ref} className={theme.td({ className, size })} {...additionalProps}>
        {children}
      </td>
    );
  }
);

Td.displayName = 'Td';

export { Td };
