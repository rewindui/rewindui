import { Button, ButtonProps, Popover, PopoverProps } from '@idb-dab/ui-core';
import * as React from 'react';

export const PopoverCode = (props: any) => {
  const { color, placement, radius, shadow, size } = props;

  const defaultProps = {
    color: 'white',
    placement: 'top',
    radius: 'md',
    shadow: 'none',
    size: 'sm',
  };

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    placement !== defaultProps.placement ? `placement="${placement}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Popover } from '@idb-dab/ui-core';

function App() {
  return (
    <Popover${attributes.join(' ')}>
      <Popover.Trigger>
        <Button>Hover over me!</Button>
      </Popover.Trigger>
      <Popover.Content>I am the popover content</Popover.Content>
    </Popover>
  );
}
`.trim();
};

export const PopoverExample = (props: PopoverProps) => {
  return (
    <Popover initiallyOpen={true} {...props}>
      <Popover.Trigger>
        <Button>Hover over me!</Button>
      </Popover.Trigger>
      <Popover.Content>I am the popover content</Popover.Content>
    </Popover>
  );
};
