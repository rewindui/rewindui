import { Button } from '@components/Button';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Tooltip } from '.';
import { createRef } from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { act } from 'react-dom/test-utils';

describe('Tooltip', () => {
  it('should render', () => {
    render(
      <Tooltip label="Tooltip" initiallyOpen>
        <Button>Trigger</Button>
      </Tooltip>
    );
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Tooltip ref={ref} label="Tooltip" initiallyOpen>
        <Button>Trigger</Button>
      </Tooltip>
    );
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Tooltip ref={ref} id="tooltip-id" label="Tooltip" initiallyOpen>
        <Button>Trigger</Button>
      </Tooltip>
    );
    expect(ref.current).toHaveProperty('id', 'tooltip-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Tooltip ref={ref} label="Tooltip" initiallyOpen>
        <Button>Trigger</Button>
      </Tooltip>
    );
    expect(ref.current).toHaveProperty('id');
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(
      <Tooltip label="Tooltip" initiallyOpen>
        <Button>Trigger</Button>
      </Tooltip>
    );
    const results = await act(async () => await axe(container));
    expect(results).toHaveNoViolations();
  });
});
