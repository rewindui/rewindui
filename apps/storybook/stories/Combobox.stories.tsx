import {
  Combobox,
  ComboboxProps,
  Image,
  Text,
  ComboboxTone,
  ComboboxSize,
  ComboboxRadius,
  ComboboxShadow,
  ComboboxValidation,
  ComboboxGroupType,
} from '@rewind-ui/core';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { Meta, Story } from '@storybook/react';
import * as React from 'react';

const tones: ComboboxTone[] = ['base', 'solid', 'transparent'];
const sizes: ComboboxSize[] = ['xs', 'sm', 'md', 'lg'];
const radiuses: ComboboxRadius[] = ['none', 'sm', 'base', 'md', 'lg'];
const shadows: ComboboxShadow[] = ['none', 'sm', 'base', 'md', 'lg'];
const validations: ComboboxValidation[] = ['none', 'invalid', 'valid', 'warning'];

const simpleOptions: ComboboxGroupType[] = [
  {
    heading: 'Europe',
    options: [
      {
        value: '1',
        label: 'Germany',
      },
      {
        value: '2',
        label: 'Great Britain',
      },
      {
        value: '3',
        label: 'Greece',
      },
    ],
  },
  {
    heading: 'Asia',
    options: [
      {
        value: '4',
        label: 'Japan',
      },
      {
        value: '5',
        label: 'China',
      },
      {
        value: '6',
        label: 'India',
        disabled: true,
      },
    ],
  },
  {
    heading: 'America',
    options: [
      {
        value: '7',
        label: 'United States',
      },
      {
        value: '8',
        label: 'Canada',
      },
      {
        value: '9',
        label: 'Mexico',
      },
    ],
  },
];

const options: ComboboxGroupType[] = [
  {
    heading: 'Europe',
    options: [
      {
        value: '1',
        label: 'Germany',
        description: 'The second-most populous country in Europe',
        media: (
          <Image
            alt="Germany"
            className="w-10 h-10"
            src="https://img.icons8.com/color/64/germany-circular.png"
          />
        ),
      },
      {
        value: '2',
        label: 'Great Britain',
        description: 'An island nation in northwestern Europe',
        media: (
          <Image
            alt="Great Britain"
            className="w-10 h-10"
            src="https://img.icons8.com/color/64/great-britain-circular.png"
          />
        ),
      },
      {
        value: '3',
        label: 'Greece',
        description: 'The cradle of Western civilization',
        media: (
          <Image
            alt="Greece"
            className="w-10 h-10"
            src="https://img.icons8.com/color/64/greece-circular.png"
          />
        ),
      },
    ],
  },
  {
    heading: 'Asia',
    options: [
      {
        value: '4',
        label: 'Japan',
        description: 'An island country in East Asia',
        media: (
          <Image
            alt="Japan"
            className="w-10 h-10"
            src="https://img.icons8.com/color/64/japan-circular.png"
          />
        ),
      },
      {
        value: '5',
        label: 'China',
        description: "The world's third largest country",
        disabled: true,
        media: (
          <Image
            alt="China"
            className="w-10 h-10"
            src="https://img.icons8.com/color/64/china-circular.png"
          />
        ),
      },
      {
        value: '6',
        label: 'India',
        description: 'The most populous democracy in the world',
        media: (
          <Image
            alt="India"
            className="w-10 h-10"
            src="https://img.icons8.com/color/64/india-circular.png"
          />
        ),
      },
    ],
  },
  {
    heading: 'North America',
    options: [
      {
        value: '7',
        label: 'United States',
        description: 'Commonly known as the United States',
        media: (
          <Image
            alt="USA"
            className="w-10 h-10"
            src="https://img.icons8.com/color/64/usa-circular.png"
          />
        ),
      },
      {
        value: '8',
        label: 'Canada',
        description: 'It has the longest coastline in the world',
        media: (
          <Image
            alt="Canada"
            className="w-10 h-10"
            src="https://img.icons8.com/color/64/canada-circular.png"
          />
        ),
      },
      {
        value: '9',
        label: 'Mexico',
        description: 'It is organized as a federal republic',
        media: (
          <Image
            alt="Mexico"
            className="w-10 h-10"
            src="https://img.icons8.com/color/64/mexico-circular.png"
          />
        ),
      },
    ],
  },
];

