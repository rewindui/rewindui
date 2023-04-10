import {
  Button,
  Card,
  Popover,
  PopoverColor,
  PopoverPlacement,
  PopoverProps,
  PopoverRadius,
  PopoverShadow,
  PopoverSize,
} from '@rewind-ui/core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';

const sizes: PopoverSize[] = ['tight', 'xs', 'sm', 'md', 'lg'];
const radiuses: PopoverRadius[] = ['none', 'sm', 'md', 'lg', 'full'];
const shadows: PopoverShadow[] = ['none', 'sm', 'base', 'md'];
const placements: PopoverPlacement[] = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
];
const colors: PopoverColor[] = ['white', 'gray', 'slate', 'zinc'];

const meta: Meta = {
  title: 'Components/Popover',
  component: Popover,
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
    shadow: {
      options: shadows,
      control: { type: 'select' },
    },
    placement: {
      options: placements,
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

const DefaultTemplate: Story<PopoverProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Popover initiallyOpen={true} {...args}>
        <Popover.Trigger>
          <Button>I am the trigger</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const ColorTemplate: Story<PopoverProps> = (args) => {
  const items = colors.map((color) => (
    <View prop="color" value={color} key={color}>
      <Popover color={color} initiallyOpen={true} {...args}>
        <Popover.Content>This is a Popover</Popover.Content>
        <Popover.Trigger>
          <Button>Button</Button>
        </Popover.Trigger>
      </Popover>
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const SizeTemplate: Story<PopoverProps> = (args) => {
  const items = sizes.map((size) => (
    <View prop="size" value={size} key={size}>
      <Popover size={size} initiallyOpen={true} {...args}>
        <Popover.Content>This is a Popover</Popover.Content>
        <Popover.Trigger>
          <Button>Button</Button>
        </Popover.Trigger>
      </Popover>
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<PopoverProps> = (args) => {
  const items = radiuses.map((radius) => (
    <View prop="radius" value={radius} key={radius}>
      <Popover radius={radius} initiallyOpen={true} {...args}>
        <Popover.Content>This is a Popover</Popover.Content>
        <Popover.Trigger>
          <Button>Button</Button>
        </Popover.Trigger>
      </Popover>
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<PopoverProps> = (args) => {
  const items = shadows.map((shadow) => (
    <View prop="shadow" value={shadow} key={shadow}>
      <Popover shadow={shadow} initiallyOpen={true} {...args}>
        <Popover.Content>This is a Popover</Popover.Content>
        <Popover.Trigger>
          <Button>Button</Button>
        </Popover.Trigger>
      </Popover>
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});

const PlacementTemplate: Story<PopoverProps> = (args) => {
  const items = placements.map((placement) => (
    <View prop="placement" value={placement} key={placement}>
      <Popover placement={placement} initiallyOpen={true} {...args}>
        <Popover.Content>This is a Popover</Popover.Content>
        <Popover.Trigger>
          <Button>Button</Button>
        </Popover.Trigger>
      </Popover>
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Placements = PlacementTemplate.bind({});

const ExampleTemplate: Story<PopoverProps> = (args) => {
  return (
    <EnhancedView prop="Popover with a Card">
      <Popover
        size="tight"
        color="gray"
        placement="bottom-start"
        initiallyOpen={true}
        withinPortal={true}
        {...args}
      >
        <Popover.Trigger>
          <Button>I am the trigger</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Card shadow="none" size="sm" radius="md">
            <Card.Header className="bg-gray-50">This is a Card Header</Card.Header>
            <Card.Body>This is the body of the card</Card.Body>
            <Card.Footer className="bg-gray-50">And here is the footer</Card.Footer>
          </Card>
        </Popover.Content>
      </Popover>
    </EnhancedView>
  );
};

export const Examples = ExampleTemplate.bind({});
