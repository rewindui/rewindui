import { Radio, RadioProps } from '@rewind-ui/core';
import * as React from 'react';

export const RadioCode = (props: any) => {
  const { size, color, disabled, description, error, tone, radius, withRing } = props;

  const defaultProps = {
    color: 'blue',
    disabled: false,
    error: '',
    description: '',
    radius: 'full',
    size: 'md',
    tone: 'solid',
    withRing: true,
  };

  const attributes = [
    'name="example"',
    color !== defaultProps.color ? `color="${color}"` : null,
    error !== defaultProps.error ? `error="${error}"` : null,
    description !== defaultProps.description ? `description="${description}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    disabled !== defaultProps.disabled ? `disabled={${disabled}}` : null,
    withRing !== defaultProps.withRing ? `withRing={${withRing}}` : null,
  ];

  return `import { Checkbox } from '@rewind-ui/core';

function App() {
  return (
    <>
      <Radio label="Option A" ${attributes.filter(Boolean).join(' ')} defaultChecked />
      <Radio label="Option B" ${attributes.filter(Boolean).join(' ')} />
      <Radio label="Option C" ${attributes.filter(Boolean).join(' ')} />
    </>
  );
}
`.trim();
};

export const RadioExample = (props: RadioProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <Radio label="Option A" name="example" {...props} defaultChecked />
      <Radio label="Option B" name="example" {...props} />
      <Radio label="Option C" name="example" {...props} />
    </div>
  );
};
