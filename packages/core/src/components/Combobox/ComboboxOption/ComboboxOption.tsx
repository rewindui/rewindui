import { useComboboxContext } from '@components/Combobox/Combobox.context';
import {
  ComboboxOptionComponent,
  ComboboxOptionProps,
} from '@components/Combobox/ComboboxOption/ComboboxOption.types';
import { textNormalize } from '@helpers/text-normalize.utility';
import { CheckIcon } from '@icons/Check';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import React, { ForwardedRef, forwardRef, useEffect } from 'react';

const ComboboxOption: ComboboxOptionComponent = forwardRef(
  (props: ComboboxOptionProps, ref?: ForwardedRef<HTMLButtonElement>) => {
    const theme = useComponentTheme('ComboboxOption');
    const { value, label, description, media } = props;
    const disabled = !!props.disabled;
    const id = usePropId(props.id);
    const {
      externalSearch,
      mode,
      optionColor,
      radius,
      search,
      selectedValue,
      setSelectedLabel,
      setSelectedValue,
      size,
    } = useComboboxContext();
    const normalizedSearch = textNormalize(search || '');
    const normalizedLabel = textNormalize(label || '');
    const normalizedDescription = textNormalize(description || '');
    const hidden =
      !externalSearch &&
      !normalizedLabel.includes(normalizedSearch) &&
      !normalizedDescription.includes(normalizedSearch);
    const selected = selectedValue === value && !disabled;

    useEffect(() => {
      if (selectedValue === value && !disabled) {
        setSelectedLabel(label);
      }
    }, [selectedValue]);

    return (
      <button
        id={id}
        ref={ref}
        className={theme.button({ optionColor, radius, selected, hidden, size, mode })}
        aria-hidden={hidden}
        disabled={disabled}
        aria-disabled={disabled}
        onClick={() => {
          if (selectedValue === value) {
            setSelectedValue(null);
            setSelectedLabel(null);
          } else {
            setSelectedValue(value);
            setSelectedLabel(label);
          }
        }}
      >
        <div className={theme.optionWrapper()}>
          {media}
          <div className={theme.infoWrapper()}>
            <span className={theme.label({ disabled, selected })}>{label}</span>
            <span className={theme.description({ disabled, selected })}>{description}</span>
          </div>
        </div>

        {selected && <CheckIcon className={theme.icon({ size })} />}
      </button>
    );
  }
);

ComboboxOption.displayName = 'ComboboxOption';

export { ComboboxOption };
