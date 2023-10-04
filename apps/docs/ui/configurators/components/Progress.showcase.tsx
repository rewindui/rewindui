import { Progress } from '@idb-dab/ui-core';
import * as React from 'react';

export type ProgressShowcaseProps = {
  showcase:
    | 'colors'
    | 'sizes'
    | 'radiuses'
    | 'shadows'
    | 'stripes'
    | 'animated'
    | 'label'
    | 'description'
    | 'value'
    | 'value-label';
};

export const ProgressShowcase = (props: ProgressShowcaseProps) => {
  const { showcase } = props;

  const components = {
    colors: <Colors />,
    sizes: <Sizes />,
    radiuses: <Radiuses />,
    shadows: <Shadows />,
    stripes: <Stripes />,
    animated: <Animated />,
    label: <Label />,
    description: <Description />,
    value: <Value />,
    'value-label': <ValueLabel />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const Colors = () => {
  return (
    <>
      <Progress color="white" value={75} />
      <Progress color="blue" value={75} />
      <Progress color="red" value={75} />
      <Progress color="green" value={75} />
      <Progress color="yellow" value={75} />
      <Progress color="purple" value={75} />
      <Progress color="gray" value={75} />
      <Progress color="dark" value={75} />
      <Progress color="black" value={75} />
    </>
  );
};

const Sizes = () => {
  return (
    <>
      <Progress size="xs" value={75} />
      <Progress size="sm" value={75} />
      <Progress size="md" value={75} />
      <Progress size="lg" value={75} />
    </>
  );
};

const Radiuses = () => {
  return (
    <>
      <Progress radius="none" value={75} />
      <Progress radius="sm" value={75} />
      <Progress radius="base" value={75} />
      <Progress radius="md" value={75} />
      <Progress radius="lg" value={75} />
      <Progress radius="full" value={75} />
    </>
  );
};

const Shadows = () => {
  return (
    <>
      <Progress shadow="none" value={75} />
      <Progress shadow="sm" value={75} />
      <Progress shadow="base" value={75} />
      <Progress shadow="md" value={75} />
    </>
  );
};

const Stripes = () => {
  return (
    <>
      <Progress striped color="blue" value={75} />
      <Progress striped color="red" value={75} />
      <Progress striped color="green" value={75} />
      <Progress striped color="yellow" value={75} />
      <Progress striped color="purple" value={75} />
      <Progress striped color="gray" value={75} />
      <Progress striped color="dark" value={75} />
      <Progress striped color="black" value={75} />
    </>
  );
};

const Animated = () => {
  return (
    <>
      <Progress striped animated color="blue" value={75} />
      <Progress striped animated color="red" value={75} />
      <Progress striped animated color="green" value={75} />
      <Progress striped animated color="yellow" value={75} />
      <Progress striped animated color="purple" value={75} />
      <Progress striped animated color="gray" value={75} />
      <Progress striped animated color="dark" value={75} />
      <Progress striped animated color="black" value={75} />
    </>
  );
};

const Label = () => {
  return (
    <>
      <Progress label="This is an extra small progress bar" size="xs" value={75} />
      <Progress label="This is a small progress bar" size="sm" value={75} />
      <Progress label="This is a medium progress bar" size="md" value={75} />
      <Progress label="This is a large progress bar" size="lg" value={75} />
    </>
  );
};

const Description = () => {
  return (
    <>
      <Progress description="This is an extra small progress bar" size="xs" value={75} />
      <Progress description="This is a small progress bar" size="sm" value={75} />
      <Progress description="This is a medium progress bar" size="md" value={75} />
      <Progress description="This is a large progress bar" size="lg" value={75} />
    </>
  );
};

const Value = () => {
  return (
    <>
      <Progress showValue size="xs" value={75} />
      <Progress showValue size="sm" value={75} />
      <Progress showValue size="md" value={75} />
      <Progress showValue size="lg" value={75} />
    </>
  );
};

const ValueLabel = () => {
  return (
    <>
      <Progress showValue label="This is an extra small progress bar" size="xs" value={75} />
      <Progress showValue label="This is an small progress bar" size="sm" value={75} />
    </>
  );
};
