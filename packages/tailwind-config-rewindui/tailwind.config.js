const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 300ms ease-in',
        fadeOut: 'fadeOut 300ms ease-out',
      },
      backgroundImage: {
        'select-arrow': "url('assets/select-arrow.svg')",
      },
      colors: {
        blue: {
          50: '#B0E2FF',
          100: '#9BDBFF',
          200: '#72CCFF',
          300: '#4ABEFF',
          400: '#21AFFF',
          500: '#009EF7',
          600: '#007ABF',
          700: '#005687',
          800: '#00324F',
          900: '#000E17',
        },
        red: {
          50: '#FEECF0',
          100: '#FCD9E2',
          200: '#F9B3C4',
          300: '#F78DA7',
          400: '#F46789',
          500: '#F1416C',
          600: '#E91146',
          700: '#B50D36',
          800: '#800926',
          900: '#4C0617',
        },
        green: {
          50: '#DFF6E9',
          100: '#CFF1DF',
          200: '#AFE8C9',
          300: '#8FDFB4',
          400: '#70D69E',
          500: '#50CD89',
          600: '#33B26D',
          700: '#268652',
          800: '#1A5B37',
          900: '#0D2F1D',
        },
        yellow: {
          50: '#FFEFB8',
          100: '#FFEBA3',
          200: '#FFE27A',
          300: '#FFD952',
          400: '#FFD029',
          500: '#FFC700',
          600: '#C79B00',
          700: '#8F6F00',
          800: '#574400',
          900: '#1F1800',
        },
        purple: {
          50: '#E8DFFC',
          100: '#DBCDFA',
          200: '#C1A8F6',
          300: '#A783F2',
          400: '#8C5EEE',
          500: '#7239EA',
          600: '#5417D4',
          700: '#4011A2',
          800: '#2C0C6F',
          900: '#18063C',
        },
        // blue: colors.blue,
        // red: colors.red,
        // green: colors.green,
        // yellow: colors.yellow,
        // purple: colors.purple,
        gray: colors.gray,
        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        zinc: colors.zinc,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('tailwind-scrollbar')({ nocompatible: true }),
    // require('@tailwindcss/forms')({
    //   strategy: 'class', // only generate classes
    // }),
  ],
};
