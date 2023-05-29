import { useTableContext } from '@components/Table/Table.context';
import { TrComponent, TrProps } from '@components/Table/Tr/Tr.types';
import { useMergeRefs } from '@floating-ui/react';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';

const defaultProps: Partial<TrProps> = {
  color: 'none',
};

const Tr: TrComponent = forwardRef<HTMLTableRowElement, TrProps>(
  (props: TrProps, ref: ForwardedRef<HTMLTableRowElement>) => {
    const { className, children, color, ...additionalProps } = {
      ...defaultProps,
      ...props,
    };
    const { borderStyle, verticalBorders, hoverable, striped, stripePosition } = useTableContext();
    const theme = useComponentTheme('Table');
    const localRef = useRef<HTMLTableRowElement | null>(null);
    const mergedRef = useMergeRefs([localRef, ref || null]);
    const id = usePropId(props.id);
    const [classes, setClasses] = useState<string>(
      theme.tr({ borderStyle, verticalBorders, className, color, hoverable, striped })
    );

    useEffect(() => {
      const tagName = localRef?.current?.parentElement?.tagName;

      setClasses(
        theme.tr({
          borderStyle,
          verticalBorders,
          className,
          color,
          hoverable: tagName === 'TBODY' && hoverable,
          striped: tagName === 'TBODY' && striped,
          stripePosition,
        })
      );
    }, [borderStyle, className, color, hoverable, striped, stripePosition, theme, verticalBorders]);

    return (
      <tr id={id} ref={mergedRef} className={classes} {...additionalProps}>
        {children}
      </tr>
    );
  }
);

Tr.displayName = 'Tr';

export { Tr };
