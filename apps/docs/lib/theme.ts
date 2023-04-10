import { SandpackThemeProp } from '@codesandbox/sandpack-react/types';
import colors from 'tailwindcss/colors';

export const theme: SandpackThemeProp = {
  colors: {
    surface1: '#282c34',
    surface2: '#21252b',
    surface3: '#2c313c',
    clickable: '#a8b1c2',
    base: '#a8b1c2',
    disabled: '#4d4d4d',
    hover: '#e8effc',
    accent: '#c678dd',
    error: '#e06c75',
    errorSurface: '#ffeceb',
  },
  syntax: {
    plain: colors?.gray[200],
    comment: {
      color: '#757575',
      fontStyle: 'italic',
    },
    keyword: colors?.fuchsia[400],
    tag: '#e06c75',
    punctuation: colors?.gray[400],
    definition: colors?.sky[400],
    property: colors?.yellow[500],
    static: colors?.rose[400],
    string: colors?.teal[500],
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: '13.6px',
    lineHeight: '20px',
  },
};
