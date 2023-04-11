'use client';
import { ComponentSlug } from '@/contentlayer.config';
import { Color } from '@/ui/ColorPicker';
import { components } from '@/ui/configurators/components';
import { ConfiguratorStateControl } from '@/ui/configurators/ConfiguratorStateControl';
import { CustomSandpack } from '@/ui/configurators/CustomSandpack';
import { FormControl } from '@rewind-ui/core';
import * as React from 'react';
import { useState } from 'react';

type Props = {
  component: ComponentSlug;
};

export type ConfiguratorOption = {
  label: string;
  name: any;
  type: 'selector' | 'color' | 'switch' | 'select';
  options?: string[];
  colors?: Color[];
  orientation?: 'horizontal' | 'vertical';
  fullWidth?: boolean;
};

export const Configurator = ({ component }: Props) => {
  const settings = components[component];
  const [state, setState] = useState<any>(settings.state);
  const options: ConfiguratorOption[] = settings.options as ConfiguratorOption[];

  const handleInputChange = (name: string, value: any) => {
    setState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const Example = settings.example;
  const Default = settings.default;
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
    <div className="w-full lg:block flex flex-col space-y-5">
      <div className="flex flex-wrap rounded-md shadow-sm shadow-neutral-100 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200 border border-neutral-200">
        <div className="w-full lg:w-2/3 bg-grid rounded-md flex p-4 items-center justify-center">
          <Example {...state} />
        </div>

        <div className="w-full lg:w-1/3 flex flex-auto p-5">
          <div className="flex flex-col space-y-3">{controls}</div>
        </div>
      </div>

      <CustomSandpack>{Default({ ...state })}</CustomSandpack>
    </div>
  );
};
