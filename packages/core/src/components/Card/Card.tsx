'use client';
import { CardComponent, CardContext, CardProps } from '@components/Card/Card.types';
import { CardBody } from '@components/Card/CardBody';
import { CardFooter } from '@components/Card/CardFooter';
import { CardHeader } from '@components/Card/CardHeader';
import { CardImage } from '@components/Card/CardImage';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { CardContextProvider } from './Card.context';

const defaultProps: Partial<CardProps> = {
  bordered: true,
  color: 'white',
  radius: 'md',
  shadow: 'sm',
  size: 'base',
  withDivider: true,
};

const CardRoot: CardComponent = forwardRef<HTMLDivElement, CardProps>(
  (props: CardProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Card');
    const {
      bordered,
      children,
      className = '',
      color,
      radius,
      shadow,
      size,
      withDivider,
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const id = usePropId(props.id);
    const contextValue: CardContext = {
      radius,
      size,
      withDivider,
    };

    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          bordered,
          className,
          color,
          radius,
          shadow,
          withDivider,
        })
      );
    }, [bordered, className, color, radius, shadow, withDivider, theme]);

    return (
      <CardContextProvider value={contextValue}>
        <div id={id} ref={ref} className={classes} {...additionalProps}>
          {children}
        </div>
      </CardContextProvider>
    );
  }
);

CardRoot.displayName = 'Card';

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Image: CardImage,
  Body: CardBody,
  Footer: CardFooter,
});

export default Card;
