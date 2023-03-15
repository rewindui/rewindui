import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Textarea } from '.';

describe('Textarea', () => {
  it('should render', () => {
    render(<Textarea />);
  });
});
