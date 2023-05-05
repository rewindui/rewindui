import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Combobox } from '.';

describe('Combobox', () => {
  it('should render', () => {
    render(
      <Combobox initialValue="1">
        <Combobox.Group heading="Group A">
          <Combobox.Option value="1" label="Item 1" description="Item 1 description" />
          <Combobox.Option value="2" label="Item 2" description="Item 2 description" />
        </Combobox.Group>
      </Combobox>
    );
  });
});
