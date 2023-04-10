'use client';
import { ConfiguratorOption } from '@/ui/configurators/Accordion/AccordionConfigurator';
import { FormControl } from '@rewind-ui/core';
import * as React from 'react';
import { ConfiguratorStateControl } from './ConfiguratorStateControl';

type Props = {
  options: ConfiguratorOption[];
  state: any;
  onChange: (key: string, value: any) => void;
};

export const ConfiguratorState = (props: Props) => {
  const { options, state, onChange } = props;

  return (
    <>
      {options.map((option: ConfiguratorOption, index) => (
        <FormControl key={index} size="sm">
          {option.type !== 'switch' && (
            <FormControl.Label className="font-medium">{option.label}</FormControl.Label>
          )}
          <ConfiguratorStateControl
            option={option}
            state={state[option.name]}
            onChange={onChange}
          />
        </FormControl>
      ))}
    </>
  );
};
