import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Accordion } from '.';

const items = [
  {
    anchor: 'item-1',
    header: 'Item 1',
    body: 'Item 1 body',
  },
  {
    anchor: 'item-2',
    header: 'Item 2',
    body: 'Item 2 body',
  },
];

describe('Accordion', () => {
  it('should render', () => {
    render(
      <Accordion>
        {items.map((item) => (
          <Accordion.Item key={item.anchor} anchor={item.anchor}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  });
});
