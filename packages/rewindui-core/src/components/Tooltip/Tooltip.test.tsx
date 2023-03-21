import { Button } from '@components/Button';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Tooltip } from '.';

describe('Tooltip', () => {
  it('should render', () => {
    render(
      <Tooltip label="Tooltip">
        <Button>Trigger</Button>
      </Tooltip>
    );
  });
});
