import { Textarea, TextareaProps } from '@idb-dab/ui-core';
import * as React from 'react';

export const TextareaCode = (props: any) => {
  const { color, size, disabled, tone, shadow, radius, validation, withRing } = props;

  const defaultProps = {
    color: 'dark',
    tone: 'light',
    radius: 'md',
    size: 'md',
    validation: 'none',
    shadow: 'none',
    withRing: true,
    disabled: false,
  };

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    disabled !== defaultProps.disabled ? `disabled={${disabled}}` : null,
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

  return `import { Input } from '@idb-dab/ui-core';

function App() {
  return (
    <Textarea${attributes.join(' ')} />
  );
}
`.trim();
};

export const TextareaExample = (props: TextareaProps) => {
  return <Textarea {...props} />;
};
