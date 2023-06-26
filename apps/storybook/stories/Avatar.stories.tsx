import {
  Avatar,
  AvatarColor,
  AvatarProps,
  AvatarRadius,
  AvatarShadow,
  AvatarSize,
  AvatarTone,
  AvatarStatus,
  AvatarStatusPosition,
} from '@rewind-ui/core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';

const colors: AvatarColor[] = [
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
const tones: AvatarTone[] = ['solid', 'light', 'glossy', 'outline'];
const sizes: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
const radiuses: AvatarRadius[] = ['none', 'sm', 'md', 'lg', 'full'];
const shadows: AvatarShadow[] = ['none', 'sm', 'base', 'md', 'lg', 'xl'];
const statuses: AvatarStatus[] = ['none', 'online', 'offline', 'busy', 'away'];
const statusPositions: AvatarStatusPosition[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];
const src = 'https://avatars.githubusercontent.com/u/463230?v=4';

const group = [
  'https://avatars.githubusercontent.com/u/4800338?s=96&v=4',
  'https://avatars.githubusercontent.com/u/810438?s=96&v=4',
  'https://avatars.githubusercontent.com/u/3624098?s=96&v=4',
  'https://avatars.githubusercontent.com/u/1365881?s=96&v=4',
  'https://avatars.githubusercontent.com/u/4060187?s=60&v=4',
  'https://avatars.githubusercontent.com/u/6324199?s=60&v=4',
];

const meta: Meta = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    tone: {
      options: tones,
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
    status: {
      options: statuses,
      control: { type: 'select' },
    },
    statusPosition: {
      options: statusPositions,
      control: { type: 'select' },
    },
    outlined: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: Story<AvatarProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Avatar {...args} src={src} initials="ND" />
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const ColorTemplate: Story<AvatarProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map((tone) => (
          <Avatar {...args} key={tone} color={color} tone={tone} initials="ND" />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const ToneTemplate: Story<AvatarProps> = (args) => {
  const items = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map((color) => (
          <Avatar {...args} key={color} color={color} tone={tone} initials="ND" />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Tones = ToneTemplate.bind({});

const SizeTemplate: Story<AvatarProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map((tone) => (
          <Avatar {...args} key={tone} size={size} tone={tone} initials="ND" />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<AvatarProps> = (args) => {
  const items = radiuses.map((radius) => (
    <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        {tones.map((tone) => (
          <Avatar {...args} key={tone} radius={radius} tone={tone} initials="ND" />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<AvatarProps> = (args) => {
  const items = shadows.map((shadow) => (
    <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map((tone) => (
          <Avatar {...args} key={tone} shadow={shadow} tone={tone} initials="ND" />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});

const ShadowColorTemplate: Story<AvatarProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="shadowColor" value={color}>
        {shadows.map((shadow) => (
          <Avatar
            {...args}
            key={shadow}
            shadowColor={color}
            color={color}
            shadow={shadow}
            initials="ND"
          />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const ShadowColors = ShadowColorTemplate.bind({});

const StatusTemplate: Story<AvatarProps> = (args) => {
  const items = statuses.map((status) => (
    <React.Fragment key={status}>
      <View prop="status" value={status}>
        {colors.map((color) => {
          return tones.map((tone) => (
            <Avatar
              {...args}
              key={`${status}-${color}-${tone}`}
              status={status}
              color={color}
              tone={tone}
              initials="ND"
            />
          ));
        })}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Statuses = StatusTemplate.bind({});

const GroupTemplate: Story<AvatarProps> = (args) => {
  return (
    <ViewGroup>
      <View prop="">
        <Avatar.Group>
          {group.map((src, index) => (
            <Avatar key={index} {...args} src={src} initials="IN" />
          ))}
        </Avatar.Group>
      </View>
    </ViewGroup>
  );
};

export const Group = GroupTemplate.bind({});
