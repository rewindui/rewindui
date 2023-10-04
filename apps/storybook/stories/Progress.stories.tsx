import {
  Progress,
  ProgressProps,
  ProgressRadius,
  ProgressShadow,
  ProgressSize,
} from '@idb-dab/ui-core';
import { ProgressColor } from '@idb-dab/ui-core/dist/components/Progress/Progress.types';
import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { EnhancedView, View, ViewGroup } from '../components/View';

const sizes: ProgressSize[] = ['xs', 'sm', 'md', 'lg'];
const radiuses: ProgressRadius[] = ['none', 'sm', 'base', 'md', 'lg', 'full'];
const shadows: ProgressShadow[] = ['none', 'sm', 'base', 'md'];
const colors: ProgressColor[] = [
  'white',
  'blue',
  'red',
  'green',
  'yellow',
  'purple',
  'gray',
  'dark',
  'black',
];

const meta: Meta = {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    color: {
      options: colors,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    shadow: {
      options: shadows,
      control: { type: 'select' },
    },
    showValue: {
      default: true,
      control: { type: 'boolean' },
    },
    striped: {
      default: true,
      control: { type: 'boolean' },
    },
    animated: {
      default: true,
      control: { type: 'boolean' },
    },
    as: {
      table: {
        disable: true,
      },
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

const DefaultTemplate: Story<ProgressProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Progress {...args} label="This is a long long label" value={75} />
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const ColorTemplate: Story<ProgressProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="color" value={color} direction="column">
        <Progress {...args} key={color} color={color} label={`Color: ${color}`} value={75} />
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const SizeTemplate: Story<ProgressProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <View prop="size" value={size} direction="column">
        <Progress {...args} key={size} size={size} label={`Size: ${size}`} value={75} />
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<ProgressProps> = (args) => {
  const items = radiuses.map((radius) => (
    <React.Fragment key={radius}>
      <View prop="radius" value={radius} direction="column">
        <Progress {...args} key={radius} radius={radius} label={`Radius: ${radius}`} value={75} />
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<ProgressProps> = (args) => {
  const items = shadows.map((shadow) => (
    <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow} direction="column">
        <Progress {...args} key={shadow} shadow={shadow} label={`Shadow: ${shadow}`} value={75} />
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});
