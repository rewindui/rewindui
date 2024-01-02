import { Card, CardProps } from '@rewind-ui/core';
import * as React from 'react';

export const CardCode = (props: any) => {
  const { bordered, color, radius, shadow, size, withDivider } = props;

  const defaultProps = {
    bordered: true,
    color: 'white',
    radius: 'md',
    shadow: 'sm',
    size: 'base',
    withDivider: true,
  };

  const attributes = [
    bordered !== defaultProps.bordered ? `bordered={${bordered}}` : null,
    color !== defaultProps.color ? `color="${color}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    withDivider !== defaultProps.withDivider ? `withDivider={${withDivider}}` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Card } from '@rewind-ui/core';

function App() {
  return (
    <Card${attributes.join(' ')}>
      <Card.Header>Header</Card.Header>
      <Card.Body>...</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  );
}
`.trim();
};

export const CardExample = (props: CardProps) => {
  return (
    <Card {...props}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        Rewind UI is a React component library that provides a set of accessible, reusable and
        customizable components to help you build your next project. We have designed our components
        to be flexible and easy to use, so you can focus on what matters most: building great user
        experiences.
      </Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  );
};
