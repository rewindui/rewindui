import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export type TableBorderStyle = 'solid' | 'dashed';
export type TableHeaderColor = 'white' | 'gray' | 'dark' | 'black';
export type TableRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type TableSize = 'sm' | 'md' | 'lg';
export type TableStripePosition = 'odd' | 'even';

export interface TableContext {
  borderStyle?: TableBorderStyle;
  footerBorders?: boolean;
  headerBorders?: boolean;
  headerColor?: TableHeaderColor;
  horizontalBorders?: boolean;
  hoverable?: boolean;
  outerBorders?: boolean;
  size?: TableSize;
  striped?: boolean;
  stripePosition?: TableStripePosition;
  verticalBorders?: boolean;
}

export interface TableProps extends ComponentPropsWithRef<'div'> {
  borderStyle?: TableBorderStyle;
  footerBorders?: boolean;
  headerBorders?: boolean;
  headerColor?: TableHeaderColor;
  horizontalBorders?: boolean;
  hoverable?: boolean;
  outerBorders?: boolean;
  radius?: TableRadius;
  size?: TableSize;
  striped?: boolean;
  stripePosition?: TableStripePosition;
  verticalBorders?: boolean;
}

export type TableComponent = ForwardRefExoticComponent<
  PropsWithoutRef<TableProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
