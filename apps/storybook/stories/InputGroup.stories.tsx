import {
  InputGroup,
  InputGroupProps,
  InputGroupRadius,
  InputGroupSize,
  InputGroupTone,
  InputGroupShadow,
} from '@idb-dab/ui-core';
import { Meta, Story } from '@storybook/react';
import {
  ChatDots,
  FloppyDisk,
  MagnifyingGlass,
  PaperPlaneTilt,
  Users,
} from '@phosphor-icons/react';
import * as React from 'react';
import { EnhancedView, View, ViewGroup } from '../components/View';

const tones: InputGroupTone[] = ['light', 'solid', 'transparent'];
const sizes: InputGroupSize[] = ['xs', 'sm', 'md', 'lg'];
const radiuses: InputGroupRadius[] = ['none', 'sm', 'base', 'md', 'lg'];
const shadows: InputGroupShadow[] = ['none', 'sm', 'base', 'md'];

const meta: Meta = {
  title: 'Components/InputGroup',
  component: InputGroup,
  argTypes: {
    tone: {
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
    shadow: {
      options: shadows,
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

const options = (
  <>
    <option value="1">John Doe</option>
    <option value="2">Jane Doe</option>
    <option value="3">John Smith</option>
    <option value="4">Jane Smith</option>
  </>
);

// const simpleOptions: ComboboxGroupType[] = [
//   {
//     heading: 'Europe',
//     options: [
//       {
//         value: '1',
//         label: 'Germany',
//       },
//       {
//         value: '2',
//         label: 'Great Britain',
//       },
//       {
//         value: '3',
//         label: 'Greece',
//       },
//     ],
//   },
//   {
//     heading: 'Asia',
//     options: [
//       {
//         value: '4',
//         label: 'Japan',
//       },
//       {
//         value: '5',
//         label: 'China',
//       },
//       {
//         value: '6',
//         label: 'India',
//       },
//     ],
//   },
//   {
//     heading: 'America',
//     options: [
//       {
//         value: '7',
//         label: 'United States',
//       },
//       {
//         value: '8',
//         label: 'Canada',
//       },
//       {
//         value: '9',
//         label: 'Mexico',
//       },
//     ],
//   },
// ];

const InputExample = (args) => (
  <InputGroup {...args}>
    <InputGroup.Text>
      <MagnifyingGlass weight="duotone" />
    </InputGroup.Text>
    <InputGroup.Input placeholder={'Search...'} type="search"></InputGroup.Input>
  </InputGroup>
);

const DatesExample = (args) => (
  <InputGroup {...args}>
    <InputGroup.Text>From</InputGroup.Text>
    <InputGroup.Input placeholder={'Search...'} type="date" />
    <InputGroup.Text>To</InputGroup.Text>
    <InputGroup.Input placeholder={'Search...'} type="date"></InputGroup.Input>
  </InputGroup>
);

const SelectExample = (args) => (
  <InputGroup {...args}>
    <InputGroup.Text>
      <Users weight="duotone" />
    </InputGroup.Text>
    <InputGroup.Select>{options}</InputGroup.Select>
    <InputGroup.Button>
      <FloppyDisk size={16} weight="duotone" />
    </InputGroup.Button>
  </InputGroup>
);

const TextareaExample = (args) => (
  <InputGroup {...args}>
    <InputGroup.Text>
      <ChatDots size={32} weight="duotone" />
    </InputGroup.Text>
    <InputGroup.Textarea placeholder="Submit a new comment..." />
    <InputGroup.Button color="blue">
      <PaperPlaneTilt size={24} weight="duotone" className="mx-2" />
    </InputGroup.Button>
  </InputGroup>
);

const DefaultTemplate: Story<InputGroupProps> = (args) => {
  return (
    <ViewGroup>
      <EnhancedView prop="Text Input">
        <InputExample {...args} />
      </EnhancedView>
      <EnhancedView prop="Date Input">
        <DatesExample {...args} />
      </EnhancedView>
      <EnhancedView prop="Select">
        <SelectExample {...args} />
      </EnhancedView>
      <EnhancedView prop="Textarea">
        <TextareaExample {...args} />
      </EnhancedView>
    </ViewGroup>
  );
};

export const Default = DefaultTemplate.bind({});

const ToneTemplate: Story<InputGroupProps> = (args) => {
  const items = tones.map((tone) => (
    <View direction="column" key={tone} prop="tone" value={tone}>
      <InputExample {...args} tone={tone} />
      <DatesExample {...args} tone={tone} />
      <SelectExample {...args} tone={tone} />
      <TextareaExample {...args} tone={tone} />
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Tones = ToneTemplate.bind({});

const SizeTemplate: Story<InputGroupProps> = (args) => {
  const items = sizes.map((size) => (
    <View direction="column" key={size} prop="size" value={size}>
      <InputExample {...args} size={size} />
      <DatesExample {...args} size={size} />
      <SelectExample {...args} size={size} />
      <TextareaExample {...args} size={size} />
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<InputGroupProps> = (args) => {
  const items = radiuses.map((radius) => (
    <View direction="column" key={radius} prop="radius" value={radius}>
      <InputExample {...args} radius={radius} />
      <DatesExample {...args} radius={radius} />
      <SelectExample {...args} radius={radius} />
      <TextareaExample {...args} radius={radius} />
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<InputGroupProps> = (args) => {
  const items = shadows.map((shadow) => (
    <View direction="column" key={shadow} prop="shadow" value={shadow}>
      <InputExample {...args} shadow={shadow} />
      <DatesExample {...args} shadow={shadow} />
      <SelectExample {...args} shadow={shadow} />
      <TextareaExample {...args} shadow={shadow} />
    </View>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Shadows = ShadowTemplate.bind({});
