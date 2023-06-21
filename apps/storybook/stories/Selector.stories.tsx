import {
  Selector,
  SelectorProps,
  SelectorRadius,
  SelectorShadow,
  SelectorSize,
  SelectorTabProps,
  SelectorTone,
  Tooltip,
} from '@rewind-ui/core';
import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { EnhancedView, View, ViewGroup } from '../components/View';

const sizes: SelectorSize[] = ['xs', 'sm', 'md', 'lg'];
const tones: SelectorTone[] = ['solid', 'light'];
const radiuses: SelectorRadius[] = ['none', 'sm', 'base', 'md', 'lg', 'full'];
const shadows: SelectorShadow[] = ['none', 'sm', 'base', 'md', 'lg', 'xl'];
const animations: boolean[] = [true, false];
const separators: boolean[] = [true, false];

const meta: Meta = {
  title: 'Components/Selector',
  component: Selector,
  argTypes: {
    color: {
      options: tones,
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
    withAnimation: {
      options: animations,
      control: { type: 'boolean' },
    },
    withSeparator: {
      options: separators,
      control: { type: 'boolean' },
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

const simpleOptions: SelectorTabProps[] = [
  {
    label: 'White',
    anchor: 'a',
    color: 'white',
  },
  {
    label: 'Blue',
    anchor: 'b',
    color: 'blue',
  },
  {
    label: 'Red',
    anchor: 'c',
    color: 'red',
  },
  {
    label: 'Green',
    anchor: 'd',
    color: 'green',
  },
];

const options: SelectorTabProps[] = [
  {
    label: 'White',
    anchor: 'a',
    color: 'white',
  },
  {
    label: 'Blue',
    anchor: 'b',
    color: 'blue',
  },
  {
    label: 'Red',
    anchor: 'c',
    color: 'red',
  },
  {
    label: 'Green',
    anchor: 'd',
    color: 'green',
  },
  {
    label: 'Yellow',
    anchor: 'e',
    color: 'yellow',
  },
  {
    label: 'Purple',
    anchor: 'f',
    color: 'purple',
  },
  {
    label: 'Gray',
    anchor: 'g',
    color: 'gray',
  },
  {
    label: 'Dark',
    anchor: 'h',
    color: 'dark',
  },
  {
    label: 'Black',
    anchor: 'i',
    color: 'black',
  },
  {
    label: 'Disabled',
    anchor: 'j',
    color: 'black',
    disabled: true,
  },
  {
    label: (
      <Tooltip
        label="This is a react node with a tooltip"
        accent="solid"
        color="dark"
        offset={15}
        shadow="base"
      >
        <span className="whitespace-nowrap underline underline-offset-2 decoration-2 decoration-pink-500">
          React Node
        </span>
      </Tooltip>
    ),
    anchor: 'k',
    color: 'white',
  },
];

function generateRandomLetter(options: SelectorTabProps[]) {
  const alphabet = options
    .filter((el) => !el.disabled)
    .map((option) => option.anchor)
    .join('');

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

const DefaultTemplate: Story<SelectorProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Selector {...args} value={generateRandomLetter(simpleOptions)}>
        {simpleOptions.map((option) => (
          <Selector.Tab
            key={option.anchor}
            anchor={option.anchor}
            label={option.label}
            color={option.color}
            disabled={option.disabled}
          ></Selector.Tab>
        ))}
      </Selector>
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const SizeTemplate: Story<SelectorProps> = (args) => {
  return (
    <ViewGroup>
      {sizes.map((size) => (
        <View key={size} prop="size" value={size}>
          <Selector {...args} key={size} size={size} value={generateRandomLetter(options)}>
            {options.map((option) => (
              <Selector.Tab
                key={size + option.anchor}
                anchor={option.anchor}
                label={option.label}
                color={option.color}
                disabled={option.disabled}
              ></Selector.Tab>
            ))}
          </Selector>
        </View>
      ))}
    </ViewGroup>
  );
};

export const Sizes = SizeTemplate.bind({});

const ToneTemplate: Story<SelectorProps> = (args) => {
  const value = generateRandomLetter(options);

  return (
    <ViewGroup>
      {tones.map((tone) => (
        <View key={tone} prop="tone" value={tone}>
          <Selector {...args} key={tone} tone={tone} value={value}>
            {options.map((option) => (
              <Selector.Tab
                key={tone + option.anchor}
                anchor={option.anchor}
                label={option.label}
                color={option.color}
                disabled={option.disabled}
              ></Selector.Tab>
            ))}
          </Selector>
        </View>
      ))}
    </ViewGroup>
  );
};

export const Tones = ToneTemplate.bind({});

const RadiusTemplate: Story<SelectorProps> = (args) => {
  const value = generateRandomLetter(options);

  return (
    <ViewGroup>
      {radiuses.map((radius) => (
        <View key={radius} prop="radius" value={radius}>
          <Selector {...args} key={radius} radius={radius} value={value}>
            {options.map((option) => (
              <Selector.Tab
                key={radius + option.anchor}
                anchor={option.anchor}
                label={option.label}
                color={option.color}
                disabled={option.disabled}
              ></Selector.Tab>
            ))}
          </Selector>
        </View>
      ))}
    </ViewGroup>
  );
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<SelectorProps> = (args) => {
  return (
    <ViewGroup>
      {shadows.map((shadow) => (
        <View key={shadow} prop="shadow" value={shadow}>
          <Selector {...args} key={shadow} shadow={shadow} value={generateRandomLetter(options)}>
            {options.map((option) => (
              <Selector.Tab
                key={shadow + option.anchor}
                anchor={option.anchor}
                label={option.label}
                color={option.color}
                disabled={option.disabled}
              ></Selector.Tab>
            ))}
          </Selector>
        </View>
      ))}
    </ViewGroup>
  );
};

export const Shadows = ShadowTemplate.bind({});

const AnimationTemplate: Story<SelectorProps> = (args) => {
  return (
    <ViewGroup>
      {animations.map((animation, index) => (
        <View key={index} prop="animation" value={animation ? 'true' : 'false'}>
          <Selector
            {...args}
            key={index}
            withAnimation={animation}
            value={generateRandomLetter(options)}
          >
            {options.map((option) => (
              <Selector.Tab
                key={index + option.anchor}
                anchor={option.anchor}
                label={option.label}
                color={option.color}
                disabled={option.disabled}
              ></Selector.Tab>
            ))}
          </Selector>
        </View>
      ))}
    </ViewGroup>
  );
};

export const Animation = AnimationTemplate.bind({});

const SeparatorTemplate: Story<SelectorProps> = (args) => {
  return (
    <ViewGroup>
      <View prop="separator" value="...">
        <Selector
          {...args}
          withSeparator={true}
          separator={
            <span className="last-of-type:hidden self-center mx-1 w-1 h-1 bg-gray-200 rounded-full" />
          }
          value={generateRandomLetter(options)}
        >
          {options.map((option) => (
            <Selector.Tab
              key={3 + option.anchor}
              anchor={option.anchor}
              label={option.label}
              color={option.color}
              disabled={option.disabled}
            ></Selector.Tab>
          ))}
        </Selector>
      </View>

      {separators.map((separator, index) => (
        <View key={index} prop="withSeparator" value={separator ? 'true' : 'false'}>
          <Selector
            {...args}
            key={index}
            withSeparator={separator}
            value={generateRandomLetter(options)}
          >
            {options.map((option) => (
              <Selector.Tab
                key={index + option.anchor}
                anchor={option.anchor}
                label={option.label}
                color={option.color}
                disabled={option.disabled}
              ></Selector.Tab>
            ))}
          </Selector>
        </View>
      ))}
    </ViewGroup>
  );
};

export const Separator = SeparatorTemplate.bind({});

const OrientationTemplate: Story<SelectorProps> = (args) => {
  return (
    <ViewGroup>
      <View prop="orientation" value="horizontal">
        <Selector
          {...args}
          orientation="horizontal"
          withSeparator={true}
          separator={<div className="w-px h-5 rounded-full bg-gray-300"></div>}
          value={generateRandomLetter(options)}
        >
          {options.map((option) => (
            <Selector.Tab
              key={3 + option.anchor}
              anchor={option.anchor}
              label={option.label}
              color={option.color}
              disabled={option.disabled}
            ></Selector.Tab>
          ))}
        </Selector>
      </View>

      <View prop="orientation" value="vertical">
        <Selector
          {...args}
          orientation="vertical"
          withSeparator={true}
          separator={<div className="w-5 h-px rounded-full bg-gray-300"></div>}
          value={generateRandomLetter(options)}
        >
          {options.map((option) => (
            <Selector.Tab
              key={3 + option.anchor}
              anchor={option.anchor}
              label={option.label}
              color={option.color}
              disabled={option.disabled}
            ></Selector.Tab>
          ))}
        </Selector>
      </View>
    </ViewGroup>
  );
};

export const Orientation = OrientationTemplate.bind({});

const FullWidthTemplate: Story<SelectorProps> = (args) => {
  return (
    <ViewGroup>
      <View prop="fullWidth" value="true">
        <Selector
          {...args}
          fullWidth={true}
          orientation="horizontal"
          withSeparator={true}
          separator={<div className="w-px h-5 rounded-full bg-gray-300"></div>}
          value={generateRandomLetter(options)}
        >
          {options.map((option) => (
            <Selector.Tab
              key={3 + option.anchor}
              anchor={option.anchor}
              label={option.label}
              color={option.color}
              disabled={option.disabled}
            ></Selector.Tab>
          ))}
        </Selector>
      </View>

      <View prop="fullWidth" value="true">
        <Selector
          {...args}
          fullWidth={true}
          orientation="vertical"
          withSeparator={true}
          separator={<div className="w-5 h-px rounded-full bg-gray-300"></div>}
          value={generateRandomLetter(options)}
        >
          {options.map((option) => (
            <Selector.Tab
              key={3 + option.anchor}
              anchor={option.anchor}
              label={option.label}
              color={option.color}
              disabled={option.disabled}
            ></Selector.Tab>
          ))}
        </Selector>
      </View>
    </ViewGroup>
  );
};

export const FullWidth = FullWidthTemplate.bind({});
