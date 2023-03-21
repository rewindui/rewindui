import {
  ModalSize,
  Modal,
  ModalProps,
  Card,
  Button,
  FormControl,
  Text,
} from '@rewindui/rewindui-core';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import * as React from 'react';
import { XCircle } from '@phosphor-icons/react';

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
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <Card size={'md'} className="w-full">
          <Card.Header
            className="bg-gray-50/50"
            actions={
              <Button onClick={() => setOpen(false)} size="xs" color="gray" icon={true}>
                <XCircle />
              </Button>
            }
          >
            Privacy Policy
          </Card.Header>
          <Card.Body className="max-h-[200px] overflow-y-scroll space-y-3">
            <FormControl>
              <FormControl.Label>Email Address</FormControl.Label>
              <FormControl.Input placeholder="Enter your business email" withRing />
            </FormControl>
            <Text className="block">
              At [Company], we are committed to protecting your privacy and personal information. We
              collect information about you when you use our services and when you provide it to us
              directly. This information is used to provide, maintain, and improve our services, as
              well as to develop new features and protect the rights and safety of our users and the
              public.
            </Text>

            <Text className="block">
              We may share your information with third parties in certain circumstances, such as
              with your consent, to service providers and partners, or to comply with legal
              obligations. We take steps to secure your information, but cannot guarantee its
              complete protection.
            </Text>

            <Text className="block">
              We respect your right to privacy and will allow you to control your personal
              information. You may access and update your information, or opt out of certain
              communications, at any time by contacting us. If you have any concerns about how we
              handle your information, please don't hesitate to reach out. We are committed to
              addressing any issues and to continually improving our privacy practices.
            </Text>
          </Card.Body>
          <Card.Footer className="bg-gray-50/50 justify-end space-x-2">
            <Button onClick={() => setOpen(false)} size="md" tone="transparent" color="gray">
              Cancel
            </Button>
            <Button
              className="font-semibold"
              onClick={() => setOpen(false)}
              size="md"
              color="blue"
              tone="light"
            >
              Accept
            </Button>
          </Card.Footer>
        </Card>
      </Modal>

      <Button onClick={() => setOpen(true)}>Open</Button>
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
