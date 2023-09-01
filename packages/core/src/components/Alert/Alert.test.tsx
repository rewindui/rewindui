import { axe, toHaveNoViolations } from 'jest-axe';
import * as React from 'react';
import { createRef } from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert } from '.';
import '@testing-library/jest-dom';

describe('Alert', () => {
  it('should render', () => {
    render(<Alert>Alert</Alert>);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Alert ref={ref}>Alert</Alert>);
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    render(<Alert id="alert-id">Alert</Alert>);
    expect(screen.getByRole('alert')).toHaveProperty('id', 'alert-id');
  });

  it('should generate id prop', () => {
    render(<Alert>Alert</Alert>);
    expect(screen.getByRole('alert')).toHaveProperty('id');
  });

  it('should have alert role', () => {
    render(<Alert title="Alert title">Alert</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('should have given title', () => {
    render(<Alert title="Alert title">Alert</Alert>);
    expect(screen.getByText('Alert title')).toBeInTheDocument();
  });

  it('should have given content', () => {
    render(<Alert title="Alert title">Alert content</Alert>);
    expect(screen.getByText('Alert content')).toBeInTheDocument();
  });

  it('should add svg icon', () => {
    render(<Alert iconType="success">Alert</Alert>);
    expect(screen.getByRole('alert').querySelector('svg')).toBeInTheDocument();
  });

  it('should have dismiss button', () => {
    render(<Alert dismissable>Alert</Alert>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<Alert>Alert</Alert>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
