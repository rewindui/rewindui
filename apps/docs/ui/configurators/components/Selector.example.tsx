import { Selector, SelectorProps } from '@idb-dab/ui-core';
import * as React from 'react';

export const SelectorCode = (props: any) => {
  const {
    color,
    size,
    fullWidth,
    orientation,
    tone,
    shadow,
    radius,
    withAnimation,
    withSeparator,
  } = props;

  const defaultProps = {
    color: 'dark',
    fullWidth: false,
    orientation: 'horizontal',
    radius: 'md',
    shadow: 'base',
    size: 'md',
    tone: 'solid',
    withAnimation: true,
    withSeparator: true,
  };

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    fullWidth !== defaultProps.fullWidth ? `fullWidth={${fullWidth}}` : null,
    orientation !== defaultProps.orientation ? `orientation="${orientation}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    withAnimation !== defaultProps.withAnimation ? `withAnimation={${withAnimation}}` : null,
    withSeparator !== defaultProps.withSeparator ? `withSeparator={${withSeparator}}` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Selector } from '@idb-dab/ui-core';

function App() {
  return (
     <Selector value="apple"${attributes.join(' ')}>
      <Selector.Tab anchor="apple" label="Apple" />
      <Selector.Tab anchor="orange" label="Orange" />
      <Selector.Tab anchor="banana" label="Banana" />
    </Selector>
  );
}
`.trim();
};

export const SelectorExample = (props: SelectorProps) => {
  return (
    <Selector {...props} value="apple">
      <Selector.Tab anchor="apple" label="Apple" />
      <Selector.Tab anchor="orange" label="Orange" />
      <Selector.Tab anchor="banana" label="Banana" />
    </Selector>
  );
};