const meta: Meta = {
  title: 'Components/Combobox',
  component: Combobox,
  argTypes: {
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

const ConfiguratorTemplate: Story<ComboboxProps> = (args) => {
  return (
    <Combobox
      {...args}
      leftIcon={<MagnifyingGlass />}
      placeholder="Select a country..."
      initialValue="1"
    >
      {options.map((group, index) => (
        <Combobox.Group heading={group.heading} key={index}>
          {group.options.map((option) => (
            <Combobox.Option
              key={option.value}
              value={option.value}
              label={option.label}
              description={option.description}
              disabled={option.disabled}
              media={option.media}
            />
          ))}
        </Combobox.Group>
      ))}
    </Combobox>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Configurator = ConfiguratorTemplate.bind({});

const ToneTemplate: Story<ComboboxProps> = (args) => {
  const items = tones.map((tone) => (
    <Combobox
      key={tone}
      tone={tone}
      {...args}
      leftIcon={<MagnifyingGlass />}
      placeholder="Select a country..."
      initialValue="1"
    >
      {simpleOptions.map((group, index) => (
        <Combobox.Group heading={group.heading} key={index}>
          {group.options.map((option) => (
            <Combobox.Option
              key={option.value}
              value={option.value}
              label={option.label}
              description={option.description}
              disabled={option.disabled}
              media={option.media}
            />
          ))}
        </Combobox.Group>
      ))}
    </Combobox>
  ));

  return <div className={'flex flex-col space-y-4'}>{items}</div>;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Tones = ToneTemplate.bind({});

const SizeTemplate: Story<ComboboxProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <Text>Size: {size}</Text>
      {tones.map((tone) => (
        <Combobox
          key={tone}
          size={size}
          tone={tone}
          {...args}
          leftIcon={<MagnifyingGlass />}
          placeholder="Select a country..."
          initialValue="1"
        >
          {simpleOptions.map((group, index) => (
            <Combobox.Group heading={group.heading} key={index}>
              {group.options.map((option) => (
                <Combobox.Option
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  description={option.description}
                  disabled={option.disabled}
                  media={option.media}
                />
              ))}
            </Combobox.Group>
          ))}
        </Combobox>
      ))}
    </React.Fragment>
  ));

  return <div className={'flex flex-col space-y-4'}>{items}</div>;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<ComboboxProps> = (args) => {
  const items = radiuses.map((radius) => (
    <React.Fragment key={radius}>
      <Text>Radius: {radius}</Text>
      {tones.map((tone) => (
        <Combobox
          key={tone}
          radius={radius}
          tone={tone}
          {...args}
          leftIcon={<MagnifyingGlass />}
          placeholder="Select a country..."
          initialValue="1"
        >
          {simpleOptions.map((group, index) => (
            <Combobox.Group heading={group.heading} key={index}>
              {group.options.map((option) => (
                <Combobox.Option
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  description={option.description}
                  disabled={option.disabled}
                  media={option.media}
                />
              ))}
            </Combobox.Group>
          ))}
        </Combobox>
      ))}
    </React.Fragment>
  ));

  return <div className={'flex flex-col space-y-4'}>{items}</div>;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Radiuses = RadiusTemplate.bind({});

const ShadowTemplate: Story<ComboboxProps> = (args) => {
  const items = shadows.map((shadow) => (
    <React.Fragment key={shadow}>
      <Text>Shadow: {shadow}</Text>
      {tones.map((tone) => (
        <Combobox
          key={tone}
          shadow={shadow}
          tone={tone}
          {...args}
          leftIcon={<MagnifyingGlass />}
          placeholder="Select a country..."
          initialValue="1"
        >
          {simpleOptions.map((group, index) => (
            <Combobox.Group heading={group.heading} key={index}>
              {group.options.map((option) => (
                <Combobox.Option
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  description={option.description}
                  disabled={option.disabled}
                  media={option.media}
                />
              ))}
            </Combobox.Group>
          ))}
        </Combobox>
      ))}
    </React.Fragment>
  ));

  return <div className={'flex flex-col space-y-4'}>{items}</div>;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Shadows = ShadowTemplate.bind({});

const ValidationTemplate: Story<ComboboxProps> = (args) => {
  const items = validations.map((validation) => (
    <React.Fragment key={validation}>
      <Text>Validation: {validation}</Text>
      {tones.map((tone) => (
        <Combobox
          key={tone}
          validation={validation}
          tone={tone}
          {...args}
          leftIcon={<MagnifyingGlass />}
          placeholder="Select a country..."
          initialValue="1"
        >
          {simpleOptions.map((group, index) => (
            <Combobox.Group heading={group.heading} key={index}>
              {group.options.map((option) => (
                <Combobox.Option
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  description={option.description}
                  disabled={option.disabled}
                  media={option.media}
                />
              ))}
            </Combobox.Group>
          ))}
        </Combobox>
      ))}
    </React.Fragment>
  ));

  return <div className={'flex flex-col space-y-4'}>{items}</div>;
};

export const Validations = ValidationTemplate.bind({});

const RingTemplate: Story<ComboboxProps> = (args) => {
  const items = tones.map((tone) => (
    <Combobox
      key={tone}
      tone={tone}
      withRing={true}
      {...args}
      leftIcon={<MagnifyingGlass />}
      placeholder="Select a country..."
      initialValue="1"
    >
      {simpleOptions.map((group, index) => (
        <Combobox.Group heading={group.heading} key={index}>
          {group.options.map((option) => (
            <Combobox.Option
              key={option.value}
              value={option.value}
              label={option.label}
              description={option.description}
              disabled={option.disabled}
              media={option.media}
            />
          ))}
        </Combobox.Group>
      ))}
    </Combobox>
  ));

  return <div className={'flex flex-col space-y-4'}>{items}</div>;
};

export const Ring = RingTemplate.bind({});

const StateTemplate: Story<ComboboxProps> = (args) => {
  const items = (
    <React.Fragment>
      <Text>State: loading</Text>
      {tones.map((tone) => (
        <Combobox
          key={tone}
          loading={true}
          tone={tone}
          {...args}
          leftIcon={<MagnifyingGlass />}
          placeholder="Select a country..."
          initialValue="1"
        >
          {simpleOptions.map((group, index) => (
            <Combobox.Group heading={group.heading} key={index}>
              {group.options.map((option) => (
                <Combobox.Option
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  description={option.description}
                  disabled={option.disabled}
                  media={option.media}
                />
              ))}
            </Combobox.Group>
          ))}
        </Combobox>
      ))}
      <Text>State: disabled</Text>
      {tones.map((tone) => (
        <Combobox
          key={tone}
          disabled={true}
          tone={tone}
          {...args}
          leftIcon={<MagnifyingGlass />}
          placeholder="Select a country..."
          initialValue="1"
        >
          {simpleOptions.map((group, index) => (
            <Combobox.Group heading={group.heading} key={index}>
              {group.options.map((option) => (
                <Combobox.Option
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  description={option.description}
                  disabled={option.disabled}
                  media={option.media}
                />
              ))}
            </Combobox.Group>
          ))}
        </Combobox>
      ))}
    </React.Fragment>
  );

  return <div className={'flex flex-col space-y-4'}>{items}</div>;
};

export const States = StateTemplate.bind({});
