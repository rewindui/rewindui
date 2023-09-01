import { axe, toHaveNoViolations } from 'jest-axe';
import * as React from 'react';
import { createRef } from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Ribbon } from '.';
import '@testing-library/jest-dom';

describe('Ribbon', () => {
  it('should render', () => {
    render(<Ribbon>Ribbon</Ribbon>);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Ribbon ref={ref}>Ribbon</Ribbon>);
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Ribbon ref={ref} id="ribbon-id">
        Ribbon
      </Ribbon>
    );
    expect(ref.current).toHaveProperty('id', 'ribbon-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Ribbon ref={ref}>Ribbon</Ribbon>);
    expect(ref.current).toHaveProperty('id');
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<Ribbon>Ribbon</Ribbon>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
