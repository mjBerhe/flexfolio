import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isSameDay(day1: dayjs.Dayjs, day2: dayjs.Dayjs) {
  if (day1.utc().format("MM/DD/YYYY") === day2.utc().format("MM/DD/YYYY")) {
    return true;
  }
  return false;
}

export function getDaysOfMonth(currentDay: dayjs.Dayjs) {
  const firstDOM = currentDay.startOf("month");
  const daysAmount = currentDay.daysInMonth();

  const days = Array(daysAmount)
    .fill(null)
    .map((_, i) => (i == 0 ? firstDOM : firstDOM.add(i, "day")));
  return days;
}
