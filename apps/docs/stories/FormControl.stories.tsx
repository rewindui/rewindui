import {
  FormControl,
  FormControlProps,
  FormControlSize,
  FormControlTextValidation,
} from '@rewindui/rewindui-core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { At } from '@phosphor-icons/react';
import { EnhancedView, View, ViewGroup } from '../components/View';

const sizes: FormControlSize[] = ['xs', 'sm', 'md', 'lg'];
const validations: FormControlTextValidation[] = ['none', 'invalid', 'valid', 'warning'];

const meta: Meta = {
  title: 'Components/FormControl',
  component: FormControl,
  argTypes: {
    size: {
      options: sizes,
      control: { type: 'radio' },
    },
    validation: {
      options: validations,
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

const DefaultTemplate: Story<FormControlProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <FormControl {...args}>
        <FormControl.Label formControlId="input-id" required>
          Email address
        </FormControl.Label>
        <FormControl.Input
          id="input-id"
          shadow="sm"
          leftIcon={<At className="text-gray-500" />}
          type="email"
          placeholder="An email address"
          withRing
        ></FormControl.Input>
      </FormControl>
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const SizeTemplate: Story<FormControlProps> = (args) => {
  const items = sizes.map((size) => (
    <View key={size} prop="size" value={size}>
      <FormControl size={size} {...args}>
        <FormControl.Label formControlId="input-id" required>
          Email address
        </FormControl.Label>
        <FormControl.Text>Your email address should be a valid email</FormControl.Text>
        <FormControl.Input
          id="input-id"
          shadow="sm"
          leftIcon={<At className="text-gray-500" />}
          type="email"
          placeholder="An email address"
          withRing
        ></FormControl.Input>
        <FormControl.Text>This is just a hint</FormControl.Text>
      </FormControl>
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const ValidationTemplate: Story<FormControlProps> = (args) => {
  const items = validations.map((validation) => (
    <View key={validation} prop="validation" value={validation}>
      <FormControl {...args} validation={validation}>
        <FormControl.Label formControlId="input-id" required>
          Email address
        </FormControl.Label>
        <FormControl.Text validation="none">
          Your email address should be a valid email
        </FormControl.Text>
        <FormControl.Input
          id="input-id"
          shadow="sm"
          leftIcon={<At className="text-gray-500" />}
          type="email"
          placeholder="An email address"
          withRing
        ></FormControl.Input>
        <FormControl.Text>This is just a hint</FormControl.Text>
      </FormControl>
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Validation = ValidationTemplate.bind({});
