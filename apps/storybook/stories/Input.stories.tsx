import {
  Input,
  InputColor,
  InputProps,
  InputRadius,
  InputShadow,
  InputSize,
  InputTone,
  InputType,
  InputValidation,
} from '@rewind-ui/core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';
import { MagnifyingGlass, Rocket, RocketLaunch } from '@phosphor-icons/react';

const tones: InputTone[] = ['light', 'solid', 'transparent'];
const colors: InputColor[] = ['blue', 'purple', 'gray', 'dark', 'black'];
const sizes: InputSize[] = ['xs', 'sm', 'md', 'lg'];
const radiuses: InputRadius[] = ['none', 'sm', 'base', 'md', 'lg', 'full'];
const validations: InputValidation[] = ['none', 'invalid', 'valid', 'warning'];
const shadows: InputShadow[] = ['none', 'sm', 'base', 'md'];
const types: InputType[] = [
  'color',
  'datetime-local',
  'date',
  'email',
  'file',
  'number',
  'password',
  'range',
  'search',
  'text',
  'time',
];

const meta: Meta = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    tone: {
      options: tones,
      control: { type: 'radio' },
    },
    color: {
      options: colors,
      control: { type: 'radio' },
    },
    size: {
      options: sizes,
      control: { type: 'radio' },
    },
    radius: {
      options: radiuses,
      control: { type: 'radio' },
    },
    validation: {
      options: validations,
      control: { type: 'radio' },
    },
    shadow: {
      options: shadows,
      control: { type: 'radio' },
    },
    type: {
      options: types,
      control: { type: 'radio' },
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

const DefaultTemplate: Story<InputProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Input placeholder="This is a placeholder" {...args} />
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const ToneTemplate: Story<InputProps> = (args) => {
  const items = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        <Input {...args} tone={tone} placeholder={tone} />
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Tones = ToneTemplate.bind({});

const ColorTemplate: Story<InputProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="color" value={color}>
        <Input {...args} color={color} placeholder={color} />
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const SizeTemplate: Story<InputProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Input {...args} size={size} tone={tone} placeholder={tone} />
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<InputProps> = (args) => {
  const items = radiuses.map((radius) => (
    <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Input {...args} radius={radius} tone={tone} placeholder={tone} />
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<InputProps> = (args) => {
  const items = shadows.map((shadow) => (
    <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Input {...args} shadow={shadow} tone={tone} placeholder={tone} />
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});

const ValidationTemplate: Story<InputProps> = (args) => {
  const items = validations.map((validation) => (
    <React.Fragment key={validation}>
      <View prop="validation" value={validation}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Input {...args} validation={validation} tone={tone} placeholder={tone} />
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Validations = ValidationTemplate.bind({});

const IconTemplate: Story<InputProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Input
              {...args}
              size={size}
              tone={tone}
              placeholder={tone}
              leftIcon={<MagnifyingGlass />}
            />
            <Input
              {...args}
              size={size}
              tone={tone}
              placeholder={tone}
              rightIcon={<RocketLaunch />}
            />
            <Input
              {...args}
              size={size}
              tone={tone}
              placeholder={tone}
              leftIcon={<MagnifyingGlass />}
              rightIcon={<Rocket />}
            />
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Icons = IconTemplate.bind({});

const TypeTemplate: Story<InputProps> = (args) => {
  const items = types.map((type) => (
    <React.Fragment key={type}>
      <View prop="type" value={type}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Input {...args} type={type} tone={tone} placeholder={tone} />
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Types = TypeTemplate.bind({});

const FileTemplate: Story<InputProps> = (args) => {
  const items = sizes.map((size) => (
    <View prop="size" value={size} key={size}>
      {tones.map((tone) => (
        <React.Fragment key={tone}>
          <Input {...args} size={size} tone={tone} placeholder={tone} type="file" />
        </React.Fragment>
      ))}
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const File = FileTemplate.bind({});

const StateTemplate: Story<InputProps> = (args) => {
  const items = (
    <>
      <View prop="disabled" value="true">
        {tones.map((tone) => (
          <Input key={tone} {...args} tone={tone} placeholder={tone} disabled />
        ))}
      </View>

      <View prop="loading" value="true">
        {tones.map((tone) => (
          <Input key={tone} {...args} tone={tone} placeholder={tone} loading />
        ))}
      </View>
    </>
  );

  return <ViewGroup>{items}</ViewGroup>;
};

export const States = StateTemplate.bind({});
