'use client';
import {
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
  useRef,
  useState,
} from 'react';
import { ComboboxContextProvider } from './Combobox.context';
import { CaretUpDown } from '@icons/CaretUpDown';

const defaultProps: Partial<ComboboxProps> = {
  clearable: true,
  closeOnEscape: true,
  color: 'dark',
  disabled: false,
  loading: false,
  maxHeight: 250,
  minWidth: 250,
  mode: 'spacey',
  offset: 5,
  optionColor: 'gray',
  radius: 'md',
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
      color,
      controlId,
      initialValue,
      leftIcon,
      loading,
      maxHeight,
      minWidth,
      mode,
      offset,
      onChange,
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
    const contentId = useId();
    const inputId = usePropId(controlId);
    const disabled = props.disabled || loading;
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = true;
    const [search, setSearch] = useState<string>('');
    const [searching, setSearching] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string | null | undefined>(initialValue);
    const [selectedLabel, setSelectedLabel] = useState<string | null | undefined>('');
    const [visibleRefs, setVisibleRefs] = useState<HTMLButtonElement[]>([]);
    const [listClasses, setListClasses] = useState<string>('');
    const [inputClasses, setInputClasses] = useState<string>('');
    const [maxWidth, setMaxWidth] = useState<number | null>(null);
    const mounted = useRef(true);
    const localWrapperRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const contextValue: ComboboxContext = {
      mode,
      optionColor,
      radius,
      search,
      selectedLabel,
      selectedValue,
      setSearch,
      setSelectedLabel,
      setSelectedValue,
      size,
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
    const rightWrapperStyles = theme.rightIconWrapper({ size });

    useEffect(() => {
      if (!localWrapperRef.current) {
        return;
      }

      setMaxWidth(localWrapperRef.current.getBoundingClientRect().width);
    }, []);

    useEffect(() => {
      setSearch('');
      setSearching(false);
    }, [selectedLabel]);

    useEffect(() => {
      if (onChange && !mounted.current) {
        onChange(selectedValue);
      }

      mounted.current = false;
    }, [selectedValue]);

    useEffect(() => {
      setSelectedValue(value);
    }, [value]);

    useEffect(() => {
      if (open) {
        inputRef.current?.focus();
      }

      updateListClasses();
    }, [open]);

    useKeypress('Escape', true, () => {
      setSearch('');
      setSearching(false);

      if (open && closeOnEscape) {
        setOpen(false);
      }
    });

    useKeypress('Enter', true, () => {
      if (!searching) {
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
    }, [search]);

    useEffect(() => {
      if (open) {
        setOpen(false);
      }
    }, [selectedLabel]);

    useVerticalArrows(visibleRefs, open);

    const inputElement = (
      <input
        id={inputId}
        ref={inputRef}
        disabled={disabled}
        role="combobox"
        aria-controls={contentId}
        aria-expanded={open}
        value={searching ? search : selectedLabel || ''}
        placeholder={placeholder}
        className={inputClasses}
        readOnly={!searchable}
        onBlur={() => setSearching(false)}
        onChange={(event) => {
          setSearching(true);
          setSearch(event.target.value);

          if (!open) {
            setOpen(true);
          }
        }}
        type="text"
      />
    );

    const spinnerColor = tone === 'solid' ? 'slate' : 'gray';

    const updateListClasses = () => {
      if (!listRef.current) {
        return;
      }

      const overflown = listRef.current.scrollHeight > (maxHeight || 0);
      setListClasses(
        theme.list({
          size,
          open,
          mode,
          radius,
          shadow,
          overflown,
        })
      );
    };

    useEffect(() => {
      if (!localWrapperRef.current?.dataset) {
        return;
      }

      const dataset = Object.assign({}, localWrapperRef.current?.dataset);

      const hasLeftElement = dataset.hasOwnProperty('hasLeftElement');
      const hasRightElement = dataset.hasOwnProperty('hasRightElement');

      setInputClasses(
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
      <div
        id={id}
        ref={wrapperRef}
        className={wrapperClasses}
        onClick={() => {
          if (!open && !disabled) {
            setOpen(true);
          }
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
        {!loading && clearable && selectedValue && (
          <button
            disabled={disabled}
            onClick={(event) => {
              setSelectedLabel('');
              setSelectedValue(null);
              setSearch('');
              event.stopPropagation();
            }}
            className={rightWrapperStyles}
          >
            <XMarkIcon className={rightIconClasses} />
          </button>
        )}
        {!loading && (!clearable || !selectedValue) && (
          <div className={rightWrapperStyles}>
            <CaretUpDown className={rightIconClasses} />
          </div>
        )}
        <ComboboxContextProvider value={contextValue}>
          <FloatingPortal>
            <div
              id={contentId}
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
              {visibleRefs?.length === 0 && searching && (
                <div className={noResultsClasses}>No results</div>
              )}
              {children}
            </div>
          </FloatingPortal>
        </ComboboxContextProvider>
      </div>
    );
  }
);

_Combobox.displayName = 'Combobox';

const Combobox = Object.assign(_Combobox, {
  Group: ComboboxGroup,
  Option: ComboboxOption,
});

export default Combobox;
