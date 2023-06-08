import { Button, Card, Drawer, DrawerProps, Text, FormControl } from '@rewind-ui/core';
import { useState } from 'react';
import * as React from 'react';
import { X } from '@phosphor-icons/react';

export type DrawerShowcaseProps = {
  showcase:
    | 'positions'
    | 'shadows'
    | 'close-on-click'
    | 'close-on-escape'
    | 'examples-card'
    | 'examples-form';
};

export const DrawerShowcase = (props: DrawerShowcaseProps) => {
  const { showcase } = props;

  const components = {
    positions: <Positions />,
    shadows: <Shadows />,
    'close-on-click': <CloseOnClick />,
    'close-on-escape': <CloseOnEscape />,
    'examples-card': <ExamplesCard />,
    'examples-form': <ExamplesForm />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const DrawerTemplate = (props: DrawerProps) => {
  return (
    <Drawer {...props}>
      <div className="flex flex-col p-16 space-y-2">
        <p>I am a drawer!</p>

        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
      </div>
    </Drawer>
  );
};

const Positions = () => {
  const [topOpen, setTopOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <>
      <DrawerTemplate position="top" open={topOpen} onClose={() => setTopOpen(false)} />
      <DrawerTemplate position="bottom" open={bottomOpen} onClose={() => setBottomOpen(false)} />
      <DrawerTemplate position="left" open={leftOpen} onClose={() => setLeftOpen(false)} />
      <DrawerTemplate position="right" open={rightOpen} onClose={() => setRightOpen(false)} />

      <Button onClick={() => setTopOpen(true)}>Top</Button>
      <Button onClick={() => setBottomOpen(true)}>Bottom</Button>
      <Button onClick={() => setLeftOpen(true)}>Left</Button>
      <Button onClick={() => setRightOpen(true)}>Right</Button>
    </>
  );
};

const Shadows = () => {
  const [noneOpen, setNoneOpen] = useState(false);
  const [smOpen, setSmOpen] = useState(false);
  const [baseOpen, setBaseOpen] = useState(false);
  const [mdOpen, setMdOpen] = useState(false);
  const [lgOpen, setLgOpen] = useState(false);
  const [xlOpen, setXlOpen] = useState(false);

  return (
    <>
      <DrawerTemplate
        shadow="none"
        open={noneOpen}
        overlayColor="white"
        onClose={() => setNoneOpen(false)}
      />
      <DrawerTemplate
        shadow="sm"
        open={smOpen}
        overlayColor="white"
        onClose={() => setSmOpen(false)}
      />
      <DrawerTemplate
        shadow="base"
        open={baseOpen}
        overlayColor="white"
        onClose={() => setBaseOpen(false)}
      />
      <DrawerTemplate
        shadow="md"
        open={mdOpen}
        overlayColor="white"
        onClose={() => setMdOpen(false)}
      />
      <DrawerTemplate
        shadow="lg"
        open={lgOpen}
        overlayColor="white"
        onClose={() => setLgOpen(false)}
      />
      <DrawerTemplate
        shadow="xl"
        open={xlOpen}
        overlayColor="white"
        onClose={() => setXlOpen(false)}
      />

      <Button onClick={() => setNoneOpen(true)}>None</Button>
      <Button onClick={() => setSmOpen(true)}>Small</Button>
      <Button onClick={() => setBaseOpen(true)}>Base</Button>
      <Button onClick={() => setMdOpen(true)}>Medium</Button>
      <Button onClick={() => setLgOpen(true)}>Large</Button>
      <Button onClick={() => setXlOpen(true)}>Extra large</Button>
    </>
  );
};

const CloseOnClick = () => {
  const [enabledOpen, setEnabledOpen] = useState(false);
  const [disabledOpen, setDisabledOpen] = useState(false);

  return (
    <>
      <DrawerTemplate
        overlayCloseOnClick={true}
        open={enabledOpen}
        onClose={() => setEnabledOpen(false)}
      />
      <DrawerTemplate
        overlayCloseOnClick={false}
        open={disabledOpen}
        onClose={() => setDisabledOpen(false)}
      />

      <Button onClick={() => setEnabledOpen(true)}>Enabled</Button>
      <Button onClick={() => setDisabledOpen(true)}>Disabled</Button>
    </>
  );
};

const CloseOnEscape = () => {
  const [enabledOpen, setEnabledOpen] = useState(false);
  const [disabledOpen, setDisabledOpen] = useState(false);

  return (
    <>
      <DrawerTemplate
        closeOnEscape={true}
        open={enabledOpen}
        onClose={() => setEnabledOpen(false)}
      />
      <DrawerTemplate
        closeOnEscape={false}
        open={disabledOpen}
        onClose={() => setDisabledOpen(false)}
      />

      <Button onClick={() => setEnabledOpen(true)}>Enabled</Button>
      <Button onClick={() => setDisabledOpen(true)}>Disabled</Button>
    </>
  );
};

const ExamplesCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer open={open} size="md" onClose={() => setOpen(false)}>
        <Card>
          <Card.Header
            className="bg-gray-50/50"
            actions={
              <Button onClick={() => setOpen(false)} size="xs" color="gray" icon={true}>
                <X />
              </Button>
            }
          >
            Privacy Policy
          </Card.Header>
          <Card.Body className="max-h-[300px] overflow-auto space-y-3">
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
            <Button onClick={() => setOpen(false)} size="md" color="white">
              Cancel
            </Button>
            <Button className="font-semibold" onClick={() => setOpen(false)} size="md">
              Accept
            </Button>
          </Card.Footer>
        </Card>
      </Drawer>

      <Button onClick={() => setOpen(true)}>Open</Button>
    </>
  );
};

const ExamplesForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer open={open} size="sm" onClose={() => setOpen(false)}>
        <Card size="sm" className="w-full">
          <Card.Header
            className="bg-gray-50/50 font-medium"
            actions={
              <Button onClick={() => setOpen(false)} size="xs" color="gray" icon={true}>
                <X />
              </Button>
            }
          >
            Sign in
          </Card.Header>
          <Card.Body className="space-y-3">
            <FormControl size="sm">
              <FormControl.Label required>Email address</FormControl.Label>
              <FormControl.Input type="email" tone="solid" placeholder="Enter your email..." />
            </FormControl>

            <FormControl size="sm">
              <FormControl.Label required>Password</FormControl.Label>
              <FormControl.Input
                type="password"
                tone="solid"
                placeholder="Enter your password..."
              />
            </FormControl>
          </Card.Body>
          <Card.Footer className="bg-gray-50/50 justify-end space-x-2">
            <Button onClick={() => setOpen(false)} size="sm" color="white">
              Close
            </Button>
            <Button className="font-semibold" onClick={() => setOpen(false)} size="sm">
              Login
            </Button>
          </Card.Footer>
        </Card>
      </Drawer>

      <Button onClick={() => setOpen(true)}>Open</Button>
    </>
  );
};
