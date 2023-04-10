import { Button } from '@components/Button';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Popover } from '.';

describe('Popover', () => {
  it('should render', () => {
    render(
      <Popover>
        <Popover.Trigger>
          <Button>Trigger</Button>
        </Popover.Trigger>
        <Popover.Content>Content</Popover.Content>
      </Popover>
    );
  });
});
