import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  getDay,
  addMonths,
  subMonths,
  isSameDay,
  addDays
} from "date-fns";

export const getCalendarDays = (date: Date) => {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  const days = eachDayOfInterval({ start, end });
  const prefixEmpty = Array(getDay(start)).fill(null);
  return [...prefixEmpty, ...days];
};

export const formatDay = (date: Date | null) => {
  return date ? format(date, "d") : "";
};

export const formatFullDate = (date: Date) => {
  return format(date, "yyyy-MM-dd");
};

export const getMonthYearLabel = (date: Date) => {
  return format(date, "MMMM yyyy");
};

export const getNextMonth = (date: Date) => addMonths(date, 1);
export const getPrevMonth = (date: Date) => subMonths(date, 1);

export const getWeekDays = () => {
  const baseDate = new Date(2023, 0, 1);
  return Array.from({ length: 7 }).map((_, i) =>
    format(addDays(baseDate, i), "EEEEE")
  );
};

export const isSameCalendarDay = (a: Date | null, b: Date | null) => {
  if (!a || !b) return false;
  return isSameDay(a, b);
};
