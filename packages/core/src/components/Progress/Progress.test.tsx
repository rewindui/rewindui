import * as React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Progress } from '.';
import { createRef } from 'react';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import { act } from 'react-dom/test-utils';

describe('Progress', () => {
  it('should render', () => {
    render(<Progress value={50} />);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Progress ref={ref} value={50} />);
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Progress ref={ref} id="progress-id" value={50} />);
    expect(ref.current).toHaveProperty('id', 'progress-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Progress ref={ref} value={50} />);
    expect(ref.current).toHaveProperty('id');
  });

  it('should have given value', () => {
    render(<Progress value={50} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
    expect(screen.getByRole('progressbar')).toHaveStyle('width: 50%');
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<Progress label="Label" value={50} />);
    const results = await act(async () => await axe(container));
    expect(results).toHaveNoViolations();
  });
});
