import {
  Alert,
  AlertAccent,
  AlertColor,
  AlertProps,
  AlertRadius,
  AlertShadow,
  AlertSize,
  AlertTone,
  AlertVariants,
  Button,
  Text,
} from '@rewindui/rewindui-core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';
import { WarningCircle } from '@phosphor-icons/react';

const variants: AlertVariants[] = [
  'primary',
  'secondary',
  'tertiary',
  'danger',
  'success',
  'warning',
  'info',
];

const colors: AlertColor[] = [
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
const tones: AlertTone[] = ['solid', 'light', 'outline'];
const sizes: AlertSize[] = ['xs', 'sm', 'md', 'lg'];
const radiuses: AlertRadius[] = ['none', 'sm', 'md', 'lg', 'full'];
const shadows: AlertShadow[] = ['none', 'sm', 'base', 'md', 'lg', 'xl'];
const accents: AlertAccent[] = ['none', 'top', 'right', 'bottom', 'left'];
const text =
  'Our website uses cookies to improve your experience. By continuing to use our website, you agree to our use of cookies.';

const meta: Meta = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    tone: {
      options: tones,
      control: { type: 'select' },
    },
    variant: {
      options: variants,
      control: { type: 'select' },
    },
    color: {
      options: colors,
      control: { type: 'select' },
    },
    accent: {
      options: accents,
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
    dismissable: {
      options: [true, false],
      control: { type: 'radio' },
    },
    dismissableAnimation: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: Story<AlertProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Alert {...args}>{text}</Alert>
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const VariantTemplate: Story<AlertProps> = (args) => {
  const items = variants.map((variant) => (
    <React.Fragment key={variant}>
      <View prop="variant" value={variant}>
        <Alert {...args} key={variant} variant={variant}>
          {text}
        </Alert>
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Variants = VariantTemplate.bind({});

const ColorTemplate: Story<AlertProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map((tone) => (
          <Alert {...args} key={tone} color={color} tone={tone} title={`Tone: ${tone}`}>
            {text}
          </Alert>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const ToneTemplate: Story<AlertProps> = (args) => {
  const items = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map((color) => (
          <Alert {...args} key={color} color={color} tone={tone} title={`Color: ${color}`}>
            {text}
          </Alert>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Tones = ToneTemplate.bind({});

const AccentTemplate: Story<AlertProps> = (args) => {
  const items = accents.map((accent) => (
    <React.Fragment key={accent}>
      <View prop="accent" value={accent}>
        {tones.map((tone) => (
          <Alert {...args} key={tone} accent={accent} tone={tone} title={`Tone: ${tone}`}>
            {text}
          </Alert>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Accents = AccentTemplate.bind({});

const SizeTemplate: Story<AlertProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map((tone) => (
          <Alert {...args} key={tone} size={size} tone={tone} title={`Tone: ${tone}`}>
            {text}
          </Alert>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<AlertProps> = (args) => {
  const items = radiuses.map((radius) => (
    <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        {tones.map((tone) => (
          <Alert {...args} key={tone} radius={radius} tone={tone}>
            {text}
          </Alert>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<AlertProps> = (args) => {
  const items = shadows.map((shadow) => (
    <React.Fragment key={shadow}>
      <View prop="shadow" value={shadow}>
        {tones.map((tone) => (
          <Alert {...args} key={tone} shadow={shadow} tone={tone}>
            {text}
          </Alert>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});

const ShadowColorTemplate: Story<AlertProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="shadowColor" value={color}>
        {shadows.map((shadow) => (
          <Alert
            {...args}
            key={shadow}
            shadowColor={color}
            color={color}
            shadow={shadow}
            title={`Shadow: ${shadow}`}
          >
            {text}
          </Alert>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const ShadowColors = ShadowColorTemplate.bind({});

const ExampleTemplate: Story<AlertProps> = (args) => {
  return (
    <ViewGroup>
      <EnhancedView prop="Informative Alert">
        <Alert
          {...args}
          title="Informative Alert"
          icon={<WarningCircle weight="duotone" className="w-10 h-10" />}
          tone="light"
          color="purple"
          className="border border-2 border-dashed border-purple-700"
        >
          This is a simple informative alert. It has a title, an icon, and some content.
        </Alert>
      </EnhancedView>

      <EnhancedView prop="Alert with custom JSX content">
        <Alert {...args} tone="light" color="red" size="lg" shadow="base" className="border">
          <div className="grid gap-y-3 justify-items-center text-red-600 w-full">
            <WarningCircle weight="duotone" className="w-16 h-16" />
            <Text variant="h3" className="text-red-600">
              Watch out!
            </Text>
            <div className="border-b border-b-2 border-dashed border-red-200 w-full" />
            <Text size="base" className="text-center text-red-600">
              Here is some custom JSX content. You can use any component you want here, including
              Buttons, Text, etc. Furthermore you can use any Tailwind CSS classes you want.
            </Text>

            <div className="flex gap-x-2">
              <Button tone="outline" color="red">
                Cancel
              </Button>

              <Button variant="danger">Confirm</Button>
            </div>
          </div>
        </Alert>
      </EnhancedView>
    </ViewGroup>
  );
};

export const Examples = ExampleTemplate.bind({});
