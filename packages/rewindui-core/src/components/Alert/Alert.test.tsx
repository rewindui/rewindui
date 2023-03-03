import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Alert } from '.';

describe('Alert', () => {
  it('should render', () => {
    render(<Alert>Alert</Alert>);
  });
});
