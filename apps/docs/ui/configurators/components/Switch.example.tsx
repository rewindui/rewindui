import { Switch, SwitchProps } from '@rewind-ui/core';
import * as React from 'react';

export const SwitchCode = (props: any) => {
  const { size, color, disabled, description, error, radius, withRing } = props;

  const defaultProps = {
    color: 'dark',
    disabled: false,
    error: '',
    description: '',
    radius: 'full',
    size: 'md',
    withRing: true,
  };

  const attributes = [
    'label="Click me!"',
    color !== defaultProps.color ? `color="${color}"` : null,
    error !== defaultProps.error ? `error="${error}"` : null,
    description !== defaultProps.description ? `description="${description}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    disabled !== defaultProps.disabled ? `disabled={${disabled}}` : null,
    withRing !== defaultProps.withRing ? `withRing={${withRing}}` : null,
  ];

  return `import { Checkbox } from '@rewind-ui/core';

function App() {
  return (
    <Switch ${attributes.filter(Boolean).join(' ')} />
  );
}
`.trim();
};

export const SwitchExample = (props: SwitchProps) => {
  return <Switch label="Click me!" {...props} />;
};
