import {
  DropdownSize,
  DropdownRadius,
  DropdownPlacement,
  DropdownShadow,
  DropdownColor,
  DropdownMode,
  Dropdown,
  Button,
  DropdownProps,
  DropdownItemColor,
} from '@idb-dab/ui-core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';
import {
  ChatCircleText,
  Export,
  Gear,
  Images,
  MagnifyingGlass,
  SignOut,
  Trash,
  XCircle,
} from '@phosphor-icons/react';

const sizes: DropdownSize[] = ['xs', 'sm', 'md', 'lg'];
const radiuses: DropdownRadius[] = ['none', 'sm', 'base', 'md', 'lg'];
const shadows: DropdownShadow[] = ['none', 'sm', 'base', 'md'];
const placements: DropdownPlacement[] = [
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
const colors: DropdownColor[] = ['white', 'gray', 'slate', 'zinc'];
const modes: DropdownMode[] = ['spacey', 'tight'];
const itemColors: DropdownItemColor[] = [
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
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    color: {
      options: colors,
      control: { type: 'select' },
    },
    itemColor: {
      options: itemColors,
      control: { type: 'select' },
    },
    placement: {
      options: placements,
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
    mode: {
      options: modes,
      control: { type: 'select' },
    },
    trigger: {
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

const Template = (args: DropdownProps) => (
  <Dropdown
    initiallyOpen={true}
    withinPortal={true}
    withChevron={true}
    chevronRotation={true}
    outsidePress={false}
    {...args}
  >
    <Dropdown.Trigger>
      <Button size="md" color="purple" shadow="base" shadowColor="purple">
        Menu
      </Button>
    </Dropdown.Trigger>
    <Dropdown.Content>
      <Dropdown.Label>Application</Dropdown.Label>
      <Dropdown.Divider />
      <Dropdown.Item>
        <Gear size={20} weight="duotone" className="mr-1.5" />
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        <ChatCircleText size={20} weight="duotone" className="mr-1.5" />
        Messages
      </Dropdown.Item>
      <Dropdown.Item>
        <Images size={20} weight="duotone" className="mr-1.5" />
        Gallery
      </Dropdown.Item>
      <Dropdown.Item>
        <MagnifyingGlass size={20} weight="duotone" className="mr-1.5" />
        Search
      </Dropdown.Item>
      <Dropdown.Label>Danger Zone</Dropdown.Label>
      <Dropdown.Divider />
      <Dropdown.Item>
        <Export size={20} weight="duotone" className="mr-1.5" />
        Transfer my data
      </Dropdown.Item>
      <Dropdown.Item disabled>
        <Trash size={20} weight="duotone" className="mr-1.5" />
        Delete my account
      </Dropdown.Item>
      <Dropdown.Item>
        <XCircle size={20} weight="duotone" className="mr-1.5" />
        Close
      </Dropdown.Item>
      <Dropdown.Item>
        <SignOut size={20} weight="duotone" className="mr-1.5" />
        Logout
      </Dropdown.Item>
    </Dropdown.Content>
  </Dropdown>
);

const DefaultTemplate: Story<DropdownProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Template {...args} />
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const ModeTemplate: Story<DropdownProps> = (args) => {
  const items = modes.map((mode) => (
    <View key={mode} value={mode} prop="mode">
      <Template mode={mode} size="md" {...args} />
    </View>
  ));

  return <ViewGroup direction="row">{items}</ViewGroup>;
};

export const Modes = ModeTemplate.bind({});

const ColorTemplate: Story<DropdownProps> = (args) => {
  const items = colors.map((color) => (
    <View key={color} value={color} prop="color">
      <Template color={color} {...args} />
    </View>
  ));

  return <ViewGroup direction="row">{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const ItemColorTemplate: Story<DropdownProps> = (args) => {
  const items = itemColors.map((color) => (
    <View direction="row" key={color} value={color} prop="color">
      <Template itemColor={color} tone="solid" {...args} />
      <Template itemColor={color} tone="light" {...args} />
    </View>
  ));

  return <ViewGroup direction="column">{items}</ViewGroup>;
};

export const ItemColors = ItemColorTemplate.bind({});

const SizeTemplate: Story<DropdownProps> = (args) => {
  const items = sizes.map((size) => (
    <View key={size} value={size} prop="size">
      <Template size={size} {...args} />
    </View>
  ));

  return <ViewGroup direction="row">{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<DropdownProps> = (args) => {
  const items = radiuses.map((radius) => (
    <View key={radius} value={radius} prop="radius">
      <Template radius={radius} {...args} />
    </View>
  ));

  return <ViewGroup direction="row">{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<DropdownProps> = (args) => {
  const items = shadows.map((shadow) => (
    <View key={shadow} value={shadow} prop="shadow">
      <Template shadow={shadow} {...args} />
    </View>
  ));

  return <ViewGroup direction="row">{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});

const PlacementTemplate: Story<DropdownProps> = (args) => {
  const items = placements.map((placement) => (
    <View key={placement} value={placement} prop="placement">
      <Template placement={placement} {...args} />
    </View>
  ));

  return <ViewGroup direction="column">{items}</ViewGroup>;
};

export const Placements = PlacementTemplate.bind({});
