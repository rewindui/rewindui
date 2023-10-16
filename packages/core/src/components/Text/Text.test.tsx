import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Text } from './';
import { createRef } from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import * as React from 'react';
import { act } from 'react-dom/test-utils';

describe('Text', () => {
  it('should render', () => {
    render(<Text>Text</Text>);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<Text ref={ref}>Text</Text>);
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLSpanElement>();

    render(
      <Text ref={ref} id="text-id">
        Text
      </Text>
    );
    expect(ref.current).toHaveProperty('id', 'text-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<Text ref={ref}>Text</Text>);
    expect(ref.current).toHaveProperty('id');
  });

  it('should have given content', () => {
    render(<Text>Text</Text>);
    expect(screen.getByText('Text')).not.toBeNull();
  });

  it('should render as a paragraph', () => {
    render(<Text as="p">Text</Text>);
    expect(screen.getByText('Text')).not.toBeNull();
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<Text>Text</Text>);
    const results = await act(async () => await axe(container));
    expect(results).toHaveNoViolations();
  });
});
