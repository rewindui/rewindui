import { FormControl, FormControlProps } from '@idb-dab/ui-core';
import * as React from 'react';
import { At } from '@phosphor-icons/react';

export const FormControlCode = (props: any) => {
  const { size, validation } = props;

  const defaultProps = {
    size: 'md',
    validation: 'none',
  };

  const attributes = [
    validation !== defaultProps.validation ? `validation="${validation}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { FormControl } from '@idb-dab/ui-core';
import { At } from '@phosphor-icons/react';

function App() {
  return (
    <FormControl${attributes.join(' ')}>
      <FormControl.Label>
        Email address
      </FormControl.Label>
      <FormControl.Input 
        leftIcon={<At className="text-gray-500" />}
        type="email"
        placeholder="An email address"
      />
    </FormControl>
  );
}
`.trim();
};

export const FormControlExample = (props: FormControlProps) => {
  return (
    <FormControl {...props}>
      <FormControl.Label>Email address</FormControl.Label>
      <FormControl.Input
        leftIcon={<At className="text-gray-500" />}
        type="email"
        placeholder="An email address"
      />
    </FormControl>
  );
};
