import {
  Badge,
  BadgeColor,
  BadgeProps,
  BadgeRadius,
  BadgeShadow,
  BadgeSize,
  BadgeTone,
  BadgeVariants,
} from '@rewind-ui/core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';

const variants: BadgeVariants[] = ['primary', 'secondary', 'danger', 'success', 'warning', 'info'];

const colors: BadgeColor[] = [
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
const tones: BadgeTone[] = ['solid', 'light', 'outline'];
const sizes: BadgeSize[] = ['xs', 'sm', 'md', 'lg'];
const radiuses: BadgeRadius[] = ['none', 'sm', 'md', 'lg', 'full'];
const shadows: BadgeShadow[] = ['none', 'sm', 'base', 'md', 'lg', 'xl'];

const meta: Meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    tone: {
      options: tones,
      control: { type: 'select' },
    },
    variant: {
      options: variants,
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
    radius: {
      options: radiuses,
      control: { type: 'select' },
    },
    shadow: {
      options: shadows,
      control: { type: 'select' },
    },
    shadowColor: {
      options: colors,
      control: { type: 'select' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: Story<BadgeProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Badge {...args}>Badge</Badge>
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const VariantTemplate: Story<BadgeProps> = (args) => {
  const items = variants.map((variant) => (
    <React.Fragment key={variant}>
      <View prop="variant" value={variant}>
        <Badge {...args} key={variant} variant={variant}>
          {variant}
        </Badge>
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Variants = VariantTemplate.bind({});

const ColorTemplate: Story<BadgeProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map((tone) => (
          <Badge {...args} key={tone} color={color} tone={tone}>
            {color}
          </Badge>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const ToneTemplate: Story<BadgeProps> = (args) => {
  const items = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map((color) => (
          <Badge {...args} key={color} color={color} tone={tone}>
            {color}
          </Badge>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Tones = ToneTemplate.bind({});

const SizeTemplate: Story<BadgeProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map((tone) => (
          <Badge {...args} key={tone} size={size} tone={tone}>
            New
          </Badge>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<BadgeProps> = (args) => {
  const items = radiuses.map((radius) => (
    <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        {tones.map((tone) => (
          <Badge {...args} key={tone} radius={radius} tone={tone}>
            {radius}
          </Badge>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<BadgeProps> = (args) => {
  const items = shadows.map((shadow) => (
    <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map((tone) => (
          <Badge {...args} key={tone} shadow={shadow} tone={tone}>
            {shadow}
          </Badge>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});

const ShadowColorTemplate: Story<BadgeProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="shadowColor" value={color}>
        {shadows.map((shadow) => (
          <Badge {...args} key={shadow} shadowColor={color} color={color} shadow={shadow}>
            {color}
          </Badge>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const ShadowColors = ShadowColorTemplate.bind({});
