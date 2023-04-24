import { Button, ButtonProps, Tooltip, TooltipProps } from '@rewind-ui/core';
import * as React from 'react';

export const TooltipCode = (props: any) => {
  const { color, placement, radius, shadow, size, tone } = props;

  const defaultProps = {
    color: 'dark',
    placement: 'top',
    radius: 'md',
    shadow: 'none',
    size: 'sm',
    tone: 'solid',
  };

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    placement !== defaultProps.placement ? `placement="${placement}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Tooltip } from '@rewind-ui/core';

function App() {
  return (
    <Tooltip label="This is a Tooltip"${attributes.join(' ')}>
      <Button>Hover over me!</Button>
    </Tooltip>
  );
}
`.trim();
};

export const TooltipExample = (props: TooltipProps) => {
  return (
    <Tooltip label="This is a Tooltip" initiallyOpen={true} {...props}>
      <Button>Hover over me!</Button>
    </Tooltip>
  );
};
