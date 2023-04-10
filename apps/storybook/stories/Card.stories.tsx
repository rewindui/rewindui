import { Card, CardColor, CardProps, CardRadius, CardShadow, CardSize } from '@rewind-ui/core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';

const colors: CardColor[] = ['white', 'gray', 'zinc', 'slate'];
const shadows: CardShadow[] = ['none', 'sm', 'base', 'md', 'lg', 'xl'];
const radiuses: CardRadius[] = ['none', 'sm', 'base', 'md', 'lg'];
const sizes: CardSize[] = ['sm', 'base', 'md', 'lg'];
const headerText = 'Header';
const bodyText =
  "Rewind UI is a React component library that provides a set of accessible, reusable, and customizable components to help you build your next project. We've designed our components to be flexible and easy to use, so you can focus on what matters most: building great user experiences.";
const footerText = 'Footer';
const imgSrc =
  'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4140&q=80';

const meta: Meta = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    radius: {
      options: radiuses,
      control: { type: 'select' },
    },
    color: {
      options: colors,
      control: { type: 'select' },
    },
    shadow: {
      options: shadows,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    bordered: {
      control: { type: 'boolean' },
    },
    withDivider: {
      control: { type: 'boolean' },
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

const DefaultTemplate: Story<CardProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Card {...args}>
        <Card.Header>{headerText}</Card.Header>
        <Card.Body>{bodyText}</Card.Body>
        <Card.Footer>{footerText}</Card.Footer>
      </Card>
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const ColorTemplate: Story<CardProps> = (args) => {
  const items = colors.map((color) => (
    <View key={color} prop="color" value={color}>
      <Card {...args} color={color}>
        <Card.Header>{headerText}</Card.Header>
        <Card.Body>{bodyText}</Card.Body>
        <Card.Footer>{footerText}</Card.Footer>
      </Card>
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const SizeTemplate: Story<CardProps> = (args) => {
  const items = sizes.map((size) => (
    <View key={size} prop="size" value={size}>
      <Card {...args} size={size}>
        <Card.Header>{headerText}</Card.Header>
        <Card.Body>{bodyText}</Card.Body>
        <Card.Footer>{footerText}</Card.Footer>
      </Card>
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<CardProps> = (args) => {
  const items = radiuses.map((radius) => (
    <View key={radius} prop="radius" value={radius}>
      <Card {...args} radius={radius}>
        <Card.Header>{headerText}</Card.Header>
        <Card.Body>{bodyText}</Card.Body>
        <Card.Footer>{footerText}</Card.Footer>
      </Card>
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<CardProps> = (args) => {
  const items = shadows.map((shadow) => (
    <View key={shadow} prop="shadow" value={shadow}>
      <Card {...args} shadow={shadow}>
        <Card.Header>{headerText}</Card.Header>
        <Card.Body>{bodyText}</Card.Body>
        <Card.Footer>{footerText}</Card.Footer>
      </Card>
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});

const BorderedTemplate: Story<CardProps> = (args) => {
  return (
    <ViewGroup>
      <View prop="bordered" value="true">
        <Card {...args} bordered={true}>
          <Card.Header>{headerText}</Card.Header>
          <Card.Body>{bodyText}</Card.Body>
          <Card.Footer>{footerText}</Card.Footer>
        </Card>
      </View>

      <View prop="bordered" value="false">
        <Card {...args} bordered={false}>
          <Card.Header>{headerText}</Card.Header>
          <Card.Body>{bodyText}</Card.Body>
          <Card.Footer>{footerText}</Card.Footer>
        </Card>
      </View>
    </ViewGroup>
  );
};

export const Bordered = BorderedTemplate.bind({});

const DividedTemplate: Story<CardProps> = (args) => {
  return (
    <ViewGroup>
      <View prop="withDivider" value="true">
        <Card {...args} withDivider={true}>
          <Card.Header>{headerText}</Card.Header>
          <Card.Body>{bodyText}</Card.Body>
          <Card.Footer>{footerText}</Card.Footer>
        </Card>
      </View>

      <View prop="withDivider" value="false">
        <Card {...args} withDivider={false}>
          <Card.Header>{headerText}</Card.Header>
          <Card.Body>{bodyText}</Card.Body>
          <Card.Footer>{footerText}</Card.Footer>
        </Card>
      </View>
    </ViewGroup>
  );
};

export const Divided = DividedTemplate.bind({});

const ImageTemplate: Story<CardProps> = (args) => {
  return (
    <View prop="bordered" value="true">
      <Card {...args} bordered={true}>
        <Card.Image src={imgSrc} caption="This is a beautiful image" mode="dark"></Card.Image>
        <Card.Body>{bodyText}</Card.Body>
      </Card>
    </View>
  );
};

export const Image = ImageTemplate.bind({});
