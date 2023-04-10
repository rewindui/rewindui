import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Card } from '.';

describe('Card', () => {
  it('should render', () => {
    render(
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );
  });
});
