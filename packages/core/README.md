# Installation and Usage
React common components library can be installed using the following command:

```bash
> npm install @idb-dab/ui-core
```

After having installed and configured Tailwind CSS in your react / next app, you must configure it to work with the common components from the library. To do this, you must first create a `tailwind.config.js` file in the root directory of your project. Then, add the following code to that config file:

```js
module.exports = {
  content: [
    './src/**/*.{html,jsx,tsx}',
    // you can either add all styles
    './node_modules/@idb-dab/ui-core/dist/theme/styles/*.js',
    // OR you can add only the styles you need
    './node_modules/@idb-dab/ui-core/dist/theme/styles/Button.styles.js',
    './node_modules/@idb-dab/ui-core/dist/theme/styles/Text.styles.js'
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class' // only generate classes
    })
  ]
};
```

## Usage
To start using the components just add the following import statement to the top of your component:

```tsx
import { Button } from '@idb-dab/ui-core';
```

Then, you can use the component in your JSX code:

```tsx
<Button>Click Me</Button>
```

## Properties
Each component has a set of default styles that can be parameterized using the corresponding props. For example, the `Button` component has a default blue color and a medium size. These values can be changed by setting the `color` and `size` props to the component:

```tsx
<Button color="black" size="sm">Click Me</Button>
```

Moreover, the style of a component can be customized by passing the normal `className` prop to it. This prop can be used to override the default styles of the component. For example, the following code will change the font weight of the button to semi-bold:

# Creating Components

To create your own common component into the library, follow these steps:

### 1. Cloning the repo
Clone this [repo](https://github.com/idb-dab/lib-ui-common) locally.

### 2. Installing the dependencies
```bash
> cd <your_local_path_to_the_cloned_repo>
> npm i
```

### 3. Where to add your component and its styles?
- In the cloned directory, goto `/packages/core/src` directory.
- Add your component into the `/components` directory inside it and add its styles (tailwind classes) to `/theme/styles` directory.

### 4. Adding styles and variants
A variant is basically a pre-defined set of properties that can be used to customize a component. For example, the `Button` component has a `success` variant that can be used to create a bootstrap-like success button:

```tsx
  <Button variant="success">Click Me</Button>
```

## Example
For creating a simple custom button component:
### 1. Creating the component
- Create a new folder (name it the same as your component name) inside `/packages/core/src/components` directory. 
- In the newly created folder create your `<ComponentName>.tsx` file and add your component here.
- Add the props and other types that the component accepts to `<ComponentName>.types.ts` file.
- Add test for that component in `<ComponentName>.test.tsx` file.
- To export the created component, add an `index.ts` file and export your component and other types defined here.

### 2. Adding styles / variants
- Create a new folder (name it the same as your component name) inside `/packages/core/src/theme/styles` directory. 
- In the newly created folder create your `<ComponentName>.styles.ts` file and add your styles for different variants here. For example:
```bash
import { cva } from 'class-variance-authority';

const base = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'enabled:cursor-pointer',
    'focus:outline-none',
    ...
  ],
  {
    variants: {
      tone: {
        solid: ['border', 'antialiased'],
        light: ['border', 'border-transparent'],
        ...
      },
      color: {
        white: ['focus:ring-gray-100'],
        blue: ['focus:ring-blue-100'],
        ...
      },
      size: {
        xs: ['text-xs'],
        sm: ['text-sm', 'h-8'],
        ...
      },
    defaultVariants: {
      ...
    },
    compoundVariants: [
      ...
    ],
  }
);

const buttonStyles = { base };

export { buttonStyles };
```

- Add the export of these styles to `index.tsx` file in the same directory.
- To make it available to your component, add it to `/packages/core/src/theme/theme.context.tsx` file. 
- 
```bash
// theme.context.tsx file
import * as styles from './styles';

- export type Theme = {
  components: ThemeComponents;
};

type ThemeComponents = {
  Button: typeof styles.buttonStyles;
  ...
};
```

### 3. Applying theme / variants to the component
Now to apply these created styles to your component, import the respective style of that component and apply it to className property of your component. For example:

```tsx
// Importing the theme
import { useComponentTheme } from '@theme/theme.context';
// getting the classes for custom styles defined
const theme = useComponentTheme('Button');
const buttonClasses = theme.base({ size: 'sm', ... }) : '';
// Applying it to a component
<button className={buttonClasses}>{custom_text}</button>
```

### 4. Exporting your created component
After applying all the styles and variants to your component, export it from `/packages/core/src/index.ts` file.

```bash
export * from './components/<ComponentName>'
```