import { Badge } from '@components/Badge';
import { axe, toHaveNoViolations } from 'jest-axe';
import { createRef } from 'react';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Input } from '.';
import '@testing-library/jest-dom';

describe('Input', () => {
  it('should render', () => {
    render(<Input placeholder="This is an input" />);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Input ref={ref} placeholder="This is an input" />);
    expect(ref.current).not.toBeNull();
  });

  it('should disable input', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Input ref={ref} placeholder="This is an input" disabled />);
    expect(ref.current).toBeDisabled();
    expect(ref.current).toHaveProperty('disabled', true);
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<Input placeholder="This is an input" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
