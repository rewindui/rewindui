import {
  Checkbox,
  CheckboxProps,
  CheckboxColor,
  CheckboxRadius,
  CheckboxSize,
  CheckboxTone,
} from '@idb-dab/ui-core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { View, ViewGroup } from '../components/View';

const colors: CheckboxColor[] = [
  'blue',
  'red',
  'green',
  'yellow',
  'purple',
  'gray',
  'dark',
  'black',
];
const radiuses: CheckboxRadius[] = ['none', 'sm', 'base', 'md', 'lg', 'full'];
const sizes: CheckboxSize[] = ['sm', 'md', 'lg', 'xl'];
const tones: CheckboxTone[] = ['solid', 'light'];

const label = 'I agree to the terms of service';
const description = 'By checking this box, you agree to the Terms of Service';
const error = 'You must agree to the Terms of Service';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    tone: {
      options: tones,
      control: { type: 'select' },
    },
    radius: {
      options: radiuses,
      control: { type: 'select' },
    },
    color: {
      options: colors,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
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

const DefaultTemplate: Story<CheckboxProps> = (args) => {
  return (
    <View prop="Default">
      <Checkbox label={label} description={description} error={error} {...args} />
    </View>
  );
};

export const Default = DefaultTemplate.bind({});

const ColorTemplate: Story<CheckboxProps> = (args) => {
  const items = colors.map((color) => (
    <View prop="color" value={color} key={color}>
      <Checkbox label={label} color={color} defaultChecked={true} {...args} />
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const ToneTemplate: Story<CheckboxProps> = (args) => {
  const items = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map((color) => (
          <Checkbox
            key={color}
            label={label}
            color={color}
            tone={tone}
            defaultChecked={false}
            {...args}
          />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Tones = ToneTemplate.bind({});

const SizeTemplate: Story<CheckboxProps> = (args) => {
  const items = sizes.map((size) => (
    <View prop="size" value={size} key={size}>
      <Checkbox label={label} size={size} defaultChecked={true} {...args} />
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<CheckboxProps> = (args) => {
  const items = radiuses.map((radius) => (
    <View prop="radius" value={radius} key={radius}>
      <Checkbox label={label} radius={radius} defaultChecked={true} {...args} />
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});
