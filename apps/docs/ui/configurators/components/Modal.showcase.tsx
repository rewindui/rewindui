import { Button, Card, Modal, ModalProps, Text, FormControl } from '@rewind-ui/core';
import { useState } from 'react';
import * as React from 'react';
import { X } from '@phosphor-icons/react';

export type ModalShowcaseProps = {
  showcase:
    | 'modes'
    | 'colors'
    | 'sizes'
    | 'radiuses'
    | 'shadows'
    | 'close-on-click'
    | 'close-on-escape'
    | 'multi-modal'
    | 'examples-card'
    | 'examples-form';
};

export const ModalShowcase = (props: ModalShowcaseProps) => {
  const { showcase } = props;

  const components = {
    modes: <Modes />,
    colors: <Colors />,
    sizes: <Sizes />,
    radiuses: <Radiuses />,
    shadows: <Shadows />,
    'close-on-click': <CloseOnClick />,
    'close-on-escape': <CloseOnEscape />,
    'multi-modal': <MultiModal />,
    'examples-card': <ExamplesCard />,
    'examples-form': <ExamplesForm />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const ModalTemplate = (props: ModalProps) => {
  return (
    <Modal {...props}>
      <div className="flex flex-col p-10 space-y-2">
        <p>I am a modal!</p>

        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

const Modes = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  return (
    <>
      <ModalTemplate mode="dialog" open={dialogOpen} onClose={() => setDialogOpen(false)} />
      <ModalTemplate
        mode="fullscreen"
        open={fullscreenOpen}
        onClose={() => setFullscreenOpen(false)}
      />

      <Button onClick={() => setDialogOpen(true)}>Dialog</Button>
      <Button onClick={() => setFullscreenOpen(true)}>Fullscreen</Button>
    </>
  );
};

const Colors = () => {
  const [whiteOpen, setWhiteOpen] = useState(false);
  const [grayOpen, setGrayOpen] = useState(false);
  const [slateOpen, setSlateOpen] = useState(false);
  const [zincOpen, setZincOpen] = useState(false);

  return (
    <>
      <ModalTemplate color="white" open={whiteOpen} onClose={() => setWhiteOpen(false)} />
      <ModalTemplate color="gray" open={grayOpen} onClose={() => setGrayOpen(false)} />
      <ModalTemplate color="slate" open={slateOpen} onClose={() => setSlateOpen(false)} />
      <ModalTemplate color="zinc" open={zincOpen} onClose={() => setZincOpen(false)} />

      <Button onClick={() => setWhiteOpen(true)}>White</Button>
      <Button onClick={() => setGrayOpen(true)}>Gray</Button>
      <Button onClick={() => setSlateOpen(true)}>Slate</Button>
      <Button onClick={() => setZincOpen(true)}>Zinc</Button>
    </>
  );
};

const Sizes = () => {
  const [autoOpen, setAutoOpen] = useState(false);
  const [smOpen, setSmOpen] = useState(false);
  const [mdOpen, setMdOpen] = useState(false);
  const [lgOpen, setLgOpen] = useState(false);
  const [xlOpen, setXlOpen] = useState(false);
  const [screenOpen, setScreenOpen] = useState(false);

  return (
    <>
      <ModalTemplate size="auto" open={autoOpen} onClose={() => setAutoOpen(false)} />
      <ModalTemplate size="sm" open={smOpen} onClose={() => setSmOpen(false)} />
      <ModalTemplate size="md" open={mdOpen} onClose={() => setMdOpen(false)} />
      <ModalTemplate size="lg" open={lgOpen} onClose={() => setLgOpen(false)} />
      <ModalTemplate size="xl" open={xlOpen} onClose={() => setXlOpen(false)} />
      <ModalTemplate size="screen" open={screenOpen} onClose={() => setScreenOpen(false)} />

      <Button onClick={() => setAutoOpen(true)}>Auto</Button>
      <Button onClick={() => setSmOpen(true)}>Small</Button>
      <Button onClick={() => setMdOpen(true)}>Medium</Button>
      <Button onClick={() => setLgOpen(true)}>Large</Button>
      <Button onClick={() => setXlOpen(true)}>Extra large</Button>
      <Button onClick={() => setScreenOpen(true)}>Screen</Button>
    </>
  );
};

const Radiuses = () => {
  const [noneOpen, setNoneOpen] = useState(false);
  const [smOpen, setSmOpen] = useState(false);
  const [baseOpen, setBaseOpen] = useState(false);
  const [mdOpen, setMdOpen] = useState(false);
  const [lgOpen, setLgOpen] = useState(false);

  return (
    <>
      <ModalTemplate radius="none" open={noneOpen} onClose={() => setNoneOpen(false)} />
      <ModalTemplate radius="sm" open={smOpen} onClose={() => setSmOpen(false)} />
      <ModalTemplate radius="base" open={baseOpen} onClose={() => setBaseOpen(false)} />
      <ModalTemplate radius="md" open={mdOpen} onClose={() => setMdOpen(false)} />
      <ModalTemplate radius="lg" open={lgOpen} onClose={() => setLgOpen(false)} />

      <Button onClick={() => setNoneOpen(true)}>None</Button>
      <Button onClick={() => setSmOpen(true)}>Small</Button>
      <Button onClick={() => setBaseOpen(true)}>Base</Button>
      <Button onClick={() => setMdOpen(true)}>Medium</Button>
      <Button onClick={() => setLgOpen(true)}>Large</Button>
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
      <ModalTemplate
        shadow="none"
        open={noneOpen}
        overlayColor="white"
        onClose={() => setNoneOpen(false)}
      />
      <ModalTemplate
        shadow="sm"
        open={smOpen}
        overlayColor="white"
        onClose={() => setSmOpen(false)}
      />
      <ModalTemplate
        shadow="base"
        open={baseOpen}
        overlayColor="white"
        onClose={() => setBaseOpen(false)}
      />
      <ModalTemplate
        shadow="md"
        open={mdOpen}
        overlayColor="white"
        onClose={() => setMdOpen(false)}
      />
      <ModalTemplate
        shadow="lg"
        open={lgOpen}
        overlayColor="white"
        onClose={() => setLgOpen(false)}
      />
      <ModalTemplate
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
      <ModalTemplate
        overlayCloseOnClick={true}
        open={enabledOpen}
        onClose={() => setEnabledOpen(false)}
      />
      <ModalTemplate
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
      <ModalTemplate
        closeOnEscape={true}
        open={enabledOpen}
        onClose={() => setEnabledOpen(false)}
      />
      <ModalTemplate
        closeOnEscape={false}
        open={disabledOpen}
        onClose={() => setDisabledOpen(false)}
      />

      <Button onClick={() => setEnabledOpen(true)}>Enabled</Button>
      <Button onClick={() => setDisabledOpen(true)}>Disabled</Button>
    </>
  );
};

const MultiModal = () => {
  const [parentOpen, setParentOpen] = useState(false);
  const [firstChildOpen, setFirstChildOpen] = useState(false);
  const [secondChildOpen, setSecondChildOpen] = useState(false);

  return (
    <>
      <Modal.Group>
        <Modal open={parentOpen} onClose={() => setParentOpen(false)}>
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

        <Modal open={firstChildOpen} onClose={() => setFirstChildOpen(false)}>
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

        <Modal open={secondChildOpen} onClose={() => setSecondChildOpen(false)}>
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

const ExamplesCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} size="md" onClose={() => setOpen(false)}>
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

const ExamplesForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} size="sm" onClose={() => setOpen(false)}>
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
            <Button onClick={() => setOpen(false)} size="sm" tone="transparent" color="gray">
              Close
            </Button>
            <Button
              className="font-semibold"
              onClick={() => setOpen(false)}
              size="sm"
              color="blue"
              tone="light"
            >
              Login
            </Button>
          </Card.Footer>
        </Card>
      </Modal>

      <Button onClick={() => setOpen(true)}>Open</Button>
    </>
  );
};
