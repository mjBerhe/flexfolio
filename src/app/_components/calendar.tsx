"use client";

import { useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { isSameDay, getDaysOfMonth, cn } from "../lib/utils";

const MONTH_TO_NAME = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS_OF_WEEK_SHORT = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const borderColor = "border-card";

dayjs.extend(utc);
const month = dayjs().month();
const year = dayjs().year();

export const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(month);
  const [currentYear, setCurrentYear] = useState<number>(year);
  const currentMonthName = MONTH_TO_NAME[currentMonth];
  const currentDay = dayjs()
    .set("month", currentMonth)
    .set("year", currentYear);
  const currentDaysOfMonth = getDaysOfMonth(currentDay);
  const emptyDays = currentDay.startOf("month").day();
  const fillerDays = 6 - currentDay.endOf("month").day();
  const rowAmount = emptyDays + currentDaysOfMonth.length > 35 ? 6 : 5;

  const handlePrevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    }
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    }
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  return (
    <div>
      <div className={cn("mt-8 w-full gap-x-8")}>
        <div
          className={cn(
            "grid w-full grid-cols-7 rounded-t-lg border-l-[1px] border-t-[1px] bg-dark-200/80 shadow-lg transition-all duration-1000",
            rowAmount === 5
              ? "grid-rows-[repeat(5,_1fr)]"
              : "grid-rows-[repeat(6,_1fr)]",
            borderColor,
          )}
        >
          {Array(emptyDays)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className={cn(
                  "flex flex-col items-center border-b-[1px] border-r-[1px] p-3",
                  borderColor,
                )}
              >
                <span className="font-semibold text-primary-600">
                  {DAYS_OF_WEEK_SHORT[i]}
                </span>
              </div>
            ))}
          {currentDaysOfMonth.map((day, i) => (
            <div key={day.date()}>{day.date()}</div>
            // <CalendarDay
            //   key={day.date()}
            //   day={day}
            //   index={i}
            //   emptyDays={emptyDays}
            //   selectDay={handleSelectDay}
            //   selectWorkout={handleOpenWorkout}
            //   isSelected={selectedDay ? isSameDay(selectedDay, day) : false}
            //   isCondensed={showAddWorkout || showEditWorkout}
            //   selectedWorkout={selectedWorkout}
            //   workouts={currentWorkouts?.filter((x) =>
            //     isSameDay(dayjs(x.date), day),
            //   )}
            // />
          ))}
          {Array(fillerDays)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className={cn(
                  "flex flex-col items-center border-b-[1px] border-r-[1px]",
                  borderColor,
                )}
              ></div>
            ))}
        </div>

        {/* <div
          className={cn(
            "flex rounded-lg border border-card bg-dark-200/80 px-7 py-5 shadow-lg",
            showAddWorkout ? "animate-fade-in-delay" : "hidden opacity-0",
          )}
        >
          <CreateWorkout
            userId={userId}
            closeWorkout={handleCloseWorkout}
            selectedDay={selectedDay}
            refetch={refetch}
          />
        </div>

        <div
          className={cn(
            "flex rounded-lg border border-card bg-dark-200/80 px-7 py-5 shadow-lg",
            showEditWorkout && selectedWorkout
              ? "animate-fade-in-delay"
              : "hidden opacity-0",
          )}
        >
          {selectedWorkout && selectedDay && (
            <EditWorkout
              userId={userId}
              closeWorkout={handleCloseWorkout}
              selectedDay={selectedDay}
              selectedWorkout={selectedWorkout}
              handleEditWorkout={handleEditWorkout}
              selectedExercises={exercises}
              handleEditExercises={handleEditExercises}
              refetch={refetch}
            />
          )}
        </div> */}
      </div>
    </div>
  );
};
