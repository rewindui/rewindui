const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './theme/**/*.variants.ts',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'select-arrow': "url('assets/select-arrow.svg')",
      },
      // colors: {
      //   blue: {
      //     50: '#F0F9FF',
      //     100: '#DBF2FF',
      //     200: '#B3E3FF',
      //     300: '#85D2FF',
      //     400: '#47BCFF',
      //     500: '#009EF7',
      //     600: '#008EE0',
      //     700: '#007EC7',
      //     800: '#0067A3',
      //     900: '#004A75',
      //   },
      //   red: {
      //     50: '#FEECF0',
      //     100: '#FCD9E2',
      //     200: '#F9B3C5',
      //     300: '#F78DA7',
      //     400: '#F4678A',
      //     500: '#F1416C',
      //     600: '#E41146',
      //     700: '#AB0D34',
      //     800: '#720823',
      //     900: '#390411',
      //   },
      //   green: {
      //     50: '#EFFAF4',
      //     100: '#DBF5E7',
      //     200: '#B8EBCF',
      //     300: '#98E2B9',
      //     400: '#74D7A1',
      //     500: '#50CD89',
      //     600: '#33B36C',
      //     700: '#268752',
      //     800: '#195735',
      //     900: '#0C2C1A',
      //   },
      //   yellow: {
      //     50: '#FFF9E5',
      //     100: '#FFF4CC',
      //     200: '#FFE999',
      //     300: '#FFDE66',
      //     400: '#FFD333',
      //     500: '#FFC700',
      //     600: '#CCA000',
      //     700: '#997800',
      //     800: '#665000',
      //     900: '#332800',
      //   },
      //   purple: {
      //     50: '#F2EDFD',
      //     100: '#E1D6FB',
      //     200: '#C7B1F7',
      //     300: '#A987F2',
      //     400: '#8F62EE',
      //     500: '#7239EA',
      //     600: '#5317D4',
      //     700: '#3D119D',
      //     800: '#290B6A',
      //     900: '#140533',
      //   },
      //   gray: colors.gray,
      //   black: colors.black,
      //   white: colors.white,
      //   slate: colors.slate,
      //   zinc: colors.zinc,
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
};
