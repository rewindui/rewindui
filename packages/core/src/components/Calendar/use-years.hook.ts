import { eachYearOfInterval, subYears, addYears } from 'date-fns';

export function useYears(month: Date) {
  const years = eachYearOfInterval({
    start: subYears(month, 4),
    end: addYears(month, 7),
  }).map((y) => {
    y.setMonth(month.getMonth());
    return y;
  });

  const yearRows: Date[][] = [];

  for (let i = 0; i < years.length; i += 3) {
    yearRows.push(years.slice(i, i + 3));
  }

  return yearRows;
}
