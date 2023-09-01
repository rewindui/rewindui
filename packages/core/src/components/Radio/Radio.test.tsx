import { axe, toHaveNoViolations } from 'jest-axe';
import { createRef } from 'react';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Radio } from '.';
import '@testing-library/jest-dom';

describe('Radio', () => {
  it('should render', () => {
    render(<Radio label="This is a radio" />);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Radio ref={ref} label="This is a radio" />);
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Radio id="radio-id" ref={ref} label="This is a radio" />);
    expect(ref.current).toHaveProperty('id', 'radio-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Radio ref={ref} label="This is a radio" />);
    expect(ref.current).toHaveProperty('id');
  });

  it('should have given label', () => {
    render(<Radio label="This is a radio" />);
    expect(screen.getByText('This is a radio')).toBeInTheDocument();
  });

  it('should have given description', () => {
    render(<Radio label="This is a radio" description="This is a description" />);
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('should have given error', () => {
    render(<Radio label="This is a radio" description="This is an error" />);
    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });

  it('should be checked', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Radio ref={ref} label="This is a radio" checked />);
    expect(ref.current).toBeChecked();
  });

  it('should be disabled', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Radio ref={ref} label="This is a radio" disabled />);
    expect(ref.current).toBeDisabled();
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<Radio label="This is a radio" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
