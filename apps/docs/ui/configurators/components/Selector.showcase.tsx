import { Button, Selector, Tabs, Tooltip } from '@idb-dab/ui-core';
import { useRef } from 'react';
import * as React from 'react';
import { SunDim, MoonStars } from '@phosphor-icons/react';

export type SelectorShowcaseProps = {
  showcase:
    | 'tones-solid'
    | 'tones-light'
    | 'colors-multiple'
    | 'sizes'
    | 'radiuses'
    | 'shadows'
    | 'full-width'
    | 'orientation'
    | 'animation'
    | 'separator'
    | 'border-background'
    | 'extended-composition'
    | 'icons'
    | 'ref';
};

export const SelectorShowcase = (props: SelectorShowcaseProps) => {
  const { showcase } = props;

  const components = {
    'tones-solid': <TonesSolid />,
    'tones-light': <TonesLight />,
    'colors-multiple': <ColorsMultiple />,
    sizes: <Sizes />,
    radiuses: <Radiuses />,
    shadows: <Shadows />,
    'full-width': <FullWidth />,
    orientation: <Orientation />,
    animation: <Animation />,
    separator: <Separator />,
    'separator-custom': <SeparatorCustom />,
    'border-background': <BorderBackground />,
    'extended-composition': <ExtendedComposition />,
    icons: <Icons />,
    ref: <Ref />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const TonesSolid = () => {
  return (
    <>
      <Selector color="white" tone="solid" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="blue" tone="solid" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="red" tone="solid" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="green" tone="solid" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="yellow" tone="solid" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="purple" tone="solid" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="gray" tone="solid" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="dark" tone="solid" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="black" tone="solid" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
    </>
  );
};

const TonesLight = () => {
  return (
    <>
      <Selector color="white" tone="light" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="blue" tone="light" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="red" tone="light" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="green" tone="light" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="yellow" tone="light" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="purple" tone="light" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="gray" tone="light" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="dark" tone="light" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector color="black" tone="light" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
    </>
  );
};

const ColorsMultiple = () => {
  return (
    <>
      <Selector value="1">
        <Selector.Tab label="White" color="white" anchor="1" />
        <Selector.Tab label="Default" anchor="2" />
        <Selector.Tab label="Red" color="red" anchor="3" />
        <Selector.Tab label="Green" color="green" anchor="4" />
      </Selector>
    </>
  );
};

const Sizes = () => {
  return (
    <>
      <Selector size="xs" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector size="sm" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector size="md" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector size="lg" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
    </>
  );
};

const Radiuses = () => {
  return (
    <>
      <Selector radius="none" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector radius="sm" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector radius="base" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector radius="md" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector radius="lg" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector radius="full" value="1" withSeparator={false}>
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
    </>
  );
};

const Shadows = () => {
  return (
    <>
      <Selector shadow="none" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector shadow="sm" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector shadow="base" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector shadow="md" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector shadow="lg" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector shadow="xl" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
    </>
  );
};

const Orientation = () => {
  return (
    <>
      <Selector orientation="horizontal" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector orientation="vertical" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
    </>
  );
};

const FullWidth = () => {
  return (
    <>
      <Selector orientation="horizontal" fullWidth={true} value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector orientation="horizontal" fullWidth={false} value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector orientation="vertical" fullWidth={true} value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector orientation="vertical" fullWidth={false} value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
    </>
  );
};

const Animation = () => {
  return (
    <>
      <Selector withAnimation={true} value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector withAnimation={false} value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
    </>
  );
};

const Separator = () => {
  return (
    <>
      <Selector withSeparator={true} value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector withSeparator={false} value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
    </>
  );
};

const SeparatorCustom = () => {
  return (
    <>
      <Selector
        separator={
          <span className="last-of-type:hidden self-center mx-1 w-1 h-1 bg-gray-200 rounded-full" />
        }
        orientation="horizontal"
        value="1"
      >
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector
        separator={
          <span className="last-of-type:hidden self-center mx-1 w-1 h-6 bg-gray-200 rounded-full" />
        }
        orientation="horizontal"
        value="1"
      >
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
      <Selector
        separator={
          <span className="last-of-type:hidden self-center mx-1 w-8 h-1 bg-gray-200 rounded-full" />
        }
        orientation="vertical"
        value="1"
      >
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
    </>
  );
};

const BorderBackground = () => {
  return (
    <>
      <Selector className="border border-gray-100 bg-white" shadow="none" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
      </Selector>
    </>
  );
};

const ExtendedComposition = () => {
  return (
    <>
      <Selector color="white" value="1">
        <Selector.Tab label="Apple" anchor="1" />
        <Selector.Tab label="Banana" anchor="2" />
        <Selector.Tab
          label={
            <Tooltip
              label="This is a react node with a tooltip"
              tone="solid"
              color="dark"
              offset={15}
              shadow="base"
            >
              <span className="whitespace-nowrap underline underline-offset-2 decoration-2 decoration-pink-500">
                React Node
              </span>
            </Tooltip>
          }
          anchor="3"
        />
      </Selector>
    </>
  );
};

const Icons = () => {
  return (
    <>
      <Selector
        radius="full"
        className="bg-gray-50 border border-gray-100"
        shadow="none"
        separator={<span className="last-of-type:hidden self-center w-1 h-1 bg-transparent" />}
        value="1"
      >
        <Selector.Tab color="yellow" label={<SunDim size={16} weight="duotone" />} anchor="1" />
        <Selector.Tab color="dark" label={<MoonStars size={16} weight="duotone" />} anchor="2" />
      </Selector>
    </>
  );
};

const Ref = () => {
  const ref1 = useRef<HTMLButtonElement>(null);
  const ref2 = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Button
          onClick={() => {
            ref1.current?.click();
          }}
        >
          Activate Tab 1
        </Button>
        <Button
          onClick={() => {
            ref2.current?.click();
          }}
        >
          Activate Tab 2
        </Button>
      </div>

      <Selector value="tab-1">
        <Selector.Tab ref={ref1} label="Tab 1" anchor="tab-1" />
        <Selector.Tab ref={ref2} label="Tab 2" anchor="tab-2" />
      </Selector>
    </div>
  );
};
