import { Button, Card, Drawer, DrawerProps, FormControl } from '@idb-dab/ui-core';
import { useState } from 'react';
import * as React from 'react';
import { X } from '@phosphor-icons/react';

export const DrawerCode = (props: any) => {
  const {
    closeOnEscape,
    overlayBlur,
    overlayCloseOnClick,
    overlayColor,
    overlayOpacity,
    position,
    shadow,
  } = props;

  const defaultProps = {
    closeOnEscape: true,
    open: false,
    overlayBlur: 'sm',
    overlayCloseOnClick: true,
    overlayColor: 'dark',
    overlayOpacity: '50',
    position: 'right',
    shadow: 'base',
  };

  const attributes = [
    closeOnEscape !== defaultProps.closeOnEscape ? `closeOnEscape={${closeOnEscape}}` : null,
    overlayBlur !== defaultProps.overlayBlur ? `overlayBlur="${overlayBlur}"` : null,
    overlayCloseOnClick !== defaultProps.overlayCloseOnClick
      ? `overlayCloseOnClick="${overlayCloseOnClick}"`
      : null,
    overlayOpacity !== defaultProps.overlayOpacity ? `overlayOpacity="${overlayOpacity}"` : null,
    overlayColor !== defaultProps.overlayColor ? `overlayColor="${overlayColor}"` : null,
    position !== defaultProps.position ? `position="${position}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Drawer } from '@idb-dab/ui-core';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer${attributes.join(' ')} open={open} onClose={() => setOpen(false)}>
        <Card className="w-full" bordered={false}>
          <Card.Header className="bg-slate-50">
            <h3 className="text-lg text-slate-800 font-medium">Login</h3>

            <Button variant="secondary" size="sm" onClick={() => setOpen(false)} icon>
              <X size={16} />
            </Button>
          </Card.Header>

          <Card.Body>
            <div className="flex flex-col space-y-4 md:w-[30rem] mx-auto">
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
                Login
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Drawer>

      <Button onClick={() => setOpen(true)}>Click me!</Button>
    </>
  );
}
`.trim();
};

export const DrawerExample = (props: DrawerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer {...props} open={open} onClose={() => setOpen(false)}>
        <Card className="w-full" bordered={false}>
          <Card.Header className="bg-slate-50">
            <h3 className="text-lg text-slate-800 font-medium">Login</h3>

            <Button variant="secondary" size="sm" onClick={() => setOpen(false)} icon>
              <X size={16} />
            </Button>
          </Card.Header>

          <Card.Body>
            <div className="flex flex-col space-y-4 md:w-[30rem] mx-auto">
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
                Login
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Drawer>

      <Button onClick={() => setOpen(true)}>Click me!</Button>
    </>
  );
};
