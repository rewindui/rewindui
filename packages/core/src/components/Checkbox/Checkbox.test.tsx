import { axe, toHaveNoViolations } from 'jest-axe';
import { createRef } from 'react';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Checkbox } from '.';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Checkbox', () => {
  it('should render', () => {
    render(<Checkbox label="This is a checkbox" />);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Checkbox ref={ref} label="This is a checkbox" />);
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Checkbox id="checkbox-id" ref={ref} label="This is a checkbox" />);
    expect(ref.current).toHaveProperty('id', 'checkbox-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Checkbox ref={ref} label="This is a checkbox" />);
    expect(ref.current).toHaveProperty('id');
  });

  it('should have given label', () => {
    render(<Checkbox label="This is a checkbox" />);
    expect(screen.getByText('This is a checkbox')).toBeInTheDocument();
  });

  it('should have given description', () => {
    render(<Checkbox label="This is a checkbox" description="This is a description" />);
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('should have given error', () => {
    render(<Checkbox label="This is a checkbox" description="This is an error" />);
    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });

  it('should be checked', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Checkbox ref={ref} label="This is a checkbox" defaultChecked />);
    expect(ref.current).toBeChecked();
  });

  it('should be disabled', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Checkbox ref={ref} label="This is a checkbox" disabled />);
    expect(ref.current).toBeDisabled();
  });

  it('should be toggled', async () => {
    const ref = createRef<HTMLInputElement>();

    render(<Checkbox ref={ref} label="This is a checkbox" defaultChecked />);
    expect(ref.current).toBeChecked();
    await userEvent.click(ref.current as Element);
    expect(ref.current).not.toBeChecked();
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<Checkbox label="This is a checkbox" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
