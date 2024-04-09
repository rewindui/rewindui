'use client';
import { comboboxReducer } from '@components/Combobox/combobox.reducer';
import {
  ComboboxActionEnum,
  ComboboxComponent,
  ComboboxContext,
  ComboboxProps,
} from '@components/Combobox/Combobox.types';
import { ComboboxGroup } from '@components/Combobox/ComboboxGroup/ComboboxGroup';
import { ComboboxOption } from '@components/Combobox/ComboboxOption/ComboboxOption';
import { useCombobox } from '@components/Combobox/use-combobox.hook';
import { useFormControlContext } from '@components/FormControl/FormControl.context';
import { useInputGroupContext } from '@components/InputGroup/InputGroup.context';
import { Spinner } from '@components/Spinner';
import { FloatingPortal, useMergeRefs } from '@floating-ui/react';
import { useKeypress } from '@hooks/use-keypress';
import { useVerticalArrows } from '@hooks/use-vertical-arrows.hook';
import { XMarkIcon } from '@icons/XMark';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import React, {
  cloneElement,
  ForwardedRef,
  forwardRef,
  useEffect,
  useId,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import { ComboboxContextProvider } from './Combobox.context';
import { CaretUpDown } from '@icons/CaretUpDown';

const defaultProps: Partial<ComboboxProps> = {
  clearable: true,
  closeOnEscape: true,
  closeOnSelect: true,
  color: 'dark',
  disabled: false,
  loading: false,
  maxHeight: 250,
  minWidth: 250,
  mode: 'spacey',
  multiple: false,
  offset: 5,
  optionColor: 'gray',
  radius: 'lg',
  searchable: true,
  shadow: 'none',
  size: 'md',
  tone: 'light',
  validation: 'none',
  withRing: true,
};

const _Combobox: ComboboxComponent = forwardRef(
  (props: ComboboxProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const theme = useComponentTheme('Combobox');
    const {
      children,
      className,
      clearable,
      closeOnEscape,
      closeOnSelect,
      color,
      controlId,
      initialValue,
      leftIcon,
      loading,
      maxHeight,
      minWidth,
      mode,
      multiple,
      offset,
      onChange,
      onSearch,
      optionColor,
      placeholder,
      radius,
      searchable,
      shadow,
      size,
      tone,
      validation,
      value,
      withRing,
      ...additionalProps
    } = {
      ...defaultProps,
      ...useFormControlContext(),
      ...useInputGroupContext(),
      ...props,
    };
    const id = usePropId(props.id);
    const listboxId = useId();
    const inputId = usePropId(controlId);
    const disabled = props.disabled || loading;
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = true;
    const [state, dispatch] = useReducer(comboboxReducer, {
      multiple: multiple || false,
      initialValue,
      onChange,
      options: [],
      selectedOptions: [],
      search: '',
      searching: false,
    });
    const [visibleRefs, setVisibleRefs] = useState<HTMLButtonElement[]>([]);
    const [listClasses, setListClasses] = useState<string>('');
    const [baseClasses, setBaseClasses] = useState<string>(
      theme.base({
        className,
        color,
        disabled,
        hasLeftIcon,
        hasRightIcon,
        radius,
        shadow,
        size,
        tone,
        validation,
        withRing,
      })
    );
    const [maxWidth, setMaxWidth] = useState<number | null>(null);
    const localWrapperRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const contextValue: ComboboxContext = {
      externalSearch: !!onSearch,
      mode,
      multiple,
      optionColor,
      radius,
      size,
      state,
      dispatch,
    };
    const { x, y, reference, floating, strategy, getFloatingProps, open, setOpen } = useCombobox({
      offset,
    });
    const wrapperRef = useMergeRefs([reference, localWrapperRef, ref || null]);
    const floatingRef = useMergeRefs([listRef, floating]);

    const wrapperClasses = theme.wrapper({ disabled });
    const noResultsClasses = theme.noResults({ size });
    const leftIconClasses = leftIcon
      ? theme.icon({ tone, size, className: leftIcon.props.className })
      : null;
    const leftWrapperStyles = theme.leftIconWrapper({ size });
    const rightIconClasses = theme.icon({ tone, size });
    const rightWrapperStyles = theme.rightIconWrapper({ color, size });

    useEffect(() => {
      if (!localWrapperRef.current) {
        return;
      }

      setMaxWidth(localWrapperRef.current.getBoundingClientRect().width);
    }, []);

    useEffect(() => {
      if (!value) {
        dispatch({
          type: ComboboxActionEnum.reset,
          payload: null,
        });

        return;
      }

      if (multiple && Array.isArray(value) && value.length > 0) {
        dispatch({
          type: ComboboxActionEnum.init_multi_select,
          payload: { values: value },
        });

        return;
      }

      if (!multiple && typeof value === 'string') {
        dispatch({
          type: ComboboxActionEnum.single_select,
          payload: { value },
        });

        return;
      }
    }, [value, multiple]);

    useEffect(() => {
      if (open) {
        inputRef.current?.focus();
      }

      updateListClasses();
    }, [open]);

    useKeypress('Escape', true, () => {
      dispatch({
        type: ComboboxActionEnum.search_reset,
        payload: null,
      });

      if (open && closeOnEscape) {
        setOpen(false);
      }
    });

    useKeypress('Backspace', open, () => {
      if (state.search) {
        return;
      }

      dispatch({
        type: ComboboxActionEnum.remove_last,
        payload: null,
      });
    });

    useKeypress('Enter', true, () => {
      if (!state.searching) {
        return;
      }

      const firstOption = listRef.current?.querySelector(
        'button[aria-hidden="false"]:not([aria-disabled="true"])'
      ) as HTMLButtonElement;

      if (firstOption) {
        firstOption.click();
      }
    });

    useLayoutEffect(() => {
      // Hacky but it works, will come back to this at some point :/
      setTimeout(() => {
        if (!listRef.current) {
          return;
        }

        setVisibleRefs(
          Array.from(
            listRef.current.querySelectorAll('button[aria-hidden="false"][aria-disabled="false"]')
          )
        );
      }, 1);

      updateListClasses();
    }, [state.search]);

    useEffect(() => {
      if (open && closeOnSelect) {
        setOpen(false);
      }
    }, [state.selectedOptions]);

    useVerticalArrows(visibleRefs, open);

    const inputElement = (
      <div className={baseClasses}>
        <div className={theme.tagWrapper({ size })}>
          {multiple &&
            state.selectedOptions?.map((option, index) => (
              <div key={`label-${index}`} className={theme.tag({ disabled, radius, size, tone })}>
                <button
                  type="button"
                  disabled={disabled}
                  aria-label={`Remove ${option.label}`}
                  className={theme.tagButton({ color, disabled })}
                  onClick={(event) => {
                    dispatch({
                      type: ComboboxActionEnum.multi_select,
                      payload: { value: option.value, toggle: true },
                    });
                    event.stopPropagation();
                  }}
                >
                  <span className={theme.tagButtonIcon()}>&#10005;</span>
                </button>
                <span>{option.label}</span>
              </div>
            ))}
          {(!multiple || open || state.selectedOptions.length === 0) && (
            <input
              id={inputId}
              ref={inputRef}
              disabled={disabled}
              className={theme.input({ size })}
              role="combobox"
              aria-controls={listboxId}
              aria-autocomplete={searchable ? 'both' : 'list'}
              aria-haspopup="listbox"
              aria-expanded={open}
              value={
                state.searching
                  ? state.search
                  : (!multiple ? state.selectedOptions[0]?.label : '') || ''
              }
              placeholder={state.selectedOptions.length ? '' : placeholder}
              readOnly={!searchable}
              autoComplete="off"
              onBlur={() => dispatch({ type: ComboboxActionEnum.search_reset, payload: null })}
              onChange={(event) => {
                dispatch({
                  type: ComboboxActionEnum.search_start,
                  payload: { search: event.target.value },
                });

                if (onSearch) {
                  onSearch(event.target.value);
                }

                if (!open) {
                  setOpen(true);
                }
              }}
              type="text"
            />
          )}
        </div>
      </div>
    );

    const spinnerColor = tone === 'solid' ? 'slate' : 'gray';

    const updateListClasses = () => {
      if (!listRef.current) {
        return;
      }

      setListClasses(
        theme.list({
          size,
          open,
          mode,
          radius,
          shadow,
        })
      );
    };

    useEffect(() => {
      if (!localWrapperRef.current?.dataset) {
        return;
      }

      const dataset = Object.assign({}, localWrapperRef.current?.dataset);

      const hasLeftElement =
        dataset.hasOwnProperty('hasLeftElement') && dataset.hasLeftElement === 'true';
      const hasRightElement =
        dataset.hasOwnProperty('hasRightElement') && dataset.hasRightElement === 'true';

      setBaseClasses(
        theme.base({
          className,
          color,
          disabled,
          hasLeftElement,
          hasLeftIcon,
          hasRightElement,
          hasRightIcon,
          radius,
          shadow,
          size,
          tone,
          validation,
          withRing,
        })
      );
    }, [
      className,
      color,
      disabled,
      hasLeftIcon,
      hasRightIcon,
      radius,
      shadow,
      size,
      theme,
      tone,
      validation,
      withRing,
    ]);

    return (
      <>
        <div
          id={id}
          ref={wrapperRef}
          className={wrapperClasses}
          onClick={() => {
            if (!open && !disabled) {
              setOpen(true);
            }

            inputRef?.current?.focus();
          }}
          {...additionalProps}
        >
          {leftIcon && (
            <span className={leftWrapperStyles}>
              {cloneElement(leftIcon, {
                className: leftIconClasses,
              })}
            </span>
          )}
          {inputElement}
          {loading && (
            <span className={rightWrapperStyles}>
              <Spinner size={size} color={spinnerColor} />
            </span>
          )}
          {!loading && clearable && state.selectedOptions?.length > 0 && (
            <button
              aria-label="Clear"
              type="button"
              disabled={disabled}
              onClick={(event) => {
                dispatch({ type: ComboboxActionEnum.reset, payload: null });
                dispatch({ type: ComboboxActionEnum.search_reset, payload: null });
                event.stopPropagation();
              }}
              className={rightWrapperStyles}
            >
              <XMarkIcon className={rightIconClasses} />
            </button>
          )}
          {!loading && (!clearable || state.selectedOptions?.length === 0) && (
            <div className={rightWrapperStyles}>
              <CaretUpDown className={rightIconClasses} />
            </div>
          )}
          <ComboboxContextProvider value={contextValue}>
            <FloatingPortal>
              <div
                id={listboxId}
                role="listbox"
                ref={floatingRef}
                className={listClasses}
                style={{
                  display: open ? 'block' : 'none',
                  opacity: open && !disabled ? 1 : 0,
                  maxHeight: `${maxHeight}px`,
                  minWidth: `${minWidth}px`,
                  maxWidth: `${maxWidth}px`,
                  position: strategy,
                  top: y && y > 0 && y !== Infinity ? y : 0,
                  left: x || 0,
                }}
                {...getFloatingProps}
              >
                {visibleRefs?.length === 0 && state.searching && (
                  <div className={noResultsClasses}>No results</div>
                )}
                {children}
              </div>
            </FloatingPortal>
          </ComboboxContextProvider>
        </div>
      </>
    );
  }
);

_Combobox.displayName = 'Combobox';

const Combobox = Object.assign(_Combobox, {
  Group: ComboboxGroup,
  Option: ComboboxOption,
});

export default Combobox;
