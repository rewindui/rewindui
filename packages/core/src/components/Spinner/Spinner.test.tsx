import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Spinner } from '.';

describe('Spinner', () => {
  it('should render', () => {
    render(<Spinner />);
  });
});
