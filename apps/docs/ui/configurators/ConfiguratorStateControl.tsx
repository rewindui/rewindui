import { ColorPicker } from '@/ui/ColorPicker';
import { ConfiguratorOption } from '@/ui/Configurator';
import {
  Selector,
  SelectorProps,
  Select,
  SelectProps,
  Switch,
  Input,
  InputProps,
} from '@rewind-ui/core';
import * as React from 'react';

type Props = {
  option: ConfiguratorOption;
  state: any;
  onChange: (key: string, value: any) => void;
};

export const ConfiguratorStateControl = ({ option, state, onChange }: Props) => {
  if (option.type === 'selector') {
    const props: Partial<SelectorProps> = {
      size: 'sm',
      value: state,
      shadow: 'sm',
      color: 'purple',
      onChange: (value: any) => onChange(option.name, value),
    };
    return (
      <Selector {...props} className="border">
        {option.options?.map((option, index) => (
          <Selector.Tab key={index} anchor={option} label={option} />
        ))}
      </Selector>
    );
  }

  if (option.type === 'select') {
    const props: Partial<SelectProps> = {
      tone: 'solid',
      size: 'sm',
      value: state,
      shadow: 'sm',
      onChange: (event: any) => onChange(option.name, event.target.value),
    };
    return (
      <Select {...props}>
        {option.options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    );
  }

  if (option.type === 'input') {
    const props: Partial<InputProps> = {
      tone: 'solid',
      size: 'sm',
      value: state,
      shadow: 'sm',
      placeholder: option.placeholder || '',
      onChange: (event: any) => onChange(option.name, event.target.value),
    };
    return <Input {...props} />;
  }

  if (option.type === 'number') {
    const props: Partial<InputProps> = {
      tone: 'solid',
      size: 'sm',
      value: state,
      shadow: 'sm',
      type: 'number',
      placeholder: option.placeholder || '',
      onChange: (event: any) => onChange(option.name, event.target.value),
    };
    return <Input {...props} />;
  }

  if (option.type === 'switch') {
    return (
      <Switch
        onChange={(value: boolean) => onChange(option.name, value)}
        size="sm"
        checked={state}
        label={option.label}
        color="purple"
      />
    );
  }

  if (option.type === 'color') {
    return (
      <ColorPicker
        onClick={(value) => onChange(option.name, value)}
        colors={option.colors}
        initialValue={state}
      />
    );
  }

  return <div>Not found</div>;
};
