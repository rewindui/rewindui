/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@idb-dab/ui-core/src/theme/styles/*.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter'],
      },
      fontSize: {
        xxs: '0.625rem',
      },
      colors: {
        primary: {
          100: '#FFF8F7',
          200: '#FFF3F1',
          300: '#FCECE5',
          400: '#FFEDE6',
          900: '#FF5C34',
        },
        secondary: {
          200: '#F3F9FD',
          900: '#1F3C66',
        },
        blue: {
          100: '#1F3C664D',
          200: '#CDD1E8',
          300: '#1F3C66',
          400: '#1F3C66',
          500: '#1F3C66',
          600: '#1F3C66',
          700: '#1F3C66',
          800: '#1F3C66',
          900: '#1F3C66',
        },
        neutral: {
          100: '#C9C9C9',
          200: '#FFFFFF80',
          300: '#575757',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
};
