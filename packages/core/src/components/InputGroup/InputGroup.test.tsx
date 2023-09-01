import { axe, toHaveNoViolations } from 'jest-axe';
import { createRef } from 'react';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { InputGroup } from '.';

describe('InputGroup', () => {
  it('should render with Input', () => {
    render(
      <InputGroup>
        <InputGroup.Input placeholder="This is aan input..." />
      </InputGroup>
    );
  });

  it('should render with Select', () => {
    render(
      <InputGroup>
        <InputGroup.Select>
          <option>Option 1</option>
          <option>Option 2</option>
        </InputGroup.Select>
      </InputGroup>
    );
  });

  it('should render with Textarea', () => {
    render(
      <InputGroup>
        <InputGroup.Textarea />
      </InputGroup>
    );
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <InputGroup ref={ref}>
        <InputGroup.Input placeholder="This is aan input..." />
      </InputGroup>
    );
    expect(ref.current).not.toBeNull();
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(
      <InputGroup>
        <InputGroup.Input placeholder="This is aan input..." />
      </InputGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
