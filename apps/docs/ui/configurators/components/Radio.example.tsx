import { Radio, RadioGroup, RadioProps } from '@idb-dab/ui-core';
import * as React from 'react';

export const RadioCode = (props: any) => {
  const { size, color, disabled, description, error, tone, radius, withRing } = props;

  const defaultProps = {
    color: 'dark',
    disabled: false,
    error: '',
    description: '',
    radius: 'full',
    size: 'md',
    tone: 'solid',
    withRing: true,
  };

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    error !== defaultProps.error ? `error="${error}"` : null,
    description !== defaultProps.description ? `description="${description}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    disabled !== defaultProps.disabled ? `disabled={${disabled}}` : null,
    withRing !== defaultProps.withRing ? `withRing={${withRing}}` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Radio, RadioGroup } from '@idb-dab/ui-core';

function App() {
  return (
    <RadioGroup orientation="vertical" initialValue="1" name="example">
      <Radio label="Apple" value="1"${attributes.join(' ')} />
      <Radio label="Banana" value="2"${attributes.join(' ')} />
      <Radio label="Orange" value="3"${attributes.join(' ')} />
    </RadioGroup>
  );
}
`.trim();
};

export const RadioExample = (props: RadioProps) => {
  return (
    <RadioGroup orientation="vertical" initialValue="1" name="example">
      <Radio label="Apple" value="1" {...props} />
      <Radio label="Banana" value="2" {...props} />
      <Radio label="Orange" value="3" {...props} />
    </RadioGroup>
  );
};
