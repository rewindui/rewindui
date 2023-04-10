import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Radio } from '.';

describe('Radio', () => {
  it('should render', () => {
    render(<Radio label="This is a radio button" />);
  });
});
