import { InputGroup, InputGroupProps } from '@rewind-ui/core';
import * as React from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

export const InputGroupCode = (props: any) => {
  const { size, tone, shadow, radius } = props;

  const defaultProps = {
    radius: 'md',
    shadow: 'none',
    size: 'md',
    tone: 'light',
  };

  const attributes = [
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { InputGroup } from '@rewind-ui/core';

function App() {
  return (
    <InputGroup${attributes.join(' ')}>
      <InputGroup.Text>
        <MagnifyingGlass weight="duotone" />
      </InputGroup.Text>
      <InputGroup.Input placeholder={'Search...'} type="search" />
    </InputGroup>
  );
}
`.trim();
};

export const InputGroupExample = (props: InputGroupProps) => {
  return (
    <InputGroup {...props}>
      <InputGroup.Text>
        <MagnifyingGlass weight="duotone" />
      </InputGroup.Text>
      <InputGroup.Input placeholder={'Search...'} type="search" />
    </InputGroup>
  );
};
