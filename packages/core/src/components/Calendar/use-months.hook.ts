import { startOfYear, endOfYear, eachMonthOfInterval } from 'date-fns';

export function useMonths(month: Date) {
  const months = eachMonthOfInterval({
    start: startOfYear(new Date()),
    end: endOfYear(new Date()),
  }).map((m) => {
    m.setFullYear(month.getFullYear());
    return m;
  });

  const monthRows: Date[][] = [];

  for (let i = 0; i < months.length; i += 3) {
    monthRows.push(months.slice(i, i + 3));
  }

  return monthRows;
}
