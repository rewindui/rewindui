import { Button } from '@components/Button';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Dropdown } from '.';

describe('Dropdown', () => {
  it('should render', () => {
    render(
      <Dropdown>
        <Dropdown.Trigger>
          <Button>Trigger</Button>
        </Dropdown.Trigger>

        <Dropdown.Content>
          <Dropdown.Label>Label</Dropdown.Label>
          <Dropdown.Divider />
          <Dropdown.Item>Item</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    );
  });
});
