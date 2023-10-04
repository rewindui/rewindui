import { Button, Tooltip } from '@idb-dab/ui-core';
import * as React from 'react';

export type TooltipShowcaseProps = {
  showcase:
    | 'tones-solid'
    | 'tones-light'
    | 'sizes'
    | 'radiuses'
    | 'shadows'
    | 'placements'
    | 'placements-extended-top'
    | 'placements-extended-bottom'
    | 'placements-extended-left'
    | 'placements-extended-right'
    | 'initially-open';
};

export const TooltipShowcase = (props: TooltipShowcaseProps) => {
  const { showcase } = props;

  const components = {
    'tones-solid': <ToneSolid />,
    'tones-light': <ToneLight />,
    sizes: <Sizes />,
    radiuses: <Radiuses />,
    shadows: <Shadows />,
    placements: <Placements />,
    'placements-extended-top': <PlacementsExtendedTop />,
    'placements-extended-bottom': <PlacementsExtendedBottom />,
    'placements-extended-left': <PlacementsExtendedLeft />,
    'placements-extended-right': <PlacementsExtendedRight />,
    'initially-open': <InitiallyOpen />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const ToneSolid = () => {
  return (
    <>
      <Tooltip label="This is a Tooltip" tone="solid" color="white">
        <Button color="white">White</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="solid" color="blue">
        <Button color="blue">Blue</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="solid" color="red">
        <Button color="red">Red</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="solid" color="green">
        <Button color="green">Green</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="solid" color="yellow">
        <Button color="yellow">Yellow</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="solid" color="purple">
        <Button color="purple">Purple</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="solid" color="gray">
        <Button color="gray">Gray</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="solid" color="dark">
        <Button color="dark">Dark</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="solid" color="black">
        <Button color="black">Black</Button>
      </Tooltip>
    </>
  );
};

const ToneLight = () => {
  return (
    <>
      <Tooltip label="This is a Tooltip" tone="light" color="white">
        <Button tone="light" color="white">
          White
        </Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="light" color="blue">
        <Button tone="light" color="blue">
          Blue
        </Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="light" color="red">
        <Button tone="light" color="red">
          Red
        </Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="light" color="green">
        <Button tone="light" color="green">
          Green
        </Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="light" color="yellow">
        <Button tone="light" color="yellow">
          Yellow
        </Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="light" color="purple">
        <Button tone="light" color="purple">
          Purple
        </Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="light" color="gray">
        <Button tone="light" color="gray">
          Gray
        </Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="light" color="dark">
        <Button tone="light" color="dark">
          Dark
        </Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" tone="light" color="black">
        <Button tone="light" color="black">
          Black
        </Button>
      </Tooltip>
    </>
  );
};

const Sizes = () => {
  return (
    <>
      <Tooltip label="This is a Tooltip" size="xs">
        <Button>Extra small</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" size="sm">
        <Button>Small</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" size="md">
        <Button>Medium</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" size="lg">
        <Button>Large</Button>
      </Tooltip>
    </>
  );
};

const Radiuses = () => {
  return (
    <>
      <Tooltip label="This is a Tooltip" radius="none">
        <Button>None</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" radius="sm">
        <Button>Small</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" radius="base">
        <Button>Base</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" radius="md">
        <Button>Medium</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" radius="lg">
        <Button>Large</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" radius="full">
        <Button>Full</Button>
      </Tooltip>
    </>
  );
};

const Shadows = () => {
  return (
    <>
      <Tooltip label="This is a Tooltip" shadow="none" color="white">
        <Button>None</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" shadow="sm" color="white">
        <Button>Small</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" shadow="base" color="white">
        <Button>Base</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" shadow="md" color="white">
        <Button>Medium</Button>
      </Tooltip>
    </>
  );
};

const Placements = () => {
  return (
    <>
      <Tooltip label="This is a Tooltip" placement="top">
        <Button>Top</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" placement="left">
        <Button>Left</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </>
  );
};

const PlacementsExtendedTop = () => {
  return (
    <>
      <Tooltip label="This is a Tooltip" placement="top-start">
        <Button>Top start</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" placement="top-end">
        <Button>Top end</Button>
      </Tooltip>
    </>
  );
};

const PlacementsExtendedBottom = () => {
  return (
    <>
      <Tooltip label="This is a Tooltip" placement="bottom-start">
        <Button>Bottom start</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" placement="bottom-end">
        <Button>Bottom end</Button>
      </Tooltip>
    </>
  );
};

const PlacementsExtendedLeft = () => {
  return (
    <>
      <Tooltip label="This is a Tooltip" placement="left-start">
        <Button>Left start</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" placement="left-end">
        <Button>Left end</Button>
      </Tooltip>
    </>
  );
};

const PlacementsExtendedRight = () => {
  return (
    <>
      <Tooltip label="This is a Tooltip" placement="right-start">
        <Button>Right start</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" placement="right-end">
        <Button>Right end</Button>
      </Tooltip>
    </>
  );
};

const InitiallyOpen = () => {
  return (
    <>
      <Tooltip label="This is a Tooltip" initiallyOpen={true}>
        <Button>Opened</Button>
      </Tooltip>

      <Tooltip label="This is a Tooltip" initiallyOpen={false}>
        <Button>Closed</Button>
      </Tooltip>
    </>
  );
};
