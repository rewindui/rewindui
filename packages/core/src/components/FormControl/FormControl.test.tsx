import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { FormControl } from '.';

describe('FormControl', () => {
  it('should render', () => {
    render(
      <FormControl>
        <FormControl.Input placeholder="This is aan input..." />
      </FormControl>
    );
  });
});
