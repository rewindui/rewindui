import {
  Select,
  SelectColor,
  SelectProps,
  SelectRadius,
  SelectShadow,
  SelectSize,
  SelectTone,
  SelectValidation,
} from '@rewind-ui/core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';
import { MagnifyingGlass } from '@phosphor-icons/react';

const tones: SelectTone[] = ['light', 'solid', 'transparent'];
const colors: SelectColor[] = ['blue', 'purple', 'gray', 'dark', 'black'];
const sizes: SelectSize[] = ['xs', 'sm', 'md', 'lg'];
const radiuses: SelectRadius[] = ['none', 'sm', 'base', 'md', 'lg', 'full'];
const validations: SelectValidation[] = ['none', 'invalid', 'valid', 'warning'];
const shadows: SelectShadow[] = ['none', 'sm', 'base', 'md'];

const options = (
  <>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </>
);

const meta: Meta = {
  title: 'Components/Select',
  component: Select,
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

const DefaultTemplate: Story<SelectProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Select placeholder="This is a placeholder" {...args}>
        {options}
      </Select>
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const ToneTemplate: Story<SelectProps> = (args) => {
  const items = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        <Select {...args} tone={tone} placeholder={tone}>
          {options}
        </Select>
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Tones = ToneTemplate.bind({});

const ColorTemplate: Story<SelectProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="color" value={color}>
        <Select {...args} color={color} placeholder={color}>
          {options}
        </Select>
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const SizeTemplate: Story<SelectProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Select {...args} size={size} tone={tone} placeholder={tone}>
              {options}
            </Select>
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<SelectProps> = (args) => {
  const items = radiuses.map((radius) => (
    <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Select {...args} radius={radius} tone={tone} placeholder={tone}>
              {options}
            </Select>
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<SelectProps> = (args) => {
  const items = shadows.map((shadow) => (
    <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Select {...args} shadow={shadow} tone={tone} placeholder={tone}>
              {options}
            </Select>
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});

const ValidationTemplate: Story<SelectProps> = (args) => {
  const items = validations.map((validation) => (
    <React.Fragment key={validation}>
      <View prop="validation" value={validation}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Select {...args} validation={validation} tone={tone} placeholder={tone}>
              {options}
            </Select>
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Validations = ValidationTemplate.bind({});

const IconTemplate: Story<SelectProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Select
              {...args}
              size={size}
              tone={tone}
              placeholder={tone}
              leftIcon={<MagnifyingGlass />}
            >
              {options}
            </Select>
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Icons = IconTemplate.bind({});

const StateTemplate: Story<SelectProps> = (args) => {
  const items = (
    <View prop="disabled" value="true">
      {tones.map((tone) => (
        <Select key={tone} {...args} tone={tone} placeholder={tone} disabled>
          {options}
        </Select>
      ))}
    </View>
  );

  return <ViewGroup>{items}</ViewGroup>;
};

export const States = StateTemplate.bind({});
