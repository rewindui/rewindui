import { Switch, SwitchProps, SwitchColor, SwitchRadius, SwitchSize } from '@idb-dab/ui-core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';

const colors: SwitchColor[] = ['blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'];
const sizes: SwitchSize[] = ['sm', 'md', 'lg', 'xl'];
const radiuses: SwitchRadius[] = ['none', 'sm', 'base', 'md', 'lg', 'full'];

const label = 'I agree to the terms of service';
const description = 'By checking this box, you agree to the Terms of Service';
const error = 'You must agree to the Terms of Service';

const meta: Meta = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    color: {
      options: colors,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    radius: {
      options: radiuses,
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

const DefaultTemplate: Story<SwitchProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Switch checked {...args} label={label} description={description} error={error} />
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const ColorTemplate: Story<SwitchProps> = (args) => {
  const items = colors.map((color) => (
    <View prop="color" value={color} key={color}>
      <Switch checked label={label} color={color} {...args} />
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const SizeTemplate: Story<SwitchProps> = (args) => {
  const items = sizes.map((size) => (
    <View prop="size" value={size} key={size}>
      <Switch checked label={label} size={size} {...args} />
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<SwitchProps> = (args) => {
  const items = radiuses.map((radius) => (
    <View prop="radius" value={radius} key={radius}>
      <Switch checked label={label} radius={radius} {...args} />
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});
