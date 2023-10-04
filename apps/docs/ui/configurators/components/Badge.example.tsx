import { BadgeProps, Badge } from '@idb-dab/ui-core';
import * as React from 'react';

export const BadgeCode = (props: any) => {
  const { color, radius, shadow, shadowColor, size, tone } = props;

  const defaultProps = {
    color: 'dark',
    radius: 'md',
    shadow: 'none',
    shadowColor: 'none',
    size: 'sm',
    tone: 'solid',
  };

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    shadowColor !== defaultProps.shadowColor ? `shadowColor="${shadowColor}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Badge } from '@idb-dab/ui-core';

function App() {
  return (
    <Badge${attributes.join(' ')}>Badge</Badge>
  );
}
`.trim();
};

export const BadgeExample = (props: BadgeProps) => {
  return <Badge {...props}>Badge</Badge>;
};
