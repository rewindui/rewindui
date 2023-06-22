import { ComboboxProps, Combobox } from '@rewind-ui/core';
import * as React from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

export const ComboboxCode = (props: any) => {
  const {
    clearable,
    closeOnEscape,
    color,
    disabled,
    loading,
    mode,
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
    color: 'dark',
    disabled: false,
    loading: false,
    mode: 'spacey',
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
    color !== defaultProps.color ? `color="${color}"` : null,
    disabled !== defaultProps.disabled ? `disabled={${disabled}}` : null,
    loading !== defaultProps.loading ? `loading={${loading}}` : null,
    mode !== defaultProps.mode ? `mode="${mode}"` : null,
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

  return `import { Combobox } from '@rewind-ui/core';

function App() {
  return (
    <Combobox${attributes.join(' ')}>
      <Combobox.Option value="1" label="Apple" />
      <Combobox.Option value="2" label="Orange" />
      <Combobox.Option value="3" label="Banana" />
    </Select>
  );
}
`.trim();
};

export const ComboboxExample = (props: ComboboxProps) => {
  return (
    <Combobox {...props} leftIcon={<MagnifyingGlass />} initialValue="1">
      <Combobox.Option value="1" label="Apple" />
      <Combobox.Option value="2" label="Orange" />
      <Combobox.Option value="3" label="Banana" />
    </Combobox>
  );
};
