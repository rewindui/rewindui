import { ComboboxProps, Combobox } from '@idb-dab/ui-core';
import * as React from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

export const ComboboxCode = (props: any) => {
  const {
    clearable,
    closeOnEscape,
    closeOnSelect,
    color,
    disabled,
    loading,
    mode,
    multiple,
    placeholder,
    radius,
    searchable,
    shadow,
    size,
    tone,
    validation,
    withRing,
  } = props;

  const defaultProps = {
    clearable: true,
    closeOnEscape: true,
    closeOnSelect: true,
    color: 'dark',
    disabled: false,
    loading: false,
    mode: 'spacey',
    multiple: false,
    placeholder: null,
    radius: 'md',
    searchable: true,
    shadow: 'none',
    size: 'md',
    tone: 'light',
    validation: 'none',
    withRing: true,
  };

  const attributes = [
    clearable !== defaultProps.clearable ? `clearable={${clearable}}` : null,
    closeOnEscape !== defaultProps.closeOnEscape ? `closeOnEscape={${closeOnEscape}}` : null,
    closeOnSelect !== defaultProps.closeOnSelect ? `closeOnSelect={${closeOnSelect}}` : null,
    color !== defaultProps.color ? `color="${color}"` : null,
    disabled !== defaultProps.disabled ? `disabled={${disabled}}` : null,
    loading !== defaultProps.loading ? `loading={${loading}}` : null,
    mode !== defaultProps.mode ? `mode="${mode}"` : null,
    multiple !== defaultProps.multiple ? `multiple={${multiple}}` : null,
    placeholder !== defaultProps.placeholder ? `placeholder="${placeholder}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    searchable !== defaultProps.searchable ? `searchable={${searchable}}` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    validation !== defaultProps.validation ? `validation="${validation}"` : null,
    withRing !== defaultProps.withRing ? `withRing={${withRing}}` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Combobox } from '@idb-dab/ui-core';

function App() {
  return (
    <Combobox${attributes.join(' ')} initialValue="1">
      <Combobox.Option value="1" label="Germany" />
      <Combobox.Option value="2" label="Great Britain" />
      <Combobox.Option value="3" label="Greece" />
      <Combobox.Option value="4" label="Sweden" />
      <Combobox.Option value="5" label="Japan" />
      <Combobox.Option value="6" label="China" />
      <Combobox.Option value="7" label="India" />
      <Combobox.Option value="8" label="United States" />
      <Combobox.Option value="9" label="Canada" />
      <Combobox.Option value="10" label="Mexico" />
    </Combobox>
  );
}
`.trim();
};

export const ComboboxExample = (props: ComboboxProps) => {
  return (
    <Combobox {...props} leftIcon={<MagnifyingGlass />} initialValue="1">
      <Combobox.Option value="1" label="Germany" />
      <Combobox.Option value="2" label="Great Britain" />
      <Combobox.Option value="3" label="Greece" />
      <Combobox.Option value="4" label="Sweden" />
      <Combobox.Option value="5" label="Japan" />
      <Combobox.Option value="6" label="China" />
      <Combobox.Option value="7" label="India" />
      <Combobox.Option value="8" label="United States" />
      <Combobox.Option value="9" label="Canada" />
      <Combobox.Option value="10" label="Mexico" />
    </Combobox>
  );
};
