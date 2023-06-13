import {
  Card,
  Ribbon,
  RibbonColor,
  RibbonPosition,
  RibbonProps,
  RibbonRadius,
  RibbonShadow,
  RibbonSize,
  RibbonTone,
} from '@rewind-ui/core';
import { RibbonVariant } from '@rewind-ui/core/dist/components/Ribbon/Ribbon.types';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';
import { Star } from '@phosphor-icons/react';

const colors: RibbonColor[] = [
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
const tones: RibbonTone[] = ['solid', 'light', 'glossy'];
const radiuses: RibbonRadius[] = ['none', 'sm', 'base', 'md', 'lg'];
const shadows: RibbonShadow[] = ['none', 'sm', 'base', 'md', 'lg', 'xl'];
const sizes: RibbonSize[] = ['sm', 'md', 'lg'];
const positions: RibbonPosition[] = ['left', 'right', 'top-left', 'top-right'];
const variants: RibbonVariant[] = ['primary', 'secondary', 'danger', 'success', 'warning', 'info'];

const meta: Meta = {
  title: 'Components/Ribbon',
  component: Ribbon,
  argTypes: {
    tone: {
      options: tones,
      control: { type: 'select' },
    },
    color: {
      options: colors,
      control: { type: 'select' },
    },
    position: {
      options: positions,
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
    size: {
      options: sizes,
      control: { type: 'radio' },
    },
    variant: {
      options: variants,
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args: RibbonProps) => {
  const className = ['left', 'top-left'].includes(args.position) ? 'ml-auto' : 'mr-auto';

  return (
    <Card>
      <Card.Header className="relative">
        <Ribbon {...args}>Ribbon</Ribbon>
        <span className={className}>This is a header</span>
      </Card.Header>
      <Card.Body>This is the body of the card</Card.Body>
    </Card>
  );
};

const DefaultTemplate: Story<RibbonProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Template {...args} />
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const VariantTemplate: Story<RibbonProps> = (args) => {
  const items = variants.map((variant) => (
    <React.Fragment key={variant}>
      <View prop="variant" value={variant}>
        <Template {...args} key={variant} variant={variant} />
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Variants = VariantTemplate.bind({});

const ColorTemplate: Story<RibbonProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map((tone) => (
          <Template {...args} key={`${color}-${tone}`} color={color} tone={tone} />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const ToneTemplate: Story<RibbonProps> = (args) => {
  const items = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map((color) => (
          <Template {...args} key={`${tone}-${color}`} color={color} tone={tone} />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Tones = ToneTemplate.bind({});

const SizeTemplate: Story<RibbonProps> = (args) => {
  const items = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {sizes.map((size) => (
          <Template {...args} key={`${tone}-${size}`} size={size} tone={tone} />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<RibbonProps> = (args) => {
  const items = radiuses.map((radius) => (
    <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        {tones.map((tone) => (
          <Template {...args} key={`${tone}-${radius}`} radius={radius} tone={tone} />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<RibbonProps> = (args) => {
  const items = shadows.map((shadow) => (
    <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map((tone) => (
          <Template {...args} key={`${tone}-${shadow}`} shadow={shadow} tone={tone} />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});

const PositionTemplate: Story<RibbonProps> = (args) => {
  const items = positions.map((position) => (
    <React.Fragment key={position}>
      <View prop="position" value={position}>
        <Template {...args} key={position} position={position} />
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Positions = PositionTemplate.bind({});

const IconTemplate: Story<RibbonProps> = (args) => {
  return (
    <ViewGroup>
      <View prop="icon" value="true">
        <Card>
          <Card.Header className="relative">
            <Ribbon {...args}>
              <Star weight="duotone" />
            </Ribbon>
            <span>This is a header</span>
          </Card.Header>
          <Card.Body>This is the body of the card</Card.Body>
        </Card>
      </View>
    </ViewGroup>
  );
};

export const Icon = IconTemplate.bind({});
