import {
  Button,
  Overlay,
  OverlayBlur,
  OverlayColor,
  OverlayOpacity,
  OverlayProps,
} from '@rewindui/rewindui-core';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import * as React from 'react';
import { View } from '../components/View';

const blurs: OverlayBlur[] = ['none', 'sm', 'base', 'md', 'lg', 'xl'];
const colors: OverlayColor[] = ['white', 'gray', 'dark'];
const opacities: OverlayOpacity[] = ['25', '50', '75'];

const meta: Meta = {
  title: 'Components/Overlay',
  component: Overlay,
  argTypes: {
    color: {
      options: colors,
      control: { type: 'select' },
    },
    blur: {
      options: blurs,
      control: { type: 'select' },
    },
    opacity: {
      options: opacities,
      control: { type: 'select' },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: { expanded: true, sort: 'alpha' },
  },
};

export default meta;

const DefaultTemplate: Story<OverlayProps> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <View prop="Default">
      <Button onClick={() => setOpen(!open)}>Click me!</Button>
      {open && <Overlay onClose={() => setOpen(false)} closeOnClick={true} {...args} />}
    </View>
  );
};

export const Default = DefaultTemplate.bind({});
