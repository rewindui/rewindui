import { Checkbox } from '@components/Checkbox';
import { axe, toHaveNoViolations } from 'jest-axe';
import * as React from 'react';
import { createRef } from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from '.';
import '@testing-library/jest-dom';

describe('Badge', () => {
  it('should render', () => {
    render(<Badge>Badge</Badge>);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<Badge ref={ref}>Badge</Badge>);
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLSpanElement>();

    render(
      <Badge ref={ref} id="badge-id">
        Badge
      </Badge>
    );
    expect(ref.current).toHaveProperty('id', 'badge-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<Badge ref={ref}>Badge</Badge>);
    expect(ref.current).toHaveProperty('id');
  });

  it('should have given content', () => {
    render(<Badge>Badge</Badge>);
    expect(screen.getByText('Badge')).toBeInTheDocument();
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<Badge>Badge</Badge>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
