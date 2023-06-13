import { RibbonProps, Ribbon, Card, FormControl, Button } from '@rewind-ui/core';
import * as React from 'react';

export const RibbonCode = (props: any) => {
  const { color, position, radius, shadow, shadowColor, size, tone } = props;

  const defaultProps = {
    color: 'purple',
    position: 'top-right',
    radius: 'base',
    shadow: 'base',
    shadowColor: 'none',
    size: 'md',
    tone: 'solid',
  };

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    shadowColor !== defaultProps.shadowColor ? `shadowColor="${shadowColor}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    position !== defaultProps.position ? `position="${position}"` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Ribbon } from '@rewind-ui/core';

function App() {
  return (
    <Card>
      <Card.Header className="relative">
        <Ribbon${attributes.join(' ')}>Free trial</Ribbon>
        <span>Create new account</span>
      </Card.Header>
      <Card.Body>
        // ...
      </Card.Body>
    </Card>
  );
}
`.trim();
};

export const RibbonExample = (props: RibbonProps) => {
  const className =
    props.position === 'left' || props.position === 'top-left' ? 'ml-auto' : 'mr-auto';

  return (
    <Card size="base" withDivider={false}>
      <Card.Header className="relative">
        <Ribbon {...props}>Free trial</Ribbon>
        <div className={`${className} flex flex-col`}>
          <span className={`${className} text-lg leading-8 text-gray-700 font-semibold`}>
            Create new account
          </span>
          <span className="text-gray-500 font-normal">Start your 7-days trial period</span>
        </div>
      </Card.Header>
      <Card.Body className="min-w-[400px]">
        <div className="flex flex-col space-y-4">
          <FormControl>
            <FormControl.Label className="text-gray-700">Full name</FormControl.Label>
            <FormControl.Input shadow="sm" tone="solid" placeholder="Enter your full name..." />
          </FormControl>

          <FormControl>
            <FormControl.Label className="text-gray-700">Email address</FormControl.Label>
            <FormControl.Input
              shadow="sm"
              tone="solid"
              placeholder="Enter a valid email address..."
            />
          </FormControl>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button color="black" className="w-full">
          Continue
        </Button>
      </Card.Footer>
    </Card>
  );
};
