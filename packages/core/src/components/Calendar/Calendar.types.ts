import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import { Locale } from 'date-fns';

export type CalendarBorderStyle = 'dashed' | 'solid';
export type CalendarDayFormat = 'EEE' | 'EEEEE' | 'EEEEEE';
export type CalendarHighlightColor = 'white' | 'blue' | 'red' | 'green' | 'yellow' | 'purple';
export type CalendarRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type CalendarShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type CalendarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Day = {
  value: Date;
  disabled: boolean;
  color?: CalendarHighlightColor;
};

export interface CalendarProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  blueDates?: Date[];
  bordered?: boolean;
  borderStyle?: CalendarBorderStyle;
  dayFormat?: CalendarDayFormat;
  disabledDates?: Date[];
  disabledWeekends?: boolean;
  greenDates?: Date[];
  horizontalBorders?: boolean;
  locale?: Locale;
  maxDate?: Date;
  minDate?: Date;
  onChange?(value: Date | null | undefined): void;
  purpleDates?: Date[];
  radius?: CalendarRadius;
  redDates?: Date[];
  shadow?: CalendarShadow;
  size?: CalendarSize;
  value?: Date | null;
  verticalBorders?: boolean;
  yellowDates?: Date[];
}

export type CalendarComponent = ForwardRefExoticComponent<
  PropsWithoutRef<CalendarProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
