import { Alert } from '@components/Alert';
import { axe, toHaveNoViolations } from 'jest-axe';
import * as React from 'react';
import { createRef } from 'react';
import { act } from 'react-dom/test-utils';
import { describe, it } from 'vitest';
import { render, RenderResult, screen } from '@testing-library/react';
import { Combobox, ComboboxGroupType } from '.';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const simpleOptions: ComboboxGroupType[] = [
  {
    heading: 'Europe',
    options: [
      {
        value: '1',
        label: 'Germany',
        description: 'This is a description',
      },
      {
        value: '2',
        label: 'Great Britain',
      },
    ],
  },
  {
    heading: 'Asia',
    options: [
      {
        value: '3',
        label: 'Japan',
      },
      {
        value: '4',
        label: 'India',
        disabled: true,
      },
    ],
  },
  {
    heading: 'America',
    options: [
      {
        value: '5',
        label: 'United States',
      },
      {
        value: '6',
        label: 'Canada',
      },
    ],
  },
];

const options = simpleOptions.map((group, index) => (
  <Combobox.Group heading={group.heading} key={index}>
    {group.options.map((option) => (
      <Combobox.Option
        key={option.value}
        value={option.value}
        label={option.label}
        description={option.description}
        disabled={option.disabled}
        media={option.media}
      />
    ))}
  </Combobox.Group>
));

