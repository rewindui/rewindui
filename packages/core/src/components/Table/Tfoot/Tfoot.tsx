import { useTableContext } from '@components/Table/Table.context';
import { TfootComponent, TfootProps } from '@components/Table/Tfoot/Tfoot.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { ForwardedRef, forwardRef } from 'react';

const defaultProps: Partial<TfootProps> = {};

const Tfoot: TfootComponent = forwardRef<HTMLTableSectionElement, TfootProps>(
  (props: TfootProps, ref: ForwardedRef<HTMLTableSectionElement>) => {
    const { className, children, ...additionalProps } = {
      ...defaultProps,
      ...props,
    };
    const { borderStyle, footerBorders, size } = useTableContext();
    const theme = useComponentTheme('Table');
    const id = usePropId(props.id);

    return (
      <tfoot
        id={id}
        ref={ref}
        className={theme.tfoot({ borderStyle, footerBorders, size })}
        {...additionalProps}
      >
        {children}
      </tfoot>
    );
  }
);

Tfoot.displayName = 'Tfoot';

export { Tfoot };
