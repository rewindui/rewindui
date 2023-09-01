import { axe, toHaveNoViolations } from 'jest-axe';
import { createRef } from 'react';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Accordion } from '.';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

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

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Accordion ref={ref}>
        {items.map((item) => (
          <Accordion.Item key={item.anchor} anchor={item.anchor}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Accordion ref={ref} id="accordion-id">
        {items.map((item) => (
          <Accordion.Item key={item.anchor} anchor={item.anchor}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
    expect(ref.current).toHaveProperty('id', 'accordion-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Accordion ref={ref}>
        {items.map((item) => (
          <Accordion.Item key={item.anchor} anchor={item.anchor}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
    expect(ref.current).toHaveProperty('id');
  });

  it('should render with default item and second item closed', () => {
    render(
      <Accordion defaultItem="item-1">
        {items.map((item) => (
          <Accordion.Item key={item.anchor} anchor={item.anchor}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
    expect(screen.getByText('Item 1 body').parentElement).toHaveStyle('height: auto');
    expect(screen.getByText('Item 2 body').parentElement).toHaveStyle('height: 0');
  });

  it('should render with all items closed', () => {
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
    expect(screen.getByText('Item 1 body').parentElement).toHaveStyle('height: 0');
    expect(screen.getByText('Item 2 body').parentElement).toHaveStyle('height: 0');
  });

  it('should toggle items on click', async () => {
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
    expect(screen.getByText('Item 1 body').parentElement).toHaveStyle('height: 0');
    await userEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByText('Item 1 body').parentElement).toHaveStyle('height: auto');
    expect(screen.getByText('Item 2 body').parentElement).toHaveStyle('height: 0');
    await userEvent.click(screen.getAllByRole('button')[1]);
    expect(screen.getByText('Item 2 body').parentElement).toHaveStyle('height: auto');
    expect(screen.getByText('Item 1 body').parentElement).toHaveStyle('height: 0');
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(
      <Accordion>
        {items.map((item) => (
          <Accordion.Item key={item.anchor} anchor={item.anchor}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
