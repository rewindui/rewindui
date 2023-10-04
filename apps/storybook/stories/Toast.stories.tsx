import {
  Button,
  ToastContainer,
  Toast,
  useToast,
  ToastPosition,
  ToastColor,
  ToastTone,
  ButtonProps,
  ToastProps,
  ToastRadius,
  ToastShadow,
  ToastVariant,
  AlertProps,
  Alert,
} from '@idb-dab/ui-core';
import { useEffect } from 'react';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { View, ViewGroup } from '../components/View';

const positions: ToastPosition[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const colors: ToastColor[] = [
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
const tones: ToastTone[] = ['solid', 'light'];
const radiuses: ToastRadius[] = ['none', 'sm', 'base', 'md', 'lg'];
const shadows: ToastShadow[] = ['none', 'sm', 'base', 'md', 'lg', 'xl'];
const variants: ToastVariant[] = ['primary', 'secondary', 'danger', 'success', 'warning', 'info'];

const actions = [
  {
    label: 'Cancel',
    onClick: () => {
      console.log('Clicked close');
    },
    primary: false,
  },
  {
    label: 'Delete',
    onClick: () => {
      console.log('Clicked save');
    },
    primary: true,
  },
];

const meta: Meta = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    position: {
      options: positions,
      control: { type: 'select' },
    },
    max: {
      control: { type: 'number' },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

const DefaultTemplate: Story<any> = (args) => {
  const [counter, setCounter] = React.useState(0);
  const toast = useToast();

  useEffect(() => {
    if (!counter) {
      return;
    }
    toast.add({
      title: 'Are you sure?',
      description: 'Do you really want to delete the selected User?',
      iconType: 'question',
      id: counter.toString(),
      duration: 3000,
      color: 'green',
      actions,
    });
  }, [counter]);

  return (
    <View prop="Default">
      <ToastContainer {...args} />
      <Button onClick={() => setCounter((prev) => prev + 1)}>Add</Button>
      <Button onClick={() => toast.clear()}>Clear</Button>
    </View>
  );
};

export const Default = DefaultTemplate.bind({});

const VariantTemplate: Story<any> = (args) => {
  const items = variants.map((variant) => (
    <React.Fragment key={variant}>
      <View prop="variant" value={variant}>
        <Toast
          {...args}
          duration={3000}
          halted={true}
          title={variant}
          description="description"
          key={variant}
          variant={variant}
        />
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Variants = VariantTemplate.bind({});

const ColorTemplate: Story<any> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <ToastContainer {...args} />
      <View prop="color" value={color}>
        {tones.map((tone) => (
          <Toast
            {...args}
            duration={3000}
            halted={true}
            actions={actions}
            iconType="success"
            title="Title"
            description="description"
            key={tone}
            color={color}
            tone={tone}
          />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const RadiusTemplate: Story<any> = (args) => {
  const items = radiuses.map((radius) => (
    <React.Fragment key={radius}>
      <ToastContainer {...args} />
      <View prop="radius" value={radius}>
        <Toast
          {...args}
          duration={3000}
          halted={true}
          actions={actions}
          iconType="success"
          title="Title"
          description="description"
          key={radius}
          radius={radius}
        />
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<any> = (args) => {
  const items = shadows.map((shadow) => (
    <React.Fragment key={shadow}>
      <ToastContainer {...args} />
      <View prop="shadow" value={shadow}>
        {tones.map((tone) => (
          <Toast
            {...args}
            duration={3000}
            halted={true}
            actions={actions}
            iconType="success"
            title="Title"
            description="description"
            key={`${shadow}-${tone}`}
            tone={tone}
            shadow={shadow}
          />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});

const ShadowColorTemplate: Story<any> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <ToastContainer {...args} />
      <View prop="shadowColor" value={color}>
        {shadows.map((shadow) => (
          <Toast
            {...args}
            initialCount={3000}
            duration={3000}
            halted={true}
            actions={actions}
            iconType="success"
            title="Title"
            description="description"
            key={shadow}
            color={color}
            shadowColor={color}
            shadow={shadow}
          />
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const ShadowColors = ShadowColorTemplate.bind({});
