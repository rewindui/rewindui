'use client';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useEffect, useState } from 'react';
import { CalendarComponent, CalendarProps } from '@components/Calendar/Calendar.types';
import {
  startOfMonth,
  isSameDay,
  isSameMonth,
  format,
  subMonths,
  addMonths,
  isToday,
  subYears,
  addYears,
  isAfter,
  isBefore,
  isValid,
  endOfMonth,
} from 'date-fns';
import { default as enGB } from 'date-fns/locale/en-GB';
import { motion } from 'framer-motion';
import { AngleLeft } from '@icons/AngleLeft';
import { AngleRight } from '@icons/AngleRight';
import { useWeek } from '@components/Calendar/use-week.hook';
import { useMonths } from '@components/Calendar/use-months.hook';
import { useYears } from '@components/Calendar/use-years.hook';

const defaultProps: Partial<CalendarProps> = {
  bordered: true,
  borderStyle: 'solid',
  dayFormat: 'EEEEE',
  disabledWeekends: true,
  horizontalBorders: true,
  radius: 'md',
  shadow: 'sm',
  size: 'md',
  verticalBorders: true,
};

const Calendar: CalendarComponent = forwardRef<HTMLDivElement, CalendarProps>(
  (props: CalendarProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Calendar');
    const [view, setView] = useState<'calendar' | 'month' | 'year'>('calendar');
    const {
      bordered,
      borderStyle,
      children,
      className = '',
      value,
      dayFormat,
      blueDates = [],
      redDates = [],
      greenDates = [],
      yellowDates = [],
      purpleDates = [],
      disabledDates = [],
      disabledWeekends,
      horizontalBorders,
      locale = enGB,
      maxDate,
      minDate,
      radius,
      shadow,
      size,
      verticalBorders,
      onChange,
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const [selectedDate, setSelectedDate] = useState<Date | null | undefined>(value);
    const [selectedMonth, setSelectedMonth] = useState<Date>(value || new Date());
    const id = usePropId(props.id);

    useEffect(() => {
      if (value && isValid(value)) {
        setSelectedDate(value);
        setSelectedMonth(value);
        return;
      }

      setSelectedDate(null);
    }, [value]);

    useEffect(() => {
      if (onChange) {
        onChange(selectedDate);
      }
    }, [selectedDate]);

    const { weekRows, weekdays } = useWeek({
      month: selectedMonth,
      disabledWeekends,
      disabledDates,
      minDate,
      maxDate,
      blueDates,
      redDates,
      greenDates,
      yellowDates,
      purpleDates,
    });
    const monthRows: Date[][] = useMonths(selectedMonth);
    const yearRows: Date[][] = useYears(selectedMonth);

    const nav = (
      <div className={theme.nav()}>
        <button
          aria-label={view === 'year' ? 'Previous 12 years' : 'Previous month'}
          type="button"
          className={theme.navButton({ radius, size, bordered, borderStyle, shadow })}
          disabled={minDate && isBefore(startOfMonth(selectedMonth), minDate)}
          onClick={() => {
            view === 'year'
              ? setSelectedMonth(subYears(selectedMonth, 12))
              : setSelectedMonth(subMonths(selectedMonth, 1));
          }}
        >
          <AngleLeft />
        </button>
        <div className={theme.navMonth()}>
          <button
            type="button"
            aria-label="Select month"
            onClick={() => (view === 'month' ? setView('calendar') : setView('month'))}
          >
            <time dateTime={format(selectedMonth, 'LLLL')}>
              {format(selectedMonth, 'LLLL', {
                locale,
              })}
            </time>
          </button>
          <button
            type="button"
            aria-label="Select year"
            onClick={() => (view === 'year' ? setView('calendar') : setView('year'))}
          >
            <time dateTime={format(selectedMonth, 'yyyy')}>
              {format(selectedMonth, 'yyyy', {
                locale,
              })}
            </time>
          </button>
        </div>
        <button
          aria-label={view === 'year' ? 'Next 12 years' : 'Next month'}
          type="button"
          className={theme.navButton({ radius, size, bordered, borderStyle, shadow })}
          disabled={maxDate && isAfter(endOfMonth(selectedMonth), maxDate)}
          onClick={() => {
            view === 'year'
              ? setSelectedMonth(addYears(selectedMonth, 12))
              : setSelectedMonth(addMonths(selectedMonth, 1));
          }}
        >
          <AngleRight />
        </button>
      </div>
    );

    const head = (
      <div className={theme.head()}>
        {weekdays.map((weekday, index) => (
          <div key={`weekday-${index}`} className={theme.weekDay()}>
            {format(weekday, dayFormat as string, {
              locale,
            })}
          </div>
        ))}
      </div>
    );

    const monthView = (
      <>
        {monthRows.map((monthRow, index) => (
          <div
            key={`month-row-${index}`}
            className={theme.calendarRow({ borderStyle, verticalBorders })}
          >
            {monthRow.map((month, index) => (
              <button
                key={`month-${index}`}
                onClick={() => {
                  setSelectedMonth(month);
                  setView('year');
                }}
                className={theme.calendarCell({ color: 'white', size })}
              >
                {format(month, 'LLLL', {
                  locale,
                })}
              </button>
            ))}
          </div>
        ))}
      </>
    );

    const yearView = (
      <>
        {yearRows.map((yearRow, index) => (
          <div
            key={`year-row-${index}`}
            className={theme.calendarRow({ borderStyle, verticalBorders })}
          >
            {yearRow.map((year, index) => (
              <button
                key={`year-${index}`}
                onClick={() => {
                  setSelectedMonth(year);
                  setView('calendar');
                }}
                className={theme.calendarCell({ color: 'white', size })}
              >
                {format(year, 'yyyy', {
                  locale,
                })}
              </button>
            ))}
          </div>
        ))}
      </>
    );

    const calendarView = (
      <>
        {weekRows.map((weekRow, index) => (
          <div
            key={`week-${index}`}
            className={theme.calendarRow({ borderStyle, verticalBorders })}
          >
            {weekRow.map((day, index) => (
              <button
                key={`day-${day.value.getDate()}-${index}`}
                onClick={() => {
                  if (day.disabled) {
                    return;
                  }
                  setSelectedDate(day.value);
                  setSelectedMonth(startOfMonth(day.value));
                }}
                disabled={day.disabled}
                className={theme.calendarCell({
                  isToday: isToday(day.value),
                  isSameDay:
                    selectedDate && isValid(selectedDate) && isSameDay(day.value, selectedDate),
                  isSameMonth: isSameMonth(day.value, selectedMonth),
                  color: day.color,
                  size,
                })}
              >
                {selectedDate && isValid(selectedDate) && isSameDay(day.value, selectedDate) && (
                  <motion.div
                    layoutId={`${id}-day-thumb`}
                    className={theme.thumb({ size })}
                    transition={{ duration: 0.25, type: 'spring' }}
                  />
                )}
                <time className={theme.dayLabel()} dateTime={format(day.value, 'MM/dd/yyyy')}>
                  {' '}
                  {day.value.getDate()}
                </time>
              </button>
            ))}
          </div>
        ))}
      </>
    );

    return (
      <div id={id} ref={ref} className={theme.base({ className, size })} {...additionalProps}>
        {nav}
        {view === 'calendar' && head}
        <div
          className={theme.calendar({
            bordered,
            borderStyle,
            className,
            radius,
            shadow,
            horizontalBorders,
          })}
        >
          {view === 'calendar' && calendarView}
          {view === 'month' && monthView}
          {view === 'year' && yearView}
        </div>
      </div>
    );
  }
);

Calendar.displayName = 'Calendar';

export default Calendar;
