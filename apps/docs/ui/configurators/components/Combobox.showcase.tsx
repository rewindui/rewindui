import {
  Combobox,
  ComboboxGroupType,
  ComboboxMode,
  ComboboxOptionType,
  ComboboxProps,
  ComboboxRadius,
  ComboboxShadow,
  ComboboxSize,
  ComboboxTone,
  ComboboxValidation,
  ComboboxColor,
  ComboboxGroupProps,
  Image,
  InputGroup,
  FormControl,
} from '@rewind-ui/core';
import * as React from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

export type ComboboxShowcaseProps = {
  showcase:
    | 'tones'
    | 'colors'
    | 'modes'
    | 'sizes'
    | 'radiuses'
    | 'shadows'
    | 'validations'
    | 'states'
    | 'ring'
    | 'icon'
    | 'clearable'
    | 'close-on-escape'
    | 'max-height'
    | 'min-width'
    | 'offset'
    | 'searchable'
    | 'groups'
    | 'option-description'
    | 'option-media'
    | 'input-group'
    | 'form-control';
};

export const ComboboxShowcase = (props: ComboboxShowcaseProps) => {
  const { showcase } = props;

  const components = {
    tones: <Tones />,
    colors: <Colors />,
    modes: <Modes />,
    sizes: <Sizes />,
    radiuses: <Radiuses />,
    shadows: <Shadows />,
    validations: <Validations />,
    states: <States />,
    ring: <Ring />,
    icon: <Icon />,
    clearable: <Clearable />,
    'close-on-escape': <CloseOnEscape />,
    'max-height': <MaxHeight />,
    'min-width': <MinWidth />,
    offset: <Offset />,
    searchable: <Searchable />,
    groups: <Groups />,
    'option-description': <OptionDescription />,
    'option-media': <OptionMedia />,
    'input-group': <InputGroupCombobox />,
    'form-control': <FormControlCombobox />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const simpleOptions: ComboboxOptionType[] = [
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
];

const groupedOptions: ComboboxGroupType[] = [
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

const tones: ComboboxTone[] = ['light', 'solid', 'transparent'];
const modes: ComboboxMode[] = ['tight', 'spacey'];
const colors: ComboboxColor[] = [
  'blue',
  'red',
  'green',
  'yellow',
  'purple',
  'gray',
  'dark',
  'black',
];
const sizes: ComboboxSize[] = ['xs', 'sm', 'md', 'lg'];
const radiuses: ComboboxRadius[] = ['none', 'sm', 'base', 'md', 'lg'];
const shadows: ComboboxShadow[] = ['none', 'sm', 'base', 'md', 'lg'];
const validations: ComboboxValidation[] = ['none', 'invalid', 'valid', 'warning'];

const Template = (args: ComboboxProps) => (
  <Combobox {...args} placeholder="Select a country..." initialValue="1">
    {simpleOptions.map((option, index) => (
      <Combobox.Option
        key={index}
        value={option.value}
        label={option.label}
        disabled={option.disabled}
      />
    ))}
  </Combobox>
);

const DescriptionTemplate = (args: ComboboxProps) => (
  <Combobox {...args} placeholder="Select a country..." initialValue="1">
    {groupedOptions.map((group: ComboboxGroupType, index: number) => (
      <Combobox.Group heading={group.heading} key={index}>
        {group.options.map((option: ComboboxOptionType) => (
          <Combobox.Option
            key={option.value}
            value={option.value}
            label={option.label}
            description={option.description}
            disabled={option.disabled}
          />
        ))}
      </Combobox.Group>
    ))}
  </Combobox>
);

const MediaTemplate = (args: ComboboxProps) => (
  <Combobox {...args} placeholder="Select a country..." initialValue="1">
    {groupedOptions.map((group: ComboboxGroupType, index: number) => (
      <Combobox.Group heading={group.heading} key={index}>
        {group.options.map((option: ComboboxOptionType) => (
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

const GroupedTemplate = (args: ComboboxGroupProps) => (
  <Combobox placeholder="Select a country...">
    {groupedOptions.map((group: ComboboxGroupType, index: number) => (
      <Combobox.Group {...args} heading={group.heading} key={index}>
        {group.options.map((option: ComboboxOptionType) => (
          <Combobox.Option
            key={option.value}
            value={option.value}
            label={option.label}
            disabled={option.disabled}
          />
        ))}
      </Combobox.Group>
    ))}
  </Combobox>
);

const Tones = () => {
  const items = tones.map((tone: ComboboxTone) => <Template key={tone} tone={tone} />);

  return <>{items}</>;
};

const Colors = () => {
  const items = colors.map((color: ComboboxColor) => <Template key={color} color={color} />);

  return <>{items}</>;
};

const Modes = () => {
  const items = modes.map((mode: ComboboxMode) => <Template key={mode} mode={mode} />);

  return <>{items}</>;
};

const Sizes = () => {
  const items = sizes.map((size: ComboboxSize) => <Template key={size} size={size} />);

  return <>{items}</>;
};

const Radiuses = () => {
  const items = radiuses.map((radius: ComboboxRadius) => <Template key={radius} radius={radius} />);

  return <>{items}</>;
};

const Shadows = () => {
  const items = shadows.map((shadow: ComboboxShadow) => <Template key={shadow} shadow={shadow} />);

  return <>{items}</>;
};

const Validations = () => {
  const items = validations.map((validation: ComboboxValidation) => (
    <Template key={validation} validation={validation} />
  ));

  return <>{items}</>;
};

const States = () => {
  return (
    <>
      <Template disabled={true} />
      <Template loading={true} />
    </>
  );
};

const Ring = () => {
  return (
    <>
      <Template withRing={true} />
      <Template withRing={false} />
    </>
  );
};

const Icon = () => {
  return (
    <>
      <Template leftIcon={<MagnifyingGlass />} />
    </>
  );
};

const Clearable = () => {
  return (
    <>
      <Template clearable={true} />
      <Template clearable={false} />
    </>
  );
};

const CloseOnEscape = () => {
  return (
    <>
      <Template closeOnEscape={true} />
      <Template closeOnEscape={false} />
    </>
  );
};

const MaxHeight = () => {
  return (
    <>
      <Template maxHeight={200} />
      <Template maxHeight={350} />
      <Template maxHeight={500} />
    </>
  );
};

const MinWidth = () => {
  return (
    <>
      <Template minWidth={200} />
      <Template minWidth={300} />
      <Template minWidth={400} />
    </>
  );
};

const Offset = () => {
  return (
    <>
      <Template offset={0} />
      <Template offset={5} />
      <Template offset={10} />
    </>
  );
};

const Searchable = () => {
  return (
    <>
      <Template searchable={true} />
      <Template searchable={false} />
    </>
  );
};

const Groups = () => {
  return <GroupedTemplate />;
};

const OptionDescription = () => {
  return <DescriptionTemplate />;
};

const OptionMedia = () => {
  return <MediaTemplate />;
};

const InputGroupCombobox = () => {
  return (
    <InputGroup className="w-full">
      <InputGroup.Text>Search:</InputGroup.Text>
      <InputGroup.Combobox initialValue="1">
        <InputGroup.Combobox.Option value="1" label="Item 1" />
        <InputGroup.Combobox.Option value="2" label="Item 2" />
        <InputGroup.Combobox.Option value="3" label="Item 3" />
      </InputGroup.Combobox>
      <InputGroup.Text>
        <MagnifyingGlass weight="duotone" />
      </InputGroup.Text>
    </InputGroup>
  );
};

const FormControlCombobox = () => {
  return (
    <FormControl className="min-w-[300px]">
      <FormControl.Label>Search</FormControl.Label>
      <FormControl.Combobox initialValue="1">
        <FormControl.Combobox.Option value="1" label="Item 1" />
        <FormControl.Combobox.Option value="2" label="Item 2" />
        <FormControl.Combobox.Option value="3" label="Item 3" />
      </FormControl.Combobox>
    </FormControl>
  );
};
