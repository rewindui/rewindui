import { useCardContext } from '@components/Card/Card.context';
import { CardHeaderComponent, CardHeaderProps } from '@components/Card/CardHeader/CardHeader.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';

export const CardHeader: CardHeaderComponent = forwardRef<HTMLDivElement, CardHeaderProps>(
  (props: CardHeaderProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Card');
    const { children, actions, className = '', ...additionalProps } = props;
    const { size, radius } = useCardContext();
    const id = usePropId(props.id);
    const classes = useMemo(() => {
      return theme.header({
        className,
        radius,
        size,
      });
    }, [theme, className, radius, size]);

    return (
      <div id={id} ref={ref} className={classes} {...additionalProps}>
        {children}
        {actions && <div className="flex">{actions}</div>}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';
