import { createRef } from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Calendar } from '.';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

describe('Calendar', () => {
  it('should render', () => {
    render(<Calendar />);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Calendar ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Calendar ref={ref} id="calendar-id" />);
    expect(ref.current).toHaveProperty('id', 'calendar-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Calendar ref={ref} />);
    expect(ref.current).toHaveProperty('id');
  });

  it('should be accessible', async () => {
    const ref = createRef<HTMLDivElement>();
    expect.extend(toHaveNoViolations);
    const { container } = render(<Calendar ref={ref} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