describe('Combobox', () => {
  it('should render', () => {
    render(<Combobox placeholder="Select a country...">{options}</Combobox>);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Combobox ref={ref} placeholder="Select a country...">
        {options}
      </Combobox>
    );
    expect(ref.current).not.toBeNull();
  });

  it('should forward option ref', () => {
    const ref = createRef<HTMLDivElement>();
    const optionRef = createRef<HTMLButtonElement>();

    render(
      <Combobox ref={ref} placeholder="Select a country...">
        <Combobox.Option ref={optionRef} label="Germany" value="1" />
      </Combobox>
    );
    expect(optionRef.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Combobox ref={ref} id="combobox-id" placeholder="Select a country...">
        {options}
      </Combobox>
    );
    expect(ref.current).toHaveProperty('id', 'combobox-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Combobox ref={ref} placeholder="Select a country...">
        {options}
      </Combobox>
    );
    expect(ref.current).toHaveProperty('id');
  });

  it('should have given placeholder', () => {
    render(<Combobox placeholder="Select a country...">{options}</Combobox>);
    expect(screen.getByPlaceholderText('Select a country...')).toBeInTheDocument();
  });

  it('should have closed listbox', () => {
    render(<Combobox placeholder="Select a country...">{options}</Combobox>);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('should open listbox', async () => {
    const ref = createRef<HTMLInputElement>();

    render(
      <Combobox ref={ref} placeholder="Select a country...">
        {options}
      </Combobox>
    );
    await userEvent.click(ref.current as Element);
    expect(screen.queryByRole('listbox')).toBeInTheDocument();
  });

  it('should close listbox on escape', async () => {
    const ref = createRef<HTMLInputElement>();

    render(
      <Combobox ref={ref} closeOnEscape={true} placeholder="Select a country...">
        {options}
      </Combobox>
    );
    await userEvent.click(ref.current as Element);
    expect(screen.queryByRole('listbox')).toBeInTheDocument();
    expect(screen.queryByRole('listbox')).toHaveStyle('display: block');
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('should not close listbox on escape', async () => {
    const ref = createRef<HTMLInputElement>();

    render(
      <Combobox ref={ref} closeOnEscape={false} placeholder="Select a country...">
        {options}
      </Combobox>
    );
    await userEvent.click(ref.current as Element);
    expect(screen.queryByRole('listbox')).toBeInTheDocument();
    expect(screen.queryByRole('listbox')).toHaveStyle('display: block');
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).toBeInTheDocument();
  });

  it('should close listbox on select', async () => {
    const ref = createRef<HTMLInputElement>();
    const optionRef = createRef<HTMLButtonElement>();

    render(
      <Combobox ref={ref} closeOnSelect={true} placeholder="Select a country...">
        <Combobox.Option ref={optionRef} label="Germany" value="1" />
      </Combobox>
    );
    await userEvent.click(ref.current as Element);
    expect(screen.queryByRole('listbox')).toBeInTheDocument();
    await userEvent.click(optionRef.current as Element);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('should not close listbox on select', async () => {
    const ref = createRef<HTMLInputElement>();
    const optionRef = createRef<HTMLButtonElement>();

    render(
      <Combobox ref={ref} closeOnSelect={false} placeholder="Select a country...">
        <Combobox.Option ref={optionRef} label="Germany" value="1" />
      </Combobox>
    );
    await userEvent.click(ref.current as Element);
    expect(screen.queryByRole('listbox')).toBeInTheDocument();
    await userEvent.click(optionRef.current as Element);
    expect(screen.queryByRole('listbox')).toBeInTheDocument();
  });

  it('should render option label and description', async () => {
    const ref = createRef<HTMLInputElement>();

    render(
      <Combobox ref={ref} placeholder="Select a country...">
        {options}
      </Combobox>
    );
    await userEvent.click(ref.current as Element);
    expect(screen.queryByText('Germany')).toBeInTheDocument();
    expect(screen.queryByText('This is a description')).toBeInTheDocument();
  });

  it('should pre-select default values', () => {
    const ref = createRef<HTMLDivElement>();
    const optionRef = createRef<HTMLButtonElement>();

    render(
      <Combobox ref={ref} initialValue="1" placeholder="Select a country...">
        <Combobox.Option ref={optionRef} label="Germany" value="1" />
      </Combobox>
    );
    expect(optionRef.current).toHaveAttribute('aria-selected', 'true');
  });

  it('should disable option', () => {
    const ref = createRef<HTMLDivElement>();
    const optionRef = createRef<HTMLButtonElement>();

    render(
      <Combobox ref={ref} placeholder="Select a country...">
        <Combobox.Option ref={optionRef} label="Germany" value="1" disabled />
      </Combobox>
    );
    expect(optionRef.current).toHaveAttribute('aria-disabled', 'true');
    expect(optionRef.current).toBeDisabled();
  });

  it('should select option', async () => {
    const ref = createRef<HTMLDivElement>();
    const optionRef = createRef<HTMLButtonElement>();

    render(
      <Combobox ref={ref} placeholder="Select a country...">
        <Combobox.Option ref={optionRef} label="Germany" value="1" />
      </Combobox>
    );
    expect(optionRef.current).toHaveAttribute('aria-selected', 'false');
    await userEvent.click(ref.current as Element);
    await userEvent.click(optionRef.current as Element);
    expect(optionRef.current).toHaveAttribute('aria-selected', 'true');
  });

  it('should toggle option', async () => {
    const ref = createRef<HTMLDivElement>();
    const optionRef = createRef<HTMLButtonElement>();

    render(
      <Combobox ref={ref} initialValue="1" placeholder="Select a country...">
        <Combobox.Option ref={optionRef} label="Germany" value="1" />
      </Combobox>
    );
    expect(optionRef.current).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(ref.current as Element);
    await userEvent.click(optionRef.current as Element);
    expect(optionRef.current).toHaveAttribute('aria-selected', 'false');
  });

  it('should filter options', async () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Combobox ref={ref} placeholder="Select a country...">
        <Combobox.Option label="Germany" value="1" />
        <Combobox.Option label="Greece" value="2" />
      </Combobox>
    );
    await userEvent.type(ref.current as Element, 'gr');
    expect(screen.queryByText('Germany')).not.toHaveAttribute('aria-hidden', 'true');
    expect(screen.queryByText('Greece')).not.toHaveAttribute('aria-hidden', 'false');
  });

  it('should show clear button', async function () {
    const ref = createRef<HTMLDivElement>();
    const optionRef = createRef<HTMLButtonElement>();

    render(
      <Combobox ref={ref} placeholder="Select a country...">
        <Combobox.Option ref={optionRef} label="Germany" value="1" />
      </Combobox>
    );
    await userEvent.click(ref.current as Element);
    await userEvent.click(optionRef.current as Element);
    expect(optionRef.current).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByLabelText('Clear')).toBeInTheDocument();
  });

  it('should clear selected item', async function () {
    const ref = createRef<HTMLDivElement>();
    const optionRef = createRef<HTMLButtonElement>();

    render(
      <Combobox ref={ref} placeholder="Select a country...">
        <Combobox.Option ref={optionRef} label="Germany" value="1" />
      </Combobox>
    );
    await userEvent.click(ref.current as Element);
    await userEvent.click(optionRef.current as Element);
    expect(optionRef.current).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByLabelText('Clear')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Clear'));
    expect(optionRef.current).toHaveAttribute('aria-selected', 'false');
  });

  it('should clear selected items', async function () {
    const ref = createRef<HTMLDivElement>();
    const option1Ref = createRef<HTMLButtonElement>();
    const option2Ref = createRef<HTMLButtonElement>();

    render(
      <Combobox ref={ref} initialValue={['1', '2']} multiple placeholder="Select a country...">
        <Combobox.Option ref={option1Ref} label="Germany" value="1" />
        <Combobox.Option ref={option2Ref} label="Germany" value="2" />
      </Combobox>
    );
    await userEvent.click(ref.current as Element);
    expect(option1Ref.current).toHaveAttribute('aria-selected', 'true');
    expect(option2Ref.current).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByLabelText('Clear')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Clear'));
    expect(option1Ref.current).toHaveAttribute('aria-selected', 'false');
    expect(option2Ref.current).toHaveAttribute('aria-selected', 'false');
  });

  it('should clear last selected item on backspace', async function () {
    const ref = createRef<HTMLDivElement>();
    const option1Ref = createRef<HTMLButtonElement>();
    const option2Ref = createRef<HTMLButtonElement>();

    render(
      <Combobox ref={ref} initialValue={['1', '2']} multiple placeholder="Select a country...">
        <Combobox.Option ref={option1Ref} label="Germany" value="1" />
        <Combobox.Option ref={option2Ref} label="Germany" value="2" />
      </Combobox>
    );
    await userEvent.click(ref.current as Element);
    expect(option1Ref.current).toHaveAttribute('aria-selected', 'true');
    expect(option2Ref.current).toHaveAttribute('aria-selected', 'true');
    await userEvent.keyboard('{Backspace}');
    expect(option1Ref.current).toHaveAttribute('aria-selected', 'true');
    expect(option2Ref.current).toHaveAttribute('aria-selected', 'false');
    await userEvent.click(ref.current as Element);
    await userEvent.keyboard('{Backspace}');
    expect(option1Ref.current).toHaveAttribute('aria-selected', 'false');
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = await act(async () => {
      return render(<Combobox placeholder="Select a country...">{options}</Combobox>);
    });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
