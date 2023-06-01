import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Progress } from '.';

describe('Progress', () => {
  it('should render', () => {
    render(<Progress value={50} />);
  });
});
