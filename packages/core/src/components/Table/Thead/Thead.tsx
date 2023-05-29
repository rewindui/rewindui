import { useTableContext } from '@components/Table/Table.context';
import { TheadComponent, TheadProps } from '@components/Table/Thead/Thead.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { ForwardedRef, forwardRef } from 'react';

const defaultProps: Partial<TheadProps> = {};

const Thead: TheadComponent = forwardRef<HTMLTableSectionElement, TheadProps>(
  (props: TheadProps, ref: ForwardedRef<HTMLTableSectionElement>) => {
    const { className, children, ...additionalProps } = {
      ...defaultProps,
      ...props,
    };
    const { borderStyle, headerBorders, headerColor, size } = useTableContext();
    const theme = useComponentTheme('Table');
    const id = usePropId(props.id);

    return (
      <thead
        id={id}
        ref={ref}
        className={theme.thead({ borderStyle, headerBorders, headerColor, size })}
        {...additionalProps}
      >
        {children}
      </thead>
    );
  }
);

Thead.displayName = 'Thead';

export { Thead };
