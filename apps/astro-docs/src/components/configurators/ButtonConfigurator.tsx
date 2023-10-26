import type { FC } from 'react';
import React, { useState } from 'react';
import { Button } from '@rewind-ui/core'
import type { ButtonProps } from '@rewind-ui/core'
import { Configurator } from '@components/configurators/Configurator.tsx'
import type { ConfiguratorOption } from '@components/configurators/Configurator.tsx'
import { useAttributes } from '@lib/use-attributes.hook.ts'

export const ButtonConfigurator: FC = () => {
  const defaultProps: ButtonProps = {
    animation: 'none',
    color: 'dark',
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
  const [state, setState] = useState<ButtonProps>({
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
  });

  const options: ConfiguratorOption[] = [
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light', 'outline', 'transparent'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Size',
      name: 'size',
      type: 'selector',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    {
      label: 'Shadow',
      name: 'shadow',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'xl'],
    },
    {
      label: 'Shadow Color',
      name: 'shadowColor',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'full'],
    },
    {
      label: 'Disabled',
      name: 'disabled',
      type: 'switch',
    },
    {
      label: 'Loading',
      name: 'loading',
      type: 'switch',
    },
    {
      label: 'With ring',
      name: 'withRing',
      type: 'switch',
    },
    {
      label: 'Animation',
      name: 'animation',
      type: 'selector',
      options: ['none', 'pulse', 'bounce'],
    },
  ];

  const attributes = useAttributes(state, defaultProps);
  const code = `import { Button } from '@rewind-ui/core';

function App() {
  return (
    <Button${attributes.join(' ')}>
      Click me!
    </Button>
  );
}
`.trim();

  const example = <Button {...state}>Click me!</Button>;

  return (
    <Configurator
      state={state}
      setState={setState}
      options={options}
      example={example}
      code={code} />
  );
};
