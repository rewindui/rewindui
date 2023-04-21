import { Button, Dropdown, DropdownColor, DropdownProps } from '@rewind-ui/core';
import * as React from 'react';
import {
  ChatCircleText,
  Export,
  Gear,
  Images,
  MagnifyingGlass,
  SignOut,
  Trash,
  XCircle,
} from '@phosphor-icons/react';

export type DropdownShowcaseProps = {
  showcase:
    | 'colors'
    | 'tones-solid'
    | 'tones-light'
    | 'modes'
    | 'sizes'
    | 'radiuses'
    | 'shadows'
    | 'placements'
    | 'placements-extended-top'
    | 'placements-extended-bottom'
    | 'placements-extended-left'
    | 'placements-extended-right'
    | 'triggers'
    | 'chevrons'
    | 'chevrons-rotation'
    | 'initially-open'
    | 'outside-press'
    | 'label-color'
    | 'label-weight'
    | 'label-size'
    | 'divider-colors'
    | 'examples-basic'
    | 'examples-with-description';
};

const colors: DropdownColor[] = ['white', 'gray', 'slate', 'zinc'];

export const DropdownShowcase = (props: DropdownShowcaseProps) => {
  const { showcase } = props;

  const components = {
    colors: <Colors />,
    'tones-solid': <ToneSolid />,
    'tones-light': <ToneLight />,
    modes: <Modes />,
    sizes: <Sizes />,
    radiuses: <Radiuses />,
    shadows: <Shadows />,
    placements: <Placements />,
    'placements-extended-top': <PlacementsExtendedTop />,
    'placements-extended-bottom': <PlacementsExtendedBottom />,
    'placements-extended-left': <PlacementsExtendedLeft />,
    'placements-extended-right': <PlacementsExtendedRight />,
    triggers: <Triggers />,
    chevrons: <Chevrons />,
    'chevrons-rotation': <ChevronsRotation />,
    'initially-open': <InitiallyOpen />,
    'outside-press': <OutsidePress />,
    'label-color': <LabelColor />,
    'label-weight': <LabelWeight />,
    'label-size': <LabelSize />,
    'divider-colors': <DividerColors />,
    'examples-basic': <ExamplesBasic />,
    'examples-with-description': <ExamplesWithDescriptions />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const Template = (args: DropdownProps) => (
  <Dropdown trigger="hover" {...args}>
    <Dropdown.Trigger>
      <Button>Menu</Button>
    </Dropdown.Trigger>
    <Dropdown.Content>
      <Dropdown.Label>Application</Dropdown.Label>
      <Dropdown.Divider />
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Messages</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown>
);

const Colors = () => {
  const items = colors.map((color) => <Template key={color} color={color} />);

  return <>{items}</>;
};

const ToneSolid = () => {
  return (
    <>
      <Dropdown tone="solid" itemColor="blue" trigger="hover">
        <Dropdown.Trigger>
          <Button color="blue">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="solid" itemColor="red" trigger="hover">
        <Dropdown.Trigger>
          <Button color="red">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="solid" itemColor="green" trigger="hover">
        <Dropdown.Trigger>
          <Button color="green">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="solid" itemColor="yellow" trigger="hover">
        <Dropdown.Trigger>
          <Button color="yellow">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="solid" itemColor="purple" trigger="hover">
        <Dropdown.Trigger>
          <Button color="purple">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="solid" itemColor="gray" trigger="hover">
        <Dropdown.Trigger>
          <Button color="gray">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="solid" itemColor="dark" trigger="hover">
        <Dropdown.Trigger>
          <Button color="dark">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="solid" itemColor="black" trigger="hover">
        <Dropdown.Trigger>
          <Button color="black">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const ToneLight = () => {
  return (
    <>
      <Dropdown tone="light" itemColor="blue" trigger="hover">
        <Dropdown.Trigger>
          <Button tone="light" color="blue">
            Menu
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="light" itemColor="red" trigger="hover">
        <Dropdown.Trigger>
          <Button tone="light" color="red">
            Menu
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="light" itemColor="green" trigger="hover">
        <Dropdown.Trigger>
          <Button tone="light" color="green">
            Menu
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="light" itemColor="yellow" trigger="hover">
        <Dropdown.Trigger>
          <Button tone="light" color="yellow">
            Menu
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="light" itemColor="purple" trigger="hover">
        <Dropdown.Trigger>
          <Button tone="light" color="purple">
            Menu
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="light" itemColor="gray" trigger="hover">
        <Dropdown.Trigger>
          <Button tone="light" color="gray">
            Menu
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="light" itemColor="dark" trigger="hover">
        <Dropdown.Trigger>
          <Button tone="light" color="dark">
            Menu
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown tone="light" itemColor="black" trigger="hover">
        <Dropdown.Trigger>
          <Button tone="light" color="black">
            Menu
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const Modes = () => {
  return (
    <>
      <Dropdown mode="tight" trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown mode="spacey" trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const Sizes = () => {
  return (
    <>
      <Dropdown size="xs" trigger="hover">
        <Dropdown.Trigger>
          <Button size="xs">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown size="sm" trigger="hover">
        <Dropdown.Trigger>
          <Button size="sm">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown size="md" trigger="hover">
        <Dropdown.Trigger>
          <Button size="md">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown size="lg" trigger="hover">
        <Dropdown.Trigger>
          <Button size="lg">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const Radiuses = () => {
  return (
    <>
      <Dropdown radius="none" trigger="hover">
        <Dropdown.Trigger>
          <Button radius="none">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown radius="sm" trigger="hover">
        <Dropdown.Trigger>
          <Button radius="sm">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown radius="base" trigger="hover">
        <Dropdown.Trigger>
          <Button radius="base">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown radius="md" trigger="hover">
        <Dropdown.Trigger>
          <Button radius="md">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown radius="lg" trigger="hover">
        <Dropdown.Trigger>
          <Button radius="lg">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const Shadows = () => {
  return (
    <>
      <Dropdown shadow="none" placement="top" trigger="hover">
        <Dropdown.Trigger>
          <Button shadow="none">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown shadow="sm" placement="top" trigger="hover">
        <Dropdown.Trigger>
          <Button shadow="sm">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown shadow="base" placement="top" trigger="hover">
        <Dropdown.Trigger>
          <Button shadow="base">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown shadow="md" placement="top" trigger="hover">
        <Dropdown.Trigger>
          <Button shadow="md">Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const Placements = () => {
  return (
    <>
      <Dropdown placement="top" trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown placement="bottom" trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown placement="left" trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown placement="right" trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const PlacementsExtendedTop = () => {
  return (
    <>
      <Dropdown placement="top-start" trigger="hover">
        <Dropdown.Trigger>
          <Button>Top start</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown placement="top-end" trigger="hover">
        <Dropdown.Trigger>
          <Button>Top end</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const PlacementsExtendedBottom = () => {
  return (
    <>
      <Dropdown placement="bottom-start" trigger="hover">
        <Dropdown.Trigger>
          <Button>Bottom start</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown placement="bottom-end" trigger="hover">
        <Dropdown.Trigger>
          <Button>Bottom end</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const PlacementsExtendedLeft = () => {
  return (
    <>
      <Dropdown placement="left-start" trigger="hover">
        <Dropdown.Trigger>
          <Button>Left start</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown placement="left-end" trigger="hover">
        <Dropdown.Trigger>
          <Button>Left end</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const PlacementsExtendedRight = () => {
  return (
    <>
      <Dropdown placement="right-start" trigger="hover">
        <Dropdown.Trigger>
          <Button>Right start</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown placement="right-end" trigger="hover">
        <Dropdown.Trigger>
          <Button>Right end</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const Triggers = () => {
  return (
    <>
      <Dropdown trigger="click">
        <Dropdown.Trigger>
          <Button>Click me!</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Hover over me!</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const Chevrons = () => {
  return (
    <>
      <Dropdown withChevron={true} trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown withChevron={false} trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const ChevronsRotation = () => {
  return (
    <>
      <Dropdown chevronRotation={true} trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown chevronRotation={false} trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const InitiallyOpen = () => {
  return (
    <>
      <Dropdown initiallyOpen={true} trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown initiallyOpen={false} trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const OutsidePress = () => {
  return (
    <>
      <Dropdown initiallyOpen={true} outsidePress={true} trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown initiallyOpen={true} outsidePress={false} trigger="hover">
        <Dropdown.Trigger>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Application</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const LabelColor = () => {
  return (
    <>
      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Blue</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label color="blue">Blue</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Red</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label color="red">Red</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Green</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label color="green">Green</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Yellow</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label color="yellow">Yellow</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Purple</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label color="purple">Purple</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Gray</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label color="gray">Gray</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Dark</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label color="dark">Dark</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Black</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label color="black">Black</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const LabelWeight = () => {
  return (
    <>
      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Thin</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label weight="thin">Thin</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Extra light</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label weight="extraLight">Extra light</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Light</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label weight="light">Light</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Normal</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label weight="normal">Normal</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Medium</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label weight="medium">Medium</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Semi bold</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label weight="semiBold">Semi bold</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Bold</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label weight="bold">Bold</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Extra bold</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label weight="extraBold">Extra bold</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Black</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label weight="black">Black</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const LabelSize = () => {
  return (
    <>
      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Blue</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label size="xs">Extra small</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Blue</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label size="sm">Small</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Blue</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label size="md">Medium</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Blue</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label size="lg">Large</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const DividerColors = () => {
  return (
    <>
      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Gray</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Gray</Dropdown.Label>
          <Dropdown.Divider color="gray" />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Slate</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Slate</Dropdown.Label>
          <Dropdown.Divider color="slate" />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown trigger="hover">
        <Dropdown.Trigger>
          <Button>Dark</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>Dark</Dropdown.Label>
          <Dropdown.Divider color="dark" />
          <Dropdown.Item>Some more Settings</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

const ExamplesBasic = () => {
  return (
    <Dropdown itemColor="gray" trigger="hover">
      <Dropdown.Trigger>
        <Button size="md" color="purple" shadow="base" shadowColor="purple">
          Menu
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Label>Application</Dropdown.Label>
        <Dropdown.Divider />
        <Dropdown.Item>
          <Gear size={20} weight="duotone" className="mr-1.5" />
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          <ChatCircleText size={20} weight="duotone" className="mr-1.5" />
          Messages
        </Dropdown.Item>
        <Dropdown.Item>
          <Images size={20} weight="duotone" className="mr-1.5" />
          Gallery
        </Dropdown.Item>
        <Dropdown.Item>
          <MagnifyingGlass size={20} weight="duotone" className="mr-1.5" />
          Search
        </Dropdown.Item>
        <Dropdown.Label color="red">Danger Zone</Dropdown.Label>
        <Dropdown.Divider />
        <Dropdown.Item color="yellow">
          <Export size={20} weight="duotone" className="mr-1.5" />
          Transfer my data
        </Dropdown.Item>
        <Dropdown.Item disabled>
          <Trash size={20} weight="duotone" className="mr-1.5" />
          Delete my account
        </Dropdown.Item>
        <Dropdown.Item color="red">
          <SignOut size={20} weight="duotone" className="mr-1.5" />
          Logout
        </Dropdown.Item>
        <Dropdown.Item color="gray">
          <XCircle size={20} weight="duotone" className="mr-1.5" />
          Close
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
};

const ExamplesWithDescriptions = () => {
  return (
    <Dropdown itemColor="gray" tone="light" trigger="hover">
      <Dropdown.Trigger>
        <Button size="md" color="dark" shadow="base" shadowColor="dark">
          Menu
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Label weight="medium" size="md" color="black">
          User menu
        </Dropdown.Label>
        <Dropdown.Divider />
        <Dropdown.Item>
          <div className="flex">
            <Gear size={22} weight="duotone" className="mr-2.5 mt-0.5 text-gray-500" />
            <div className="grid grid-cols-1 justify-items-start">
              <span className="font-medium">Settings</span>
              <span className="font-light text-gray-500">Adjust your system settings</span>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex">
            <ChatCircleText size={22} weight="duotone" className="mr-2.5 mt-0.5 text-gray-500" />
            <div className="grid grid-cols-1 justify-items-start">
              <span className="font-medium">Messages</span>
              <span className="font-light text-gray-500">View your inbox</span>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex">
            <Images size={22} weight="duotone" className="mr-2.5 mt-0.5 text-gray-500" />
            <div className="grid grid-cols-1 justify-items-start">
              <span className="font-medium">Gallery</span>
              <span className="font-light text-gray-500">Open your uploaded photos</span>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="flex">
            <MagnifyingGlass size={22} weight="duotone" className="mr-2.5 mt-0.5 text-gray-500" />
            <div className="grid grid-cols-1 justify-items-start">
              <span className="font-medium">Search</span>
              <span className="font-light text-gray-500">Find your data</span>
            </div>
          </div>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
};
