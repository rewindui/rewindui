import { Text, TextProps } from '@idb-dab/ui-core';
import * as React from 'react';

export const TextCode = (props: any) => {
  const { color, leading, size, tracking, weight } = props;

  const defaultProps = {
    color: 'dark',
    leading: 'normal',
    size: 'base',
    tracking: 'normal',
    weight: 'normal',
  };

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    leading !== defaultProps.leading ? `leading="${leading}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    tracking !== defaultProps.tracking ? `tracking="${tracking}"` : null,
    weight !== defaultProps.weight ? `weight="${weight}"` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Text } from '@idb-dab/ui-core';

function App() {
  return (
    <Text${attributes.join(' ')}>
      Hello world!
    </Text>
  );
}
`.trim();
};

export const TextExample = (props: TextProps) => {
  return (
    <Text {...props}>
      If you can force your heart and nerve and sinew; To serve your turn long after they are gone,
      And so hold on when there is nothing in you; Except the Will which says to them: ‘Hold on!’
    </Text>
  );
};
