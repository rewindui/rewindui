import { useCardContext } from '@components/Card/Card.context';
import { CardBodyComponent, CardBodyProps } from '@components/Card/CardBody/CardBody.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const CardBody: CardBodyComponent = forwardRef<HTMLDivElement, CardBodyProps>(
  (props: CardBodyProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Card');
    const { children, className = '', ...additionalProps } = props;
    const { size, withDivider } = useCardContext();
    const id = usePropId(props.id);
    const classes = useMemo(() => {
      return twMerge(
        theme.body({
          className,
          size,
          withDivider,
        })
      );
    }, [theme, className, size, withDivider]);

    return (
      <div id={id} ref={ref} className={classes} {...additionalProps}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

export { CardBody };
