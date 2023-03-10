import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Checkbox } from '.';

describe('Checkbox', () => {
  it('should render', () => {
    render(<Checkbox label="This is a checkbox" />);
  });
});
