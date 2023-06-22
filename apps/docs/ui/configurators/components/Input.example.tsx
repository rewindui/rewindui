import { Input, InputProps } from '@rewind-ui/core';
import * as React from 'react';

export const InputCode = (props: any) => {
  const { color, size, disabled, tone, shadow, radius, loading, validation, withRing } = props;

  const defaultProps = {
    color: 'dark',
    disabled: false,
    loading: false,
    radius: 'md',
    shadow: 'none',
    size: 'md',
    tone: 'light',
    validation: 'none',
    withRing: true,
  };

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    disabled !== defaultProps.disabled ? `disabled={${disabled}}` : null,
    loading !== defaultProps.loading ? `loading={${loading}}` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    validation !== defaultProps.validation ? `validation="${validation}"` : null,
    withRing !== defaultProps.withRing ? `withRing={${withRing}}` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Input } from '@rewind-ui/core';

function App() {
  return (
    <Input${attributes.join(' ')} />
  );
}
`.trim();
};

export const InputExample = (props: InputProps) => {
  return <Input {...props} />;
};
