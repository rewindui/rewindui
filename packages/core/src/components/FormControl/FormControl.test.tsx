import { axe, toHaveNoViolations } from 'jest-axe';
import { createRef } from 'react';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { FormControl } from '.';
import '@testing-library/jest-dom';

describe('FormControl', () => {
  it('should render with Input', () => {
    render(
      <FormControl>
        <FormControl.Label>Email address</FormControl.Label>
        <FormControl.Input placeholder="This is an input..." />
        <FormControl.Text>Just a hint</FormControl.Text>
      </FormControl>
    );
  });

  it('should render with Select', () => {
    render(
      <FormControl>
        <FormControl.Select>
          <option>Option 1</option>
          <option>Option 2</option>
        </FormControl.Select>
      </FormControl>
    );
  });

  it('should render with Textarea', () => {
    render(
      <FormControl>
        <FormControl.Textarea />
      </FormControl>
    );
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <FormControl ref={ref}>
        <FormControl.Input placeholder="This is an input..." />
      </FormControl>
    );
    expect(ref.current).not.toBeNull();
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(
      <FormControl>
        <FormControl.Input placeholder="This is an input..." />
      </FormControl>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
