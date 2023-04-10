import { render } from '@testing-library/react';
import * as React from 'react';
import { describe, it } from 'vitest';
import { Tabs } from './';

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

describe('Tabs', () => {
  it('should render', () => {
    render(
      <Tabs defaultTab="item-1">
        <Tabs.List>
          {items.map((item) => (
            <Tabs.Tab key={item.anchor} anchor={item.anchor}>
              {item.header}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {items.map((item) => (
          <Tabs.Content key={item.anchor} anchor={item.anchor}>
            {item.body}
          </Tabs.Content>
        ))}
      </Tabs>
    );
  });
});
