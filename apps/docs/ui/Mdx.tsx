'use client';
import { DrawerShowcase, DrawerShowcaseProps } from '@/ui/configurators/components/Drawer.showcase';
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
  ProgressShowcase,
  ProgressShowcaseProps,
} from '@/ui/configurators/components/Progress.showcase';
import { RibbonShowcase, RibbonShowcaseProps } from '@/ui/configurators/components/Ribbon.showcase';
import {
  SelectorShowcase,
  SelectorShowcaseProps,
} from '@/ui/configurators/components/Selector.showcase';
import { TableShowcase, TableShowcaseProps } from '@/ui/configurators/components/Table.showcase';
import { TabsShowcase, TabsShowcaseProps } from '@/ui/configurators/components/Tabs.showcase';
import { ToastShowcase, ToastShowcaseProps } from '@/ui/configurators/components/Toast.showcase';
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
  Avatar,
  Badge,
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
  RadioGroup,
  Switch,
  FormControl,
  Table,
  Ribbon,
  Toast,
} from '@rewind-ui/core';
import { View } from './View';
import {
  MagnifyingGlass,
  Rocket,
  RocketLaunch,
  At,
  Key,
  WarningCircle,
  ChartLineUp,
  ChartLineDown,
} from '@phosphor-icons/react';
import {
  ComboboxShowcase,
  ComboboxShowcaseProps,
} from '@/ui/configurators/components/Combobox.showcase';

const components = {
  h1: ({ ...props }) => (
    <h1 className="group mt-8 text-3xl text-gray-800 font-semibold scroll-mt-[7rem]" {...props}>
      <a
        href={`#${props.id}`}
        className="group-hover:before:visible before:invisible before:content-['#'] before:text-purple-200 before:mr-1 before:-ml-6"
      >
        {props.children}
      </a>
    </h1>
  ),
  h2: ({ ...props }) => (
    <h2 className="group mt-8 text-2xl text-gray-700 font-semibold scroll-mt-[7rem]" {...props}>
      <a
        href={`#${props.id}`}
        className="group-hover:before:visible before:invisible before:content-['#'] before:text-purple-200 before:mr-1 before:-ml-5"
      >
        {props.children}
      </a>
    </h2>
  ),
  h3: ({ ...props }) => <p className="mt-8 text-xl text-gray-700 font-semibold" {...props} />,
  h4: ({ ...props }) => <p className="mt-8 text-lg text-gray-700 font-medium" {...props} />,
  p: ({ ...props }) => (
    <p className="mt-4 text-base text-gray-700 leading-normal md:leading-relaxed" {...props} />
  ),
  a: ({ ...props }) => (
    <a
      className="text-purple-600 underline decoration-2 decoration-solid decoration-purple-500"
      target={props.href && props.href.startsWith('http') ? '_blank' : undefined}
      {...props}
    />
  ),
  ul: ({ ...props }) => <ul className="mt-3 mb-6 ml-6 list-disc text-gray-700" {...props} />,
  pre: ({ ...props }) => (
    <div className="mt-4 overflow-auto">
      <CustomMdxSandpack {...props} />
    </div>
  ),
  code: ({ ...props }) => (
    <code
      className="py-[0.15rem] px-[0.3rem] bg-purple-50/75 border border-purple-100 text-purple-600 rounded font-mono text-sm font-medium"
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-2 border-gray-200 border-dashed" {...props} />,
  table: ({ ...props }) => (
    <Table
      {...props}
      className="my-6"
      borderStyle="dashed"
      headerColor="white"
      stripePosition="odd"
    />
  ),
  tbody: ({ ...props }) => <Table.Tbody {...props} />,
  thead: ({ ...props }) => <Table.Thead {...props} />,
  tr: ({ ...props }) => <Table.Tr {...props} />,
  th: ({ ...props }) => <Table.Th {...props} />,
  td: ({ ...props }) => <Table.Td {...props} />,
  option: ({ ...props }) => <option {...props} />,
  Callout: ({ ...props }) => (
    <Alert {...props} size="sm" color="purple" tone="light" className="mt-6" />
  ),
  Alert: ({ ...props }) => <Alert {...props} />,
  Avatar: ({ ...props }) => <Avatar {...props} />,
  AvatarGroup: ({ ...props }) => <Avatar.Group {...props} />,
  Accordion: ({ ...props }) => <Accordion {...props} />,
  AccordionItem: ({ anchor, ...props }: AccordionItemProps) => (
    <Accordion.Item anchor={anchor} {...props} />
  ),
  AccordionHeader: ({ ...props }) => <Accordion.Header {...props} />,
  AccordionBody: ({ ...props }) => <Accordion.Body {...props} />,
  Badge: ({ ...props }) => <Badge {...props} />,
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
  RadioGroup: ({ name, ...props }) => <RadioGroup name={name} {...props} />,
  Ribbon: ({ ...props }) => <Ribbon {...props} />,
  Switch: ({ ...props }) => <Switch {...props} />,
  Toast: ({ ...props }) => <Toast {...props} />,
  ToastShowcase: ({ showcase }: ToastShowcaseProps) => <ToastShowcase showcase={showcase} />,
  DropdownShowcase: ({ showcase }: DropdownShowcaseProps) => (
    <DropdownShowcase showcase={showcase} />
  ),
  DrawerShowcase: ({ showcase }: DrawerShowcaseProps) => <DrawerShowcase showcase={showcase} />,
  SelectorShowcase: ({ showcase }: SelectorShowcaseProps) => (
    <SelectorShowcase showcase={showcase} />
  ),
  TooltipShowcase: ({ showcase }: TooltipShowcaseProps) => <TooltipShowcase showcase={showcase} />,
  PopoverShowcase: ({ showcase }: PopoverShowcaseProps) => <PopoverShowcase showcase={showcase} />,
  TabsShowcase: ({ showcase }: TabsShowcaseProps) => <TabsShowcase showcase={showcase} />,
  TableShowcase: ({ showcase }: TableShowcaseProps) => <TableShowcase showcase={showcase} />,
  ModalShowcase: ({ showcase }: ModalShowcaseProps) => <ModalShowcase showcase={showcase} />,
  ProgressShowcase: ({ showcase }: ProgressShowcaseProps) => (
    <ProgressShowcase showcase={showcase} />
  ),
  RibbonShowcase: ({ showcase }: RibbonShowcaseProps) => <RibbonShowcase showcase={showcase} />,
  ComboboxShowcase: ({ showcase }: ComboboxShowcaseProps) => (
    <ComboboxShowcase showcase={showcase} />
  ),
  View: ({ ...props }) => <View {...props} />,
  MagnifyingGlass: ({ ...props }) => <MagnifyingGlass {...props} />,
  RocketLaunch: ({ ...props }) => <RocketLaunch {...props} />,
  ChartLineUp: ({ ...props }) => <ChartLineUp {...props} />,
  ChartLineDown: ({ ...props }) => <ChartLineDown {...props} />,
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
