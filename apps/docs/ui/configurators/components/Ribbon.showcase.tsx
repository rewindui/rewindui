import { Card, Ribbon } from '@rewind-ui/core';
import * as React from 'react';
import { Star } from '@phosphor-icons/react';

export type RibbonShowcaseProps = {
  showcase:
    | 'variants'
    | 'tones-solid'
    | 'tones-light'
    | 'tones-glossy'
    | 'sizes'
    | 'radiuses'
    | 'shadows'
    | 'shadow-colors'
    | 'positions'
    | 'example-icon';
};

export const RibbonShowcase = (props: RibbonShowcaseProps) => {
  const { showcase } = props;

  const components = {
    variants: <Variants />,
    'tones-solid': <TonesSolid />,
    'tones-light': <TonesLight />,
    'tones-glossy': <TonesGlossy />,
    sizes: <Sizes />,
    radiuses: <Radiuses />,
    shadows: <Shadows />,
    'shadow-colors': <ShadowColors />,
    positions: <Positions />,
    'example-icon': <ExampleIcon />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const Template = (props) => {
  const { label = 'Ribbon', ...args } = props;
  const className =
    props.position === 'left' || props.position === 'top-left' ? 'ml-auto' : 'mr-auto';

  return (
    <Card className="min-w-[300px]">
      <Card.Header className="relative">
        <Ribbon {...props}>{label}</Ribbon>
        <span className={className}>This is just a Card</span>
      </Card.Header>
    </Card>
  );
};

const Variants = () => {
  return (
    <>
      <Template variant="primary" label="Primary" />
      <Template variant="secondary" label="Secondary" />
      <Template variant="danger" label="Danger" />
      <Template variant="success" label="Success" />
      <Template variant="warning" label="Warning" />
      <Template variant="info" label="Info" />
    </>
  );
};

const TonesSolid = () => {
  return (
    <>
      <Template tone="solid" color="white" label="White" />
      <Template tone="solid" color="blue" label="Blue" />
      <Template tone="solid" color="red" label="Red" />
      <Template tone="solid" color="green" label="Green" />
      <Template tone="solid" color="yellow" label="Yellow" />
      <Template tone="solid" color="purple" label="Purple" />
      <Template tone="solid" color="gray" label="Gray" />
      <Template tone="solid" color="dark" label="Dark" />
      <Template tone="solid" color="black" label="Black" />
    </>
  );
};

const TonesLight = () => {
  return (
    <>
      <Template tone="light" color="white" label="White" />
      <Template tone="light" color="blue" label="Blue" />
      <Template tone="light" color="red" label="Red" />
      <Template tone="light" color="green" label="Green" />
      <Template tone="light" color="yellow" label="Yellow" />
      <Template tone="light" color="purple" label="Purple" />
      <Template tone="light" color="gray" label="Gray" />
      <Template tone="light" color="dark" label="Dark" />
      <Template tone="light" color="black" label="Black" />
    </>
  );
};

const TonesGlossy = () => {
  return (
    <>
      <Template tone="glossy" color="white" label="White" />
      <Template tone="glossy" color="blue" label="Blue" />
      <Template tone="glossy" color="red" label="Red" />
      <Template tone="glossy" color="green" label="Green" />
      <Template tone="glossy" color="yellow" label="Yellow" />
      <Template tone="glossy" color="purple" label="Purple" />
      <Template tone="glossy" color="gray" label="Gray" />
      <Template tone="glossy" color="dark" label="Dark" />
      <Template tone="glossy" color="black" label="Black" />
    </>
  );
};

const Sizes = () => {
  return (
    <>
      <Template size="sm" />
      <Template size="md" />
      <Template size="lg" />
    </>
  );
};

const Radiuses = () => {
  return (
    <>
      <Template radius="none" />
      <Template radius="sm" />
      <Template radius="base" />
      <Template radius="md" />
      <Template radius="lg" />
    </>
  );
};

const Shadows = () => {
  return (
    <>
      <Template shadow="none" />
      <Template shadow="sm" />
      <Template shadow="base" />
      <Template shadow="md" />
      <Template shadow="lg" />
      <Template shadow="xl" />
    </>
  );
};

const ShadowColors = () => {
  return (
    <>
      <Template shadow="lg" color="blue" shadowColor="blue" />
      <Template shadow="lg" color="red" shadowColor="red" />
      <Template shadow="lg" color="green" shadowColor="green" />
      <Template shadow="lg" color="yellow" shadowColor="yellow" />
      <Template shadow="lg" color="purple" shadowColor="purple" />
      <Template shadow="lg" color="gray" shadowColor="gray" />
      <Template shadow="lg" color="dark" shadowColor="dark" />
      <Template shadow="lg" color="black" shadowColor="black" />
    </>
  );
};

const Positions = () => {
  return (
    <>
      <Template position="top-right" />
      <Template position="right" />
      <Template position="top-left" />
      <Template position="left" />
    </>
  );
};

const ExampleIcon = () => {
  return (
    <>
      <Template size="lg" label={<Star weight="duotone" />} />
    </>
  );
};
