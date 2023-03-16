import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Input } from '.';

describe('Input', () => {
  it('should render', () => {
    render(<Input placeholder="This is an input" />);
  });
});
