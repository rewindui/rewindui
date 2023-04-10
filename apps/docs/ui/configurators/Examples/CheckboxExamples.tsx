import { Checkbox, CheckboxProps } from '@rewind-ui/core';
import * as React from 'react';

export const CheckboxCode = (props: any) => {
  const { size, color, disabled, tone, radius, withRing } = props;

  const defaultProps = {
    color: 'blue',
    disabled: false,
    radius: 'md',
    size: 'md',
    tone: 'solid',
    withRing: true,
  };

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    disabled !== defaultProps.disabled ? `disabled={${disabled}}` : null,
    withRing !== defaultProps.withRing ? `withRing={${withRing}}` : null,
  ];

  return `import { Checkbox } from '@rewind-ui/core';

function App() {
  return (
    <Checkbox label="Click me!" ${attributes.filter(Boolean).join(' ')} />
  );
}
`.trim();
};

export const CheckboxExample = (props: CheckboxProps) => {
  return <Checkbox label="Click me!" {...props} />;
};
