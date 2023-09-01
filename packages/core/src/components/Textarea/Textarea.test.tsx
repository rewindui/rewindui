import { Input } from '@components/Input';
import { axe, toHaveNoViolations } from 'jest-axe';
import { createRef } from 'react';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Textarea } from '.';
import '@testing-library/jest-dom';

describe('Textarea', () => {
  it('should render', () => {
    render(<Textarea placeholder="This is a textarea" />);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLTextAreaElement>();

    render(<Textarea ref={ref} placeholder="This is a textarea" />);
    expect(ref.current).not.toBeNull();
  });

  it('should disable input', () => {
    const ref = createRef<HTMLTextAreaElement>();

    render(<Textarea ref={ref} placeholder="This is a textarea" disabled />);
    expect(ref.current).toBeDisabled();
    expect(ref.current).toHaveProperty('disabled', true);
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<Textarea placeholder="This is a textarea" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
