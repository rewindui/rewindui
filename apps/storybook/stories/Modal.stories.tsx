import { ModalSize, Modal, ModalProps, Card, Button, Text } from '@idb-dab/ui-core';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import * as React from 'react';

const sizes: ModalSize[] = ['auto', 'sm', 'md', 'lg', 'xl', 'screen'];

const meta: Meta = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    size: {
      options: sizes,
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

const Template: Story<ModalProps> = (args) => {
  const [parentOpen, setParentOpen] = useState(false);
  const [firstChildOpen, setFirstChildOpen] = useState(false);
  const [secondChildOpen, setSecondChildOpen] = useState(false);

  return (
    <>
      <Modal.Group>
        <Modal {...args} open={parentOpen} onClose={() => setParentOpen(false)}>
          <Card className="w-full">
            <Card.Body>
              <h1>This is a parent modal</h1>
            </Card.Body>

            <Card.Footer className="bg-gray-50/50 justify-end space-x-2">
              <Button variant="secondary" onClick={() => setParentOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setFirstChildOpen(true)}>Next</Button>
            </Card.Footer>
          </Card>
        </Modal>

        <Modal {...args} open={firstChildOpen} onClose={() => setFirstChildOpen(false)}>
          <Card className="w-full">
            <Card.Body>
              <h1>This is a child modal</h1>
            </Card.Body>

            <Card.Footer className="bg-gray-50/50 justify-end space-x-2">
              <Button variant="secondary" onClick={() => setFirstChildOpen(false)}>
                Back
              </Button>
              <Button onClick={() => setSecondChildOpen(true)}>Next</Button>
            </Card.Footer>
          </Card>
        </Modal>

        <Modal {...args} open={secondChildOpen} onClose={() => setSecondChildOpen(false)}>
          <Card className="w-full">
            <Card.Body>
              <h1>This is a second child modal</h1>
            </Card.Body>

            <Card.Footer className="bg-gray-50/50 justify-end space-x-2">
              <Button variant="secondary" onClick={() => setSecondChildOpen(false)}>
                Back
              </Button>
            </Card.Footer>
          </Card>
        </Modal>
      </Modal.Group>

      <Button onClick={() => setParentOpen(true)}>Open</Button>
    </>
  );
};

const DefaultTemplate: Story<ModalProps> = (args) => {
  return <Template {...args} />;
};

export const Default = DefaultTemplate.bind({});

const FullscreenTemplate: Story<ModalProps> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal {...args} mode="fullscreen" radius="none" open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col h-full space-y-2 p-2">
          <Text>This is a fullscreen modal</Text>

          <Button onClick={() => setOpen(false)} size="md" color="gray">
            Close
          </Button>
        </div>
      </Modal>

      <Button onClick={() => setOpen(true)}>Open</Button>
    </>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Fullscreen = FullscreenTemplate.bind({});
