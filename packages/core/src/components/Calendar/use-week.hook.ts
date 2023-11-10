import {
  startOfMonth,
  previousMonday,
  eachDayOfInterval,
  nextSunday,
  endOfMonth,
  isMonday,
  isSunday,
  isWeekend,
  isSameDay,
  isBefore,
  isAfter,
  startOfWeek,
  endOfWeek,
} from 'date-fns';
import { Day } from '@components/Calendar/Calendar.types';

export function useWeek({
  month,
  disabledWeekends,
  disabledDates,
  minDate,
  maxDate,
  blueDates,
  redDates,
  greenDates,
  purpleDates,
  yellowDates,
}: {
  month: Date;
  disabledWeekends?: boolean;
  disabledDates?: Date[];
  blueDates?: Date[];
  redDates?: Date[];
  greenDates?: Date[];
  purpleDates?: Date[];
  yellowDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
}) {
  const days: Day[] = eachDayOfInterval({
    start: !isMonday(startOfMonth(month))
      ? previousMonday(startOfMonth(month))
      : startOfMonth(month),
    end: !isSunday(endOfMonth(month)) ? nextSunday(endOfMonth(month)) : endOfMonth(month),
  }).map((day) => {
    const disabled =
      (disabledWeekends && isWeekend(day)) ||
      disabledDates?.some((date) => isSameDay(date, day)) ||
      (minDate && isBefore(day, minDate)) ||
      (maxDate && isAfter(day, maxDate));

    const isBlue = blueDates?.some((date) => isSameDay(date, day));
    const isRed = redDates?.some((date) => isSameDay(date, day));
    const isGreen = greenDates?.some((date) => isSameDay(date, day));
    const isYellow = yellowDates?.some((date) => isSameDay(date, day));
    const isPurple = purpleDates?.some((date) => isSameDay(date, day));

    return {
      value: day,
      disabled: !!disabled,
      color: isBlue
        ? 'blue'
        : isRed
        ? 'red'
        : isGreen
        ? 'green'
        : isYellow
        ? 'yellow'
        : isPurple
        ? 'purple'
        : 'white',
    };
  });

  const weekRows: Day[][] = [];

  for (let i = 0; i < days.length; i += 7) {
    weekRows.push(days.slice(i, i + 7));
  }

  const weekdays: Date[] = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });

  return { weekRows, weekdays };
}
