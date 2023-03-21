import {
  Textarea,
  TextareaProps,
  TextareaRadius,
  TextareaShadow,
  TextareaSize,
  TextareaTone,
  TextareaValidation,
} from '@rewindui/rewindui-core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';

const tones: TextareaTone[] = ['light', 'solid', 'transparent'];
const sizes: TextareaSize[] = ['xs', 'sm', 'md', 'lg'];
const radiuses: TextareaRadius[] = ['none', 'sm', 'base', 'md', 'lg'];
const validations: TextareaValidation[] = ['none', 'invalid', 'valid', 'warning'];
const shadows: TextareaShadow[] = ['none', 'sm', 'base', 'md'];

const meta: Meta = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    color: {
      options: tones,
      control: { type: 'radio' },
    },
    size: {
      options: sizes,
      control: { type: 'radio' },
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

const DefaultTemplate: Story<TextareaProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Textarea placeholder="This is a placeholder" {...args} />
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const ToneTemplate: Story<TextareaProps> = (args) => {
  const items = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        <Textarea {...args} tone={tone} placeholder={tone} />
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Tones = ToneTemplate.bind({});

const SizeTemplate: Story<TextareaProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Textarea {...args} size={size} tone={tone} placeholder={tone} />
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<TextareaProps> = (args) => {
  const items = radiuses.map((radius) => (
    <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Textarea {...args} radius={radius} tone={tone} placeholder={tone} />
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<TextareaProps> = (args) => {
  const items = shadows.map((shadow) => (
    <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Textarea {...args} shadow={shadow} tone={tone} placeholder={tone} />
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});

const ValidationTemplate: Story<TextareaProps> = (args) => {
  const items = validations.map((validation) => (
    <React.Fragment key={validation}>
      <View prop="validation" value={validation}>
        {tones.map((tone) => (
          <React.Fragment key={tone}>
            <Textarea {...args} validation={validation} tone={tone} placeholder={tone} />
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Validations = ValidationTemplate.bind({});

const StateTemplate: Story<TextareaProps> = (args) => {
  const items = (
    <View prop="disabled" value="true">
      {tones.map((tone) => (
        <Textarea key={tone} {...args} tone={tone} placeholder={tone} disabled />
      ))}
    </View>
  );

  return <ViewGroup>{items}</ViewGroup>;
};

export const States = StateTemplate.bind({});
