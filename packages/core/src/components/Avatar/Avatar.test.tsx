import { axe, toHaveNoViolations } from 'jest-axe';
import * as React from 'react';
import { createRef } from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from '.';
import '@testing-library/jest-dom';

describe('Avatar', () => {
  it('should render', () => {
    render(<Avatar initials="ND" />);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Avatar ref={ref} initials="ND" />);
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Avatar ref={ref} id="avatar-id" initials="ND" />);
    expect(ref.current).toHaveProperty('id', 'avatar-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Avatar ref={ref} id="avatar-id" initials="ND" />);
    expect(ref.current).toHaveProperty('id');
  });

  it('should have given initials', () => {
    render(<Avatar initials="ND" />);
    expect(screen.getByText('ND')).toBeInTheDocument();
  });

  it('should have given src', () => {
    render(<Avatar src="https://via.placeholder.com/150" initials="ND" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<Avatar src="https://via.placeholder.com/150" initials="ND" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
