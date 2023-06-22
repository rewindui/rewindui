import { Button, Dropdown, DropdownProps } from '@rewind-ui/core';
import * as React from 'react';
import { ChatCircleText, Gear, SignOut, Trash } from '@phosphor-icons/react';

export const DropdownCode = (props: any) => {
  const {
    chevronRotation,
    color,
    initiallyOpen,
    itemColor,
    mode,
    placement,
    radius,
    shadow,
    size,
    tone,
    trigger,
    withChevron,
  } = props;

  const defaultProps: Partial<DropdownProps> = {
    chevronRotation: true,
    color: 'white',
    initiallyOpen: true,
    itemColor: 'gray',
    mode: 'spacey',
    placement: 'bottom',
    radius: 'md',
    shadow: 'none',
    size: 'sm',
    tone: 'solid',
    trigger: 'click',
    withChevron: true,
  };

  const attributes = [
    chevronRotation !== defaultProps.chevronRotation
      ? `chevronRotation={${chevronRotation}}`
      : null,
    color !== defaultProps.color ? `color="${color}"` : null,
    initiallyOpen !== defaultProps.initiallyOpen ? `initiallyOpen={${initiallyOpen}}` : null,
    itemColor !== defaultProps.itemColor ? `itemColor="${itemColor}"` : null,
    mode !== defaultProps.mode ? `mode="${mode}"` : null,
    placement !== defaultProps.placement ? `placement="${placement}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    trigger !== defaultProps.trigger ? `trigger="${trigger}"` : null,
    withChevron !== defaultProps.withChevron ? `withChevron={${withChevron}}` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Dropdown, Button } from '@rewind-ui/core';

function App() {
  return (
    <Dropdown${attributes.join(' ')}>
      <Dropdown.Trigger>
        <Button>
          Menu
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Label>Application</Dropdown.Label>
        <Dropdown.Divider />
        <Dropdown.Item>
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          Messages
        </Dropdown.Item>
        <Dropdown.Label>Danger Zone</Dropdown.Label>
        <Dropdown.Divider />
        <Dropdown.Item disabled>
          Delete my account
        </Dropdown.Item>
        <Dropdown.Item>
          Logout
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
`.trim();
};

export const DropdownExample = (props: DropdownProps) => {
  return (
    <Dropdown {...props} outsidePress={false} initiallyOpen={true}>
      <Dropdown.Trigger>
        <Button>Menu</Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Label>Application</Dropdown.Label>
        <Dropdown.Divider />
        <Dropdown.Item>
          <Gear size={20} weight="duotone" className="mr-1.5" />
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          <ChatCircleText size={20} weight="duotone" className="mr-1.5" />
          Messages
        </Dropdown.Item>
        <Dropdown.Label>Danger Zone</Dropdown.Label>
        <Dropdown.Divider />
        <Dropdown.Item disabled>
          <Trash size={20} weight="duotone" className="mr-1.5" />
          Delete my account
        </Dropdown.Item>
        <Dropdown.Item>
          <SignOut size={20} weight="duotone" className="mr-1.5" />
          Logout
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
};
