'use client';
import {
  DropdownShowcase,
  DropdownShowcaseProps,
} from '@/ui/configurators/components/Dropdown.showcase';
import { ModalShowcase, ModalShowcaseProps } from '@/ui/configurators/components/Modal.showcase';
import {
  PopoverShowcase,
  PopoverShowcaseProps,
} from '@/ui/configurators/components/Popover.showcase';
import {
  SelectorShowcase,
  SelectorShowcaseProps,
} from '@/ui/configurators/components/Selector.showcase';
import { TabsShowcase, TabsShowcaseProps } from '@/ui/configurators/components/Tabs.showcase';
import {
  TooltipShowcase,
  TooltipShowcaseProps,
} from '@/ui/configurators/components/Tooltip.showcase';
import { CustomMdxSandpack } from '@/ui/CustomMdxSandpack';
import { useMDXComponent } from 'next-contentlayer/hooks';
import {
  AccordionItemProps,
  CardImageProps,
  Alert,
  Accordion,
  Select,
  Text,
  Textarea,
  Button,
  Card,
  Checkbox,
  Input,
  InputGroup,
  Radio,
  Switch,
  FormControl,
} from '@rewind-ui/core';
import { View } from './View';
import {
  MagnifyingGlass,
  Rocket,
  RocketLaunch,
  At,
  Key,
  WarningCircle,
} from '@phosphor-icons/react';
import {
  ComboboxShowcase,
  ComboboxShowcaseProps,
} from '@/ui/configurators/components/Combobox.showcase';

const components = {
  h1: ({ ...props }) => (
    <h1 className="mt-8 text-3xl text-gray-800 font-semibold scroll-mt-[7rem]" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="mt-8 text-2xl text-gray-700 font-semibold scroll-mt-[7rem]" {...props} />
  ),
  h3: ({ ...props }) => <p className="mt-8 text-xl text-gray-700 font-semibold" {...props} />,
  h4: ({ ...props }) => <p className="mt-8 text-lg text-gray-700 font-medium" {...props} />,
  p: ({ ...props }) => (
    <p className="mt-6 text-base text-gray-600 leading-normal md:leading-relaxed" {...props} />
  ),
  a: ({ ...props }) => (
    <a
      className="text-blue-500 underline decoration-2 decoration-blue-500"
      target="_blank"
      {...props}
    />
  ),
  ul: ({ ...props }) => <ul className="mt-3 mb-6 ml-6 list-disc" {...props} />,
  pre: ({ ...props }) => (
    <div className="mt-4 overflow-auto">
      <CustomMdxSandpack {...props} />
    </div>
  ),
  code: ({ ...props }) => (
    <code
      className="py-[0.2rem] px-[0.3rem] bg-blue-50/75 text-blue-500 rounded font-mono text-sm font-medium"
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-2 border-gray-200 border-dashed" {...props} />,
  table: ({ ...props }) => (
    <div className="my-6 w-full overflow-y-auto text-sm">
      <table className="w-full rounded overflow-hidden" {...props} />
    </div>
  ),
  tr: ({ ...props }) => (
    <tr className="m-0 border-t border-gray-300 p-0 hover:bg-gray-100 even:bg-gray-50" {...props} />
  ),
  th: ({ ...props }) => (
    <th
      className="border border-gray-100 bg-gray-50 px-4 py-2 text-left text-gray-700 font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: ({ ...props }) => (
    <td
      className="border border-gray-100 px-4 py-2 text-left text-gray-600 [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  option: ({ ...props }) => <option {...props} />,
  Alert: ({ ...props }) => <Alert {...props} />,
  Accordion: ({ ...props }) => <Accordion {...props} />,
  AccordionItem: ({ anchor, ...props }: AccordionItemProps) => (
    <Accordion.Item anchor={anchor} {...props} />
  ),
  AccordionHeader: ({ ...props }) => <Accordion.Header {...props} />,
  AccordionBody: ({ ...props }) => <Accordion.Body {...props} />,
  Button: ({ ...props }) => <Button {...props} />,
  Card: ({ ...props }) => <Card {...props} />,
  CardHeader: ({ ...props }) => <Card.Header {...props} />,
  CardImage: ({ src, ...props }: CardImageProps) => <Card.Image src={src} {...props} />,
  CardBody: ({ ...props }) => <Card.Body {...props} />,
  CardFooter: ({ ...props }) => <Card.Footer {...props} />,
  Checkbox: ({ ...props }) => <Checkbox {...props} />,
  Text: ({ ...props }) => <Text {...props} />,
  Input: ({ ...props }) => <Input {...props} />,
  InputGroup: ({ ...props }) => <InputGroup {...props} />,
  InputGroupText: ({ ...props }) => <InputGroup.Text {...props} />,
  InputGroupInput: ({ ...props }) => <InputGroup.Input {...props} />,
  InputGroupSelect: ({ ...props }) => <InputGroup.Select {...props} />,
  InputGroupTextarea: ({ ...props }) => <InputGroup.Textarea {...props} />,
  InputGroupButton: ({ ...props }) => <InputGroup.Button {...props} />,
  FormControl: ({ ...props }) => <FormControl {...props} />,
  FormControlLabel: ({ ...props }) => <FormControl.Label {...props} />,
  FormControlText: ({ ...props }) => <FormControl.Text {...props} />,
  FormControlInput: ({ ...props }) => <FormControl.Input {...props} />,
  FormControlSelect: ({ ...props }) => <FormControl.Select {...props} />,
  FormControlTextarea: ({ ...props }) => <FormControl.Textarea {...props} />,
  Textarea: ({ ...props }) => <Textarea {...props} />,
  Select: ({ ...props }) => <Select {...props} />,
  Radio: ({ ...props }) => <Radio {...props} />,
  Switch: ({ ...props }) => <Switch {...props} />,
  DropdownShowcase: ({ showcase }: DropdownShowcaseProps) => (
    <DropdownShowcase showcase={showcase} />
  ),
  SelectorShowcase: ({ showcase }: SelectorShowcaseProps) => (
    <SelectorShowcase showcase={showcase} />
  ),
  TooltipShowcase: ({ showcase }: TooltipShowcaseProps) => <TooltipShowcase showcase={showcase} />,
  PopoverShowcase: ({ showcase }: PopoverShowcaseProps) => <PopoverShowcase showcase={showcase} />,
  TabsShowcase: ({ showcase }: TabsShowcaseProps) => <TabsShowcase showcase={showcase} />,
  ModalShowcase: ({ showcase }: ModalShowcaseProps) => <ModalShowcase showcase={showcase} />,
  ComboboxShowcase: ({ showcase }: ComboboxShowcaseProps) => (
    <ComboboxShowcase showcase={showcase} />
  ),
  View: ({ ...props }) => <View {...props} />,
  MagnifyingGlass: ({ ...props }) => <MagnifyingGlass {...props} />,
  RocketLaunch: ({ ...props }) => <RocketLaunch {...props} />,
  Rocket: ({ ...props }) => <Rocket {...props} />,
  At: ({ ...props }) => <At {...props} />,
  Key: ({ ...props }) => <Key {...props} />,
  WarningCircle: ({ ...props }) => <WarningCircle {...props} />,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
