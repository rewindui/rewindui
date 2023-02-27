import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Text } from './';

describe('Text', () => {
  it('should render', () => {
    render(<Text>Text</Text>);
  });
});
