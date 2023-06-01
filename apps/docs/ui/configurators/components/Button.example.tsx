import { Button, ButtonProps } from '@rewind-ui/core';
import * as React from 'react';

export const ButtonCode = (props: any) => {
  const { animation, size, color, disabled, tone, shadow, shadowColor, radius, loading, withRing } =
    props;

  const defaultProps = {
    animation: 'none',
    color: 'purple',
    disabled: false,
    icon: false,
    loading: false,
    radius: 'md',
    shadow: 'none',
    shadowColor: 'none',
    size: 'md',
    tone: 'solid',
    withRing: true,
  };

  const attributes = [
    animation !== defaultProps.animation ? `animation="${animation}"` : null,
    color !== defaultProps.color ? `color="${color}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    shadowColor !== defaultProps.shadowColor ? `shadowColor="${shadowColor}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    disabled !== defaultProps.disabled ? `disabled={${disabled}}` : null,
    loading !== defaultProps.loading ? `loading={${loading}}` : null,
    withRing !== defaultProps.withRing ? `withRing={${withRing}}` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Button } from '@rewind-ui/core';

function App() {
  return (
    <Button${attributes.join(' ')}>
      Click me!
    </Button>
  );
}
`.trim();
};

export const ButtonExample = (props: ButtonProps) => {
  return <Button {...props}>Click me!</Button>;
};
