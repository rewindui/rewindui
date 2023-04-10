import { AccordionCode, AccordionExample } from '@/ui/configurators/Examples/AccordionExamples';
import { ButtonCode, ButtonExample } from '@/ui/configurators/Examples/ButtonExamples';
import { CheckboxCode, CheckboxExample } from '@/ui/configurators/Examples/CheckboxExamples';

export const components = {
  accordion: {
    example: AccordionExample,
    default: AccordionCode,
    state: {
      tone: 'solid',
      size: 'md',
      radius: 'md',
      shadow: 'base',
      color: 'white',
      activeColor: 'blue',
      shadowColor: 'gray',
      bordered: false,
      withRing: true,
    },
    options: [
      {
        label: 'Tone',
        name: 'tone',
        type: 'selector',
        options: ['solid', 'light'],
      },
      {
        label: 'Color',
        name: 'color',
        type: 'color',
        colors: ['white', 'gray', 'zinc', 'slate'],
      },
      {
        label: 'Active Color',
        name: 'activeColor',
        type: 'color',
        colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
      },
      {
        label: 'Size',
        name: 'size',
        type: 'selector',
        options: ['sm', 'md', 'lg', 'xl'],
      },
      {
        label: 'Shadow',
        name: 'shadow',
        type: 'selector',
        options: ['none', 'sm', 'base', 'md', 'lg'],
      },
      {
        label: 'Shadow Color',
        name: 'shadowColor',
        type: 'color',
        colors: ['none', 'gray', 'slate', 'zinc'],
      },
      {
        label: 'Radius',
        name: 'radius',
        type: 'selector',
        options: ['none', 'sm', 'md', 'lg'],
      },
      {
        label: 'Bordered',
        name: 'bordered',
        type: 'switch',
      },
      {
        label: 'With ring',
        name: 'withRing',
        type: 'switch',
      },
    ],
  },
  button: {
    example: ButtonExample,
    default: ButtonCode,
    state: {
      animation: 'none',
      color: 'blue',
      disabled: false,
      loading: false,
      icon: false,
      radius: 'md',
      shadow: 'base',
      shadowColor: 'none',
      size: 'md',
      tone: 'solid',
      withRing: true,
    },
    options: [
      {
        label: 'Tone',
        name: 'tone',
        type: 'select',
        options: ['solid', 'light', 'outline', 'transparent'],
      },
      {
        label: 'Color',
        name: 'color',
        type: 'color',
        colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
      },
      {
        label: 'Size',
        name: 'size',
        type: 'selector',
        options: ['xs', 'sm', 'md', 'lg'],
      },
      {
        label: 'Shadow',
        name: 'shadow',
        type: 'select',
        options: ['none', 'sm', 'base', 'md', 'lg', 'xl'],
      },
      {
        label: 'Shadow Color',
        name: 'shadowColor',
        type: 'color',
        colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
      },
      {
        label: 'Radius',
        name: 'radius',
        type: 'select',
        options: ['none', 'sm', 'base', 'md', 'lg', 'full'],
      },
      {
        label: 'Disabled',
        name: 'disabled',
        type: 'switch',
      },
      {
        label: 'Loading',
        name: 'loading',
        type: 'switch',
      },
      {
        label: 'With ring',
        name: 'withRing',
        type: 'switch',
      },
      {
        label: 'Animation',
        name: 'animation',
        type: 'selector',
        options: ['none', 'pulse', 'bounce'],
      },
    ],
  },
  checkbox: {
    example: CheckboxExample,
    default: CheckboxCode,
    state: {
      color: 'blue',
      disabled: false,
      radius: 'md',
      size: 'md',
      tone: 'solid',
      withRing: true,
    },
    options: [
      {
        label: 'Tone',
        name: 'tone',
        type: 'select',
        options: ['solid', 'light', 'outline', 'transparent'],
      },
      {
        label: 'Color',
        name: 'color',
        type: 'color',
        colors: ['blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
      },
      {
        label: 'Size',
        name: 'size',
        type: 'selector',
        options: ['sm', 'md', 'lg', 'xl'],
      },
      {
        label: 'Radius',
        name: 'radius',
        type: 'select',
        options: ['none', 'sm', 'base', 'md', 'lg', 'full'],
      },
      {
        label: 'Disabled',
        name: 'disabled',
        type: 'switch',
      },
      {
        label: 'With ring',
        name: 'withRing',
        type: 'switch',
      },
    ],
  },
};
