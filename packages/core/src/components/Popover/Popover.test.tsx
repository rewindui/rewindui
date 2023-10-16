import { Button } from '@components/Button';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Popover } from '.';
import { createRef } from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { act } from 'react-dom/test-utils';

const popoverContent = (
  <>
    <Popover.Trigger>
      <Button>Trigger</Button>
    </Popover.Trigger>
    <Popover.Content>Content</Popover.Content>
  </>
);

describe('Popover', () => {
  it('should render', () => {
    render(<Popover initiallyOpen={true}>popoverContent</Popover>);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Popover ref={ref} initiallyOpen={true}>
        {popoverContent}
      </Popover>
    );
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Popover ref={ref} id="popover-id" initiallyOpen={true}>
        {popoverContent}
      </Popover>
    );
    expect(ref.current).toHaveProperty('id', 'popover-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Popover ref={ref} initiallyOpen={true}>
        {popoverContent}
      </Popover>
    );
    expect(ref.current).toHaveProperty('id');
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<Popover initiallyOpen={true}>{popoverContent}</Popover>);
    const results = await act(async () => await axe(container));
    expect(results).toHaveNoViolations();
  });
});
