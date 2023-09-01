import { axe, toHaveNoViolations } from 'jest-axe';
import { createRef } from 'react';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Select } from '.';
import '@testing-library/jest-dom';

describe('Select', () => {
  it('should render', () => {
    render(
      <Select>
        <option>One</option>
        <option>Two</option>
      </Select>
    );
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLSelectElement>();

    render(
      <Select ref={ref}>
        <option>One</option>
        <option>Two</option>
      </Select>
    );
    expect(ref.current).not.toBeNull();
  });

  it('should disable select', () => {
    const ref = createRef<HTMLSelectElement>();

    render(
      <Select ref={ref} disabled>
        <option>One</option>
        <option>Two</option>
      </Select>
    );
    expect(ref.current).toBeDisabled();
    expect(ref.current).toHaveProperty('disabled', true);
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(
      <Select aria-label="Select">
        <option>One</option>
        <option>Two</option>
      </Select>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
