import { Button, Popover, Card, Radio } from '@idb-dab/ui-core';
import * as React from 'react';

export type PopoverShowcaseProps = {
  showcase:
    | 'colors'
    | 'sizes'
    | 'radiuses'
    | 'shadows'
    | 'placements'
    | 'placements-extended-top'
    | 'placements-extended-bottom'
    | 'placements-extended-left'
    | 'placements-extended-right'
    | 'initially-open'
    | 'example-card'
    | 'example-radio';
};

export const PopoverShowcase = (props: PopoverShowcaseProps) => {
  const { showcase } = props;

  const components = {
    colors: <Colors />,
    sizes: <Sizes />,
    radiuses: <Radiuses />,
    shadows: <Shadows />,
    placements: <Placements />,
    'placements-extended-top': <PlacementsExtendedTop />,
    'placements-extended-bottom': <PlacementsExtendedBottom />,
    'placements-extended-left': <PlacementsExtendedLeft />,
    'placements-extended-right': <PlacementsExtendedRight />,
    'initially-open': <InitiallyOpen />,
    'example-card': <ExampleCard />,
    'example-radio': <ExampleRadio />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const Colors = () => {
  return (
    <>
      <Popover color="white">
        <Popover.Trigger>
          <Button>White</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover color="gray">
        <Popover.Trigger>
          <Button>Gray</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover color="slate">
        <Popover.Trigger>
          <Button>Slate</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover color="zinc">
        <Popover.Trigger>
          <Button>Zinc</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>
    </>
  );
};

const Sizes = () => {
  return (
    <>
      <Popover size="tight">
        <Popover.Trigger>
          <Button>Tight</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover size="xs">
        <Popover.Trigger>
          <Button>Extra small</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover size="sm">
        <Popover.Trigger>
          <Button>Small</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover size="md">
        <Popover.Trigger>
          <Button>Medium</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover size="lg">
        <Popover.Trigger>
          <Button>Large</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>
    </>
  );
};

const Radiuses = () => {
  return (
    <>
      <Popover radius="none">
        <Popover.Trigger>
          <Button>None</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover radius="sm">
        <Popover.Trigger>
          <Button>Small</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover radius="base">
        <Popover.Trigger>
          <Button>Base</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover radius="md">
        <Popover.Trigger>
          <Button>Medium</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover radius="lg">
        <Popover.Trigger>
          <Button>Large</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover radius="full">
        <Popover.Trigger>
          <Button>Full</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>
    </>
  );
};

const Shadows = () => {
  return (
    <>
      <Popover shadow="none" color="white">
        <Popover.Trigger>
          <Button>None</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover shadow="sm" color="white">
        <Popover.Trigger>
          <Button>Small</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover shadow="base" color="white">
        <Popover.Trigger>
          <Button>Base</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover shadow="md" color="white">
        <Popover.Trigger>
          <Button>Medium</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>
    </>
  );
};

const Placements = () => {
  return (
    <>
      <Popover placement="top">
        <Popover.Trigger>
          <Button>Top</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover placement="bottom">
        <Popover.Trigger>
          <Button>Bottom</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover placement="left">
        <Popover.Trigger>
          <Button>Left</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover placement="right">
        <Popover.Trigger>
          <Button>Right</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>
    </>
  );
};

const PlacementsExtendedTop = () => {
  return (
    <>
      <Popover placement="top-start">
        <Popover.Trigger>
          <Button>Top start</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover placement="top-end">
        <Popover.Trigger>
          <Button>Top end</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>
    </>
  );
};

const PlacementsExtendedBottom = () => {
  return (
    <>
      <Popover placement="bottom-start">
        <Popover.Trigger>
          <Button>Bottom start</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover placement="bottom-end">
        <Popover.Trigger>
          <Button>Bottom end</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>
    </>
  );
};

const PlacementsExtendedLeft = () => {
  return (
    <>
      <Popover placement="left-start">
        <Popover.Trigger>
          <Button>Left start</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover placement="left-end">
        <Popover.Trigger>
          <Button>Left end</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>
    </>
  );
};

const PlacementsExtendedRight = () => {
  return (
    <>
      <Popover placement="right-start">
        <Popover.Trigger>
          <Button>Right start</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover placement="right-end">
        <Popover.Trigger>
          <Button>Right end</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>
    </>
  );
};

const InitiallyOpen = () => {
  return (
    <>
      <Popover initiallyOpen={true}>
        <Popover.Trigger>
          <Button>Opened</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>

      <Popover initiallyOpen={false}>
        <Popover.Trigger>
          <Button>Closed</Button>
        </Popover.Trigger>
        <Popover.Content>I am the popover content</Popover.Content>
      </Popover>
    </>
  );
};

const ExampleCard = () => {
  return (
    <>
      <Popover size="tight" color="gray" placement="bottom-start" withinPortal={true}>
        <Popover.Trigger>
          <Button>I am the trigger</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Card shadow="none" size="sm" radius="md">
            <Card.Header className="bg-gray-50">This is a Card Header</Card.Header>
            <Card.Body>This is the body of the card</Card.Body>
            <Card.Footer className="bg-gray-50">And here is the footer</Card.Footer>
          </Card>
        </Popover.Content>
      </Popover>
    </>
  );
};

const ExampleRadio = () => {
  return (
    <>
      <Popover size="tight" color="gray" placement="bottom-start" withinPortal={true}>
        <Popover.Trigger>
          <Button color="black">Deploy</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Card shadow="none" size="sm" radius="md">
            <Card.Header className="bg-gray-50">Select deployment target</Card.Header>
            <Card.Body className="flex flex-col space-y-2">
              <Radio
                color="dark"
                name="radio-example"
                size="sm"
                label="Testing"
                description="testing.example.com"
                defaultChecked={true}
              />
              <Radio
                color="dark"
                name="radio-example"
                size="sm"
                label="Staging"
                description="staging.example.com"
              />
              <Radio
                color="dark"
                name="radio-example"
                size="sm"
                label="Production"
                description="example.com"
              />
            </Card.Body>
            <Card.Footer className="bg-gray-50">
              <Button color="black" size="sm" className="w-full">
                Run
              </Button>
            </Card.Footer>
          </Card>
        </Popover.Content>
      </Popover>
    </>
  );
};
