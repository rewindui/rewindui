import { CodeBlock } from '@components/CodeBlock.tsx'
import type { FC, ReactNode, Dispatch } from 'react'
import type { Color } from '@components/ColorPicker.tsx'
import { FormControl } from '@rewind-ui/core'
import { ConfiguratorStateControl } from '@components/ConfiguratorStateControl.tsx'
import React from 'react'

type ConfiguratorProps = {
  example: ReactNode;
  code: string;
  options: ConfiguratorOption[];
  state: any;
  setState: Dispatch<any>
}

export type ConfiguratorOption = {
  label: string;
  name: any;
  placeholder?: string;
  type: 'selector' | 'color' | 'switch' | 'select' | 'input' | 'number';
  options?: string[];
  colors?: Color[];
  orientation?: 'horizontal' | 'vertical';
  fullWidth?: boolean;
};

export const Configurator: FC<ConfiguratorProps> = ({ example, code, options, state, setState }: ConfiguratorProps) => {
  const handleInputChange = (name: string, value: any) => {
    setState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const controls = options.map((option: ConfiguratorOption, index) => (
    <FormControl key={index} size="sm">
      {option.type !== 'switch' && (
        <FormControl.Label className="font-medium">{option.label}</FormControl.Label>
      )}
      <ConfiguratorStateControl
        option={option}
        state={state[option.name]}
        onChange={handleInputChange}
      />
    </FormControl>
  ));

  return (
    <div className="lg:block flex flex-col space-y-5">
      <div className="flex flex-wrap overflow-hidden rounded-md shadow-sm shadow-neutral-100 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200 border border-neutral-200">
        <div
          className={`w-full lg:w-2/3 rounded-md bg-grid flex items-center justify-center p-4`}
        >
          {example}
        </div>

        <div className="w-full lg:w-1/3 flex flex-auto p-5 bg-white">
          <div className="flex flex-col space-y-3 w-full">{controls}</div>
        </div>
      </div>

      <CodeBlock code={code} />
    </div>
  );
};
