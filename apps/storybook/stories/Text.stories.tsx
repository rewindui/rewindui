import {
  TextColor,
  TextLeading,
  TextProps,
  TextSize,
  TextTracking,
  TextWeight,
} from '@rewind-ui/core';
import { Text } from '@rewind-ui/core';
import { TextVariants } from '@rewind-ui/core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';

const shortSentence =
  'The cat lazily stretched out on the sun-soaked windowsill, basking in the warmth of the afternoon sun.';
const longText =
  'The sun slowly rose over the horizon, casting a warm glow across the peaceful meadow. The flowers swayed gently in the breeze, their sweet fragrance filling the air. A group of birds chirped happily in the distance, their melodies creating a beautiful symphony. In the distance, a lone figure could be seen walking along the path, lost in thought. As the morning continued, the world around them came to life, with animals scurrying about and the gentle hum of insects buzzing in the air. It was a perfect day, filled with promise and possibility.';

const colors: TextColor[] = [
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
const weights: TextWeight[] = [
  'thin',
  'extraLight',
  'light',
  'normal',
  'medium',
  'semiBold',
  'bold',
  'extraBold',
  'black',
];
const sizes: TextSize[] = [
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
];
const variants: TextVariants[] = ['d1', 'd2', 'd3', 'd4', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
const leadings: TextLeading[] = [
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'none',
  'tight',
  'snug',
  'normal',
  'relaxed',
  'loose',
];
const trackings: TextTracking[] = ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'];

const glossaries = {
  variants: {
    d1: 'Display 1',
    d2: 'Display 2',
    d3: 'Display 3',
    d4: 'Display 4',
    h1: 'Heading 1',
    h2: 'Heading 2',
    h3: 'Heading 3',
    h4: 'Heading 4',
    h5: 'Heading 5',
    h6: 'Heading 6',
    p: 'Paragraph',
  },
};

const meta: Meta = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    variant: {
      options: variants,
      control: { type: 'select' },
    },
    color: {
      options: colors,
      control: { type: 'select' },
    },
    weight: {
      options: weights,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    tracking: {
      options: trackings,
      control: { type: 'select' },
    },
    leading: {
      options: leadings,
      control: { type: 'select' },
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

const DefaultTemplate: Story<TextProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Text {...args}>{longText}</Text>
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const VariantTemplate: Story<TextProps> = (args) => {
  const items = variants.map((variant) => (
    <React.Fragment key={variant}>
      <View prop="variant" value={variant}>
        <Text {...args} variant={variant}>
          {glossaries.variants[variant]}
        </Text>
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Variants = VariantTemplate.bind({});

const ColorTemplate: Story<TextProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="color" value={color}>
        <Text {...args} color={color}>
          {shortSentence}
        </Text>
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const SizeTemplate: Story<TextProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <View prop="size" value={size}>
        <Text {...args} size={size}>
          {shortSentence}
        </Text>
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const WeightTemplate: Story<TextProps> = (args) => {
  const items = weights.map((weight) => (
    <React.Fragment key={weight}>
      <View prop="weight" value={weight}>
        <Text {...args} weight={weight}>
          {shortSentence}
        </Text>
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Weights = WeightTemplate.bind({});

const LeadingTemplate: Story<TextProps> = (args) => {
  const items = leadings.map((leading) => (
    <React.Fragment key={leading}>
      <View prop="leading" value={leading}>
        <Text {...args} leading={leading}>
          {longText}
        </Text>
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Leading = LeadingTemplate.bind({});

const TrackingTemplate: Story<TextProps> = (args) => {
  const items = trackings.map((tracking) => (
    <React.Fragment key={tracking}>
      <View prop="tracking" value={tracking}>
        <Text {...args} tracking={tracking}>
          {longText}
        </Text>
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Tracking = TrackingTemplate.bind({});

const ExampleTemplate: Story<TextProps> = (args) => {
  const classNames = ['underline decoration-2 decoration-sky-500'];

  const items = classNames.map((className) => (
    <React.Fragment key={className}>
      <EnhancedView prop="className" value={className}>
        <Text {...args} size="xl" className={className}>
          {shortSentence}
        </Text>
      </EnhancedView>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Examples = ExampleTemplate.bind({});
