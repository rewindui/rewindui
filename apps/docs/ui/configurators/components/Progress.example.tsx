import { Progress, ProgressProps } from '@rewind-ui/core';
import * as React from 'react';

export const ProgressCode = (props: any) => {
  const { animated, color, description, label, radius, shadow, showValue, size, striped, value } =
    props;

  const defaultProps = {
    animated: false,
    color: 'purple',
    radius: 'md',
    shadow: 'none',
    showValue: true,
    size: 'md',
    striped: false,
  };

  const attributes = [
    animated !== defaultProps.animated ? `animated={${animated}}` : null,
    color !== defaultProps.color ? `color="${color}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    showValue !== defaultProps.showValue ? `showValue={${showValue}}` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    `value="${value}"`,
    striped !== defaultProps.striped ? `striped={${striped}}` : null,
    label ? `label={${label}}` : null,
    description ? `description={${description}}` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Progress } from '@rewind-ui/core';

function App() {
  return (
    <Progress${attributes.join(' ')} />
  );
}
`.trim();
};

export const ProgressExample = (props: ProgressProps) => {
  return <Progress {...props} />;
};
