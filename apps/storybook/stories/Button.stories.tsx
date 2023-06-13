import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { EnhancedView, View, ViewGroup } from '../components/View';
import {
  Button,
  ButtonVariant,
  ButtonColor,
  ButtonRadius,
  ButtonShadow,
  ButtonSize,
  ButtonTone,
  ButtonProps,
} from '@rewind-ui/core';

const variants: ButtonVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'link',
  'danger',
  'success',
  'warning',
  'info',
];

const colors: ButtonColor[] = [
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
const tones: ButtonTone[] = ['solid', 'light', 'outline', 'transparent'];
const sizes: ButtonSize[] = ['xs', 'sm', 'md', 'lg'];
const radiuses: ButtonRadius[] = ['none', 'sm', 'md', 'lg', 'full'];
const shadows: ButtonShadow[] = ['none', 'sm', 'base', 'md', 'lg', 'xl'];

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
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
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: Story<ButtonProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Button {...args}>Button</Button>
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const VariantTemplate: Story<ButtonProps> = (args) => {
  const items = variants.map((variant) => (
    <React.Fragment key={variant}>
      <View prop="variant" value={variant}>
        <Button {...args} key={variant} variant={variant} className="capitalize">
          {variant}
        </Button>
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Variants = VariantTemplate.bind({});

const ColorTemplate: Story<ButtonProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map((tone) => (
          <Button {...args} key={tone} color={color} tone={tone} className="capitalize">
            {tone}
          </Button>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const ToneTemplate: Story<ButtonProps> = (args) => {
  const items = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map((color) => (
          <Button {...args} key={color} color={color} tone={tone} className="capitalize">
            {color}
          </Button>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Tones = ToneTemplate.bind({});

const SizeTemplate: Story<ButtonProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map((tone) => (
          <Button {...args} key={tone} size={size} tone={tone} className="capitalize">
            Button
          </Button>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<ButtonProps> = (args) => {
  const items = radiuses.map((radius) => (
    <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        {tones.map((tone) => (
          <Button {...args} key={tone} radius={radius} tone={tone} className="capitalize">
            Button
          </Button>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<ButtonProps> = (args) => {
  const items = shadows.map((shadow) => (
    <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map((tone) => (
          <Button {...args} key={tone} shadow={shadow} tone={tone} className="capitalize">
            Button
          </Button>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});

const ShadowColorTemplate: Story<ButtonProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="shadowColor" value={color}>
        {shadows.map((shadow) => (
          <Button
            {...args}
            key={shadow}
            shadowColor={color}
            color={color}
            shadow={shadow}
            className="capitalize"
          >
            Button
          </Button>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const ShadowColors = ShadowColorTemplate.bind({});

const StatesTemplate: Story<ButtonProps> = (args) => {
  const disabledItems = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map((color) => (
          <Button {...args} key={color} color={color} tone={tone} className="capitalize" disabled>
            {color}
          </Button>
        ))}
      </View>
    </React.Fragment>
  ));

  const loadingItems = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map((color) => (
          <Button {...args} key={color} color={color} tone={tone} className="capitalize" loading>
            {color}
          </Button>
        ))}
      </View>
    </React.Fragment>
  ));

  return (
    <ViewGroup>
      <View prop="disabled" value={'true'}>
        {disabledItems}
      </View>
      <View prop="loading" value={'true'}>
        {loadingItems}
      </View>
    </ViewGroup>
  );
};

export const States = StatesTemplate.bind({});

const IconTemplate: Story<ButtonProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map((tone) => (
          <Button {...args} key={tone} color={color} tone={tone} className="capitalize" icon>
            <MagnifyingGlass className={'w-3.5 h-3.5'} />
          </Button>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Icons = IconTemplate.bind({});
