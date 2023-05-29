import { useTableContext } from '@components/Table/Table.context';
import { TbodyComponent, TbodyProps } from '@components/Table/Tbody/Tbody.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { ForwardedRef, forwardRef } from 'react';

const defaultProps: Partial<TbodyProps> = {};

const Tbody: TbodyComponent = forwardRef<HTMLTableSectionElement, TbodyProps>(
  (props: TbodyProps, ref: ForwardedRef<HTMLTableSectionElement>) => {
    const { className, children, ...additionalProps } = {
      ...defaultProps,
      ...props,
    };
    const { borderStyle, horizontalBorders, size } = useTableContext();
    const theme = useComponentTheme('Table');
    const id = usePropId(props.id);

    return (
      <tbody
        id={id}
        ref={ref}
        className={theme.tbody({ borderStyle, horizontalBorders, size })}
        {...additionalProps}
      >
        {children}
      </tbody>
    );
  }
);

Tbody.displayName = 'Tbody';

export { Tbody };
