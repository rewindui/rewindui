import { Button } from '@idb-dab/ui-core';
import { useFade } from '@idb-dab/ui-core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { View, ViewGroup } from '../components/View';

const meta: Meta = {
  title: 'Hooks/Fade',
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

const DefaultTemplate: Story<null> = (args) => {
  const [visibleRed, setVisibleRed] = React.useState(true);
  const [visibleGreen, setVisibleGreen] = React.useState(true);
  const [visibleBlue, setVisibleBlue] = React.useState(true);
  const redRef = React.useRef<HTMLDivElement>(null);
  const greenRef = React.useRef<HTMLDivElement>(null);
  const blueRef = React.useRef<HTMLDivElement>(null);
  useFade({ ref: redRef, visible: visibleRed });
  useFade({ ref: greenRef, visible: visibleGreen });
  useFade({ ref: blueRef, visible: visibleBlue });

  return (
    <ViewGroup>
      <View prop="Controls">
        <Button color="red" onClick={() => setVisibleRed(!visibleRed)}>
          Toggle red
        </Button>
        <Button color="green" onClick={() => setVisibleGreen(!visibleGreen)}>
          Toggle green
        </Button>
        <Button color="blue" onClick={() => setVisibleBlue(!visibleBlue)}>
          Toggle blue
        </Button>
      </View>

      <View prop="Example">
        <div ref={redRef} className="w-20 h-20 rounded bg-red-500 flex shadow" />
        <div ref={greenRef} className="w-20 h-20 rounded bg-green-500 flex shadow" />
        <div ref={blueRef} className="w-20 h-20 rounded bg-blue-500 flex shadow" />
      </View>
    </ViewGroup>
  );
};

export const Default = DefaultTemplate.bind({});
