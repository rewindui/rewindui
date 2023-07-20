import {
  Combobox,
  ComboboxProps,
  Image,
  Text,
  ComboboxColor,
  ComboboxTone,
  ComboboxSize,
  ComboboxRadius,
  ComboboxShadow,
  ComboboxValidation,
  ComboboxGroupType,
  Button,
} from '@rewind-ui/core';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import * as React from 'react';

const tones: ComboboxTone[] = ['light', 'solid', 'transparent'];
const colors: ComboboxColor[] = ['blue', 'purple', 'gray', 'dark', 'black'];
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
      {
        value: '4',
        label: 'Sweden',
      },
    ],
  },
  {
    heading: 'Asia',
    options: [
      {
        value: '5',
        label: 'Japan',
      },
      {
        value: '6',
        label: 'China',
      },
      {
        value: '7',
        label: 'India',
        disabled: true,
      },
    ],
  },
  {
    heading: 'America',
    options: [
      {
        value: '8',
        label: 'United States',
      },
      {
        value: '9',
        label: 'Canada',
      },
      {
        value: '10',
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
      {
        value: '4',
        label: 'Sweden',
        description: 'An economic powerhouse',
        media: (
          <Image
            alt="Greece"
            className="w-10 h-10"
            src="https://img.icons8.com/color/64/sweden-circular.png"
          />
        ),
      },
    ],
  },
  {
    heading: 'Asia',
    options: [
      {
        value: '5',
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
        value: '6',
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
        value: '7',
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
        value: '8',
        label: 'USA',
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
        value: '9',
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
        value: '10',
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

const DefaultTemplate: Story<ComboboxProps> = (args) => {
  const [value, setValue] = useState<string | null>('1');

  return (
    <>
      <div className="flex gap-2 mb-2">
        <Button onClick={() => setValue('1')}>Select Germany</Button>
        <Button onClick={() => setValue('2')}>Select Great Britain</Button>
        <Button onClick={() => setValue('3')}>Select Greece</Button>
      </div>

      <Combobox
        {...args}
        leftIcon={<MagnifyingGlass />}
        placeholder="Select a country..."
        value={value}
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
    </>
  );
};

export const Default = DefaultTemplate.bind({});

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

export const Tones = ToneTemplate.bind({});

const ColorTemplate: Story<ComboboxProps> = (args) => {
  const items = colors.map((color) => (
    <Combobox
      key={color}
      color={color}
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

export const Colors = ColorTemplate.bind({});

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
