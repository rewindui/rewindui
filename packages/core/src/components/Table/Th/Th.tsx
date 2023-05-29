import { useTableContext } from '@components/Table/Table.context';
import { ThComponent, ThProps } from '@components/Table/Th/Th.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { ForwardedRef, forwardRef } from 'react';

const defaultProps: Partial<ThProps> = {};

const Th: ThComponent = forwardRef<HTMLTableHeaderCellElement, ThProps>(
  (props: ThProps, ref: ForwardedRef<HTMLTableHeaderCellElement>) => {
    const { className, children, ...additionalProps } = {
      ...defaultProps,
      ...props,
    };
    const theme = useComponentTheme('Table');
    const id = usePropId(props.id);
    const { size } = useTableContext();

    return (
      <th id={id} ref={ref} className={theme.th({ className, size })} {...additionalProps}>
        {children}
      </th>
    );
  }
);

Th.displayName = 'Th';

export { Th };
