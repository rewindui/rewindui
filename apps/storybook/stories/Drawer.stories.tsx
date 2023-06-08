import { Drawer, DrawerProps, Button, DrawerPosition } from '@rewind-ui/core';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import * as React from 'react';

const positions: DrawerPosition[] = ['top', 'right', 'bottom', 'left'];

const meta: Meta = {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    position: {
      options: positions,
      control: { type: 'radio' },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    onClose: {
      table: {
        disable: true,
      },
    },
    open: {
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

const Template: Story<DrawerProps> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer {...args} open={open} onClose={() => setOpen(false)}>
        <p className="p-10">Some content.</p>
      </Drawer>

      <Button onClick={() => setOpen(true)}>Open</Button>
    </>
  );
};

const DefaultTemplate: Story<DrawerProps> = (args) => {
  return <Template {...args} />;
};

export const Default = DefaultTemplate.bind({});
