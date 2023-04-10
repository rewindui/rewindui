import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it('should render', () => {
    render(<Button>Button</Button>);
  });
});
