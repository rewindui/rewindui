import {
  Radio,
  RadioProps,
  RadioColor,
  RadioRadius,
  RadioSize,
  RadioTone,
} from '@rewindui/rewindui-core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { View, ViewGroup } from '../components/View';

const colors: RadioColor[] = ['blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'];
const radiuses: RadioRadius[] = ['none', 'sm', 'base', 'md', 'lg', 'full'];
const sizes: RadioSize[] = ['sm', 'md', 'lg', 'xl'];
const tones: RadioTone[] = ['solid', 'light'];

const label = 'I agree to the terms of service';
const description = 'By checking this box, you agree to the Terms of Service';
const error = 'You must agree to the Terms of Service';

const meta: Meta = {
  title: 'Components/Radio',
  component: Radio,
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

const DefaultTemplate: Story<RadioProps> = (args) => {
  return (
    <View prop="Default">
      <Radio {...args} label="Option A" name="configurator" />
      <Radio {...args} label="Option B" name="configurator" defaultChecked />
    </View>
  );
};

export const Default = DefaultTemplate.bind({});

const ColorTemplate: Story<RadioProps> = (args) => {
  const items = colors.map((color) => (
    <View prop="color" value={color} key={color}>
      <Radio name={'color'} label={label} color={color} defaultChecked={true} {...args} />
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const ToneTemplate: Story<RadioProps> = (args) => {
  const items = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map((color) => (
          <Radio
            key={color}
            name={'color'}
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

const SizeTemplate: Story<RadioProps> = (args) => {
  const items = sizes.map((size) => (
    <View prop="size" value={size} key={size}>
      <Radio label={label} size={size} defaultChecked={true} {...args} />
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<RadioProps> = (args) => {
  const items = radiuses.map((radius) => (
    <View prop="radius" value={radius} key={radius}>
      <Radio label={label} radius={radius} defaultChecked={true} {...args} />
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});
