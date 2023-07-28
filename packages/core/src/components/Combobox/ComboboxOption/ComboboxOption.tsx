import { useComboboxContext } from '@components/Combobox/Combobox.context';
import { ComboboxActionEnum, ComboboxOptionEntry } from '@components/Combobox/Combobox.types';
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
    const { dispatch, externalSearch, mode, multiple, optionColor, radius, size, state } =
      useComboboxContext();
    const normalizedSearch = textNormalize(state.search || '');
    const normalizedLabel = textNormalize(label || '');
    const normalizedDescription = textNormalize(description || '');
    const hidden =
      !externalSearch &&
      !normalizedLabel.includes(normalizedSearch) &&
      !normalizedDescription.includes(normalizedSearch);
    const selected =
      state.selectedOptions.findIndex((option: ComboboxOptionEntry) => option.value === value) !==
      -1;

    useEffect(() => {
      dispatch({
        type: ComboboxActionEnum.register,
        payload: {
          value,
          label,
        },
      });

      if (!state.initialValue) {
        return;
      }

      if (typeof state.initialValue === 'string' && state.initialValue === value) {
        dispatch({
          type: ComboboxActionEnum.single_select,
          payload: {
            value,
          },
        });
        return;
      }

      if (Array.isArray(state.initialValue) && state.initialValue.includes(value)) {
        dispatch({
          type: ComboboxActionEnum.multi_select,
          payload: {
            value,
          },
        });
        return;
      }
    }, []);

    const handleOnClick = () => {
      if (multiple) {
        dispatch({
          type: ComboboxActionEnum.multi_select,
          payload: {
            value,
            toggle: true,
          },
        });
      } else {
        dispatch({
          type: ComboboxActionEnum.single_select,
          payload: {
            value,
            toggle: true,
          },
        });
      }
    };

    return (
      <button
        id={id}
        ref={ref}
        className={theme.button({ optionColor, radius, selected, hidden, size, mode })}
        aria-hidden={hidden}
        disabled={disabled}
        aria-disabled={disabled}
        onClick={handleOnClick}
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
