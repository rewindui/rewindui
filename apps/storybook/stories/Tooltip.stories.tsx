import {
  Button,
  Tooltip,
  TooltipColor,
  TooltipProps,
  TooltipRadius,
  TooltipShadow,
  TooltipSize,
} from '@rewind-ui/core';
import { TooltipPlacement } from '@rewind-ui/core/src/components/Tooltip/Tooltip.types';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';

const sizes: TooltipSize[] = ['xs', 'sm', 'md', 'lg'];
const radiuses: TooltipRadius[] = ['none', 'sm', 'md', 'lg', 'full'];
const colors: TooltipColor[] = [
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
const shadows: TooltipShadow[] = ['none', 'sm', 'base', 'md'];
const placements: TooltipPlacement[] = [
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
];

const meta: Meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
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

const DefaultTemplate: Story<TooltipProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Tooltip label="This is a Tooltip" initiallyOpen={true} withinPortal={true} {...args}>
        <Button>Trigger</Button>
      </Tooltip>
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const ColorTemplate: Story<TooltipProps> = (args) => {
  return (
    <ViewGroup>
      {colors.map((color) => (
        <View key={color} prop="color" value={color} justify="evenly">
          <Tooltip
            label="This is a Tooltip"
            accent="solid"
            color={color}
            initiallyOpen={true}
            {...args}
          >
            <Button color={color}>
              <span className={'capitalize'}>{color}</span>
            </Button>
          </Tooltip>

          <Tooltip
            label="This is a Tooltip"
            accent="light"
            color={color}
            initiallyOpen={true}
            {...args}
          >
            <Button color={color} tone="light">
              <span className={'capitalize'}>{color}</span>
            </Button>
          </Tooltip>
        </View>
      ))}
    </ViewGroup>
  );
};

export const Colors = ColorTemplate.bind({});

const SizeTemplate: Story<TooltipProps> = (args) => {
  return (
    <ViewGroup>
      {sizes.map((size) => (
        <View key={size} prop="size" value={size} justify="evenly">
          <Tooltip
            label="This is a Tooltip"
            accent="solid"
            size={size}
            initiallyOpen={true}
            {...args}
          >
            <Button size={size}>Trigger</Button>
          </Tooltip>
        </View>
      ))}
    </ViewGroup>
  );
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<TooltipProps> = (args) => {
  return (
    <ViewGroup>
      {radiuses.map((radius) => (
        <View key={radius} prop="radius" value={radius} justify="evenly">
          <Tooltip
            label="This is a Tooltip"
            accent="solid"
            radius={radius}
            initiallyOpen={true}
            {...args}
          >
            <Button>Trigger</Button>
          </Tooltip>
        </View>
      ))}
    </ViewGroup>
  );
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<TooltipProps> = (args) => {
  return (
    <ViewGroup>
      {shadows.map((shadow) => (
        <View key={shadow} prop="shadow" value={shadow} justify="evenly">
          <Tooltip
            label="This is a Tooltip"
            accent="solid"
            shadow={shadow}
            initiallyOpen={true}
            color="white"
            {...args}
          >
            <Button>Trigger</Button>
          </Tooltip>
        </View>
      ))}
    </ViewGroup>
  );
};

export const Shadows = ShadowTemplate.bind({});

const PlacementTemplate: Story<TooltipProps> = (args) => {
  return (
    <ViewGroup>
      {placements.map((placement) => (
        <View key={placement} prop="placement" value={placement} justify="evenly">
          <Tooltip
            label="This is a Tooltip"
            accent="solid"
            placement={placement}
            initiallyOpen={true}
            radius="none"
            {...args}
          >
            <Button size="lg">Trigger</Button>
          </Tooltip>
        </View>
      ))}
    </ViewGroup>
  );
};

export const Placements = PlacementTemplate.bind({});
