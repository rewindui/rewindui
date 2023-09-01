import {
  ComboboxActionEnum,
  ComboboxState,
  ComboboxAction,
} from '@components/Combobox/Combobox.types';

export const comboboxReducer = (state: ComboboxState, action: ComboboxAction) => {
  switch (action.type) {
    case ComboboxActionEnum.register:
      return {
        ...state,
        options: [
          ...state.options,
          {
            label: action.payload.label,
            value: action.payload.value,
          },
        ],
      };
    case ComboboxActionEnum.single_select:
      if (!action.payload.omitOnChange && state.onChange) {
        state.onChange(action.payload.value);
      }

      if (action.payload.value === undefined) {
        return state;
      }

      const singleOption = state.selectedOptions.find((el) => el.value === action.payload.value);
      const singleSourceOption = state.options.find((el) => el.value === action.payload.value);

      return {
        ...state,
        search: '',
        searching: false,
        selectedOptions: singleOption && action.payload.toggle ? [] : [singleSourceOption],
      };
    case ComboboxActionEnum.multi_select:
      const multiOption = state.selectedOptions.find((el) => el.value === action.payload.value);
      let selectedOptions = state.selectedOptions.filter((el) => el.value !== multiOption?.value);

      if (multiOption && action.payload.toggle) {
        if (!action.payload.omitOnChange && state.onChange) {
          state.onChange(selectedOptions.map((el) => el.value));
        }

        return {
          ...state,
          search: '',
          searching: false,
          selectedOptions,
        };
      }

      if (multiOption && !action.payload.toggle) {
        return state;
      }

      const multipleSourceOption = state.options.find((el) => el.value === action.payload.value);
      selectedOptions = [...state.selectedOptions, multipleSourceOption];

      if (!action.payload.omitOnChange && state.onChange) {
        state.onChange(selectedOptions.map((el) => el.value));
      }

      return {
        ...state,
        search: '',
        searching: false,
        selectedOptions,
      };
    case ComboboxActionEnum.init_multi_select:
      const stateValues = state.selectedOptions.map((el) => el.value).sort();
      const actionValues = action.payload.values.sort();
      const sameLength = stateValues.length === actionValues.length;
      const sameValues = actionValues.every((v, i) => stateValues[i] === v);

      if (sameValues && sameLength) {
        return state;
      }

      const multipleSourceOptions = state.options.filter((el) =>
        action.payload.values.includes(el.value)
      );

      return {
        ...state,
        selectedOptions: multipleSourceOptions,
      };
    case ComboboxActionEnum.remove_last:
      if (state.onChange) {
        const values = state.selectedOptions.slice(0, -1).map((el) => el.value);
        state.onChange(state.multiple ? values : values[0]);
      }

      return {
        ...state,
        search: '',
        searching: false,
        selectedOptions: state.selectedOptions.slice(0, -1),
      };
    case ComboboxActionEnum.reset:
      if (state.onChange) {
        state.onChange(null);
      }

      return {
        ...state,
        search: '',
        searching: false,
        selectedOptions: [],
      };
    case ComboboxActionEnum.search_start:
      return {
        ...state,
        search: action.payload.search,
        searching: true,
      };
    case ComboboxActionEnum.search_reset:
      return {
        ...state,
        search: '',
        searching: false,
      };
    default:
      return state;
  }
};
