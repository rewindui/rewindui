import { CardContext } from '@components/Card/Card.types';
import { createElementContext } from '@hooks/use-element-context.hook';

export const [CardContextProvider, useCardContext] = createElementContext<CardContext>(
  'Card compound components cannot be rendered outside the Card component'
);
