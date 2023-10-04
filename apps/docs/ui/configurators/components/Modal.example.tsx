import { Button, Card, FormControl, Modal, ModalProps } from '@idb-dab/ui-core';
import { useState } from 'react';
import * as React from 'react';
import { X } from '@phosphor-icons/react';

export const ModalCode = (props: any) => {
  const {
    closeOnEscape,
    mode,
    overlayBlur,
    overlayCloseOnClick,
    overlayColor,
    overlayOpacity,
    position,
    radius,
    shadow,
    size,
  } = props;

  const defaultProps = {
    closeOnEscape: true,
    mode: 'dialog',
    open: false,
    overlayBlur: 'sm',
    overlayCloseOnClick: true,
    overlayColor: 'dark',
    overlayOpacity: '50',
    position: 'top',
    radius: 'md',
    shadow: 'base',
    size: 'sm',
  };

  const attributes = [
    closeOnEscape !== defaultProps.closeOnEscape ? `closeOnEscape={${closeOnEscape}}` : null,
    mode !== defaultProps.mode ? `mode="${mode}"` : null,
    overlayBlur !== defaultProps.overlayBlur ? `overlayBlur="${overlayBlur}"` : null,
    overlayCloseOnClick !== defaultProps.overlayCloseOnClick
      ? `overlayCloseOnClick="${overlayCloseOnClick}"`
      : null,
    overlayOpacity !== defaultProps.overlayOpacity ? `overlayOpacity="${overlayOpacity}"` : null,
    overlayColor !== defaultProps.overlayColor ? `overlayColor="${overlayColor}"` : null,
    position !== defaultProps.position ? `position="${position}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Modal } from '@idb-dab/ui-core';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal${attributes.join(' ')} open={open} onClose={() => setOpen(false)}>
        <Card>
          // ...
        </Card>
      </Modal>

      <Button onClick={() => setOpen(true)}>Click me!</Button>
    </>
  );
}
`.trim();
};

export const ModalExample = (props: ModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal {...props} open={open} onClose={() => setOpen(false)}>
        <Card className="w-full">
          <Card.Header className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="text-xl text-gray-800 font-bold">Sign in</h3>
              <span className="text-gray-500">Enter your credentials</span>
            </div>

            <Button onClick={() => setOpen(false)} size="sm" color="white" icon>
              <X />
            </Button>
          </Card.Header>

          <Card.Body>
            <div className="flex flex-col space-y-4 mx-auto">
              <FormControl>
                <FormControl.Label className="text-sm" required>
                  Email
                </FormControl.Label>
                <FormControl.Input tone="solid" type="email" placeholder="Email..." />
              </FormControl>

              <FormControl>
                <FormControl.Label className="text-sm" required>
                  Password
                </FormControl.Label>
                <FormControl.Input tone="solid" type="password" placeholder="Password..." />
              </FormControl>
            </div>
          </Card.Body>

          <Card.Footer>
            <div className="flex w-full space-x-2">
              <Button className="w-full" color="black" onClick={() => setOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-100 mr-1.5"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M340.7 228.7L217.9 105.9c-6.4-6.4-15-9.9-24-9.9c-18.7 0-33.9 15.2-33.9 33.9l0 62.1L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0 0 62.1c0 18.7 15.2 33.9 33.9 33.9c9 0 17.6-3.6 24-9.9L340.7 283.3c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3z" />
                  <path
                    className="opacity-75"
                    d="M320 448c0-17.7 14.3-32 32-32l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32z"
                  />
                </svg>
                Sign in
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Modal>

      <Button onClick={() => setOpen(true)}>Click me!</Button>
    </>
  );
};
