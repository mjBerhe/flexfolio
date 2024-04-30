"use client";

import { useState, Fragment } from "react";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { isSameDay, getDaysOfMonth, cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SelectExercise } from "./selectExercise";

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

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Dayjs | null>(null);

  const handleOpenModal = (day: Dayjs) => {
    setSelectedDay(day);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="mt-8 flex w-full flex-col gap-4">
        <div className="flex items-center">
          <div className="flex items-center gap-x-4">
            <div className="flex gap-x-1">
              <Button onClick={handlePrevMonth} variant={"icon"} size={"icon"}>
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button onClick={handleNextMonth} variant={"icon"} size={"icon"}>
                <ChevronRight className="ml-1" />
              </Button>
            </div>
            <div className="text-2xl font-semibold text-slate-200">
              <span>{currentMonthName}</span>
              <span> {currentYear}</span>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "grid w-full grid-cols-7 rounded-t-lg border-l-[1px] border-t-[1px] bg-dark-200/80 shadow-lg",
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
                  "flex h-[100px] min-w-[150px] flex-col items-center border-b-[1px] border-r-[1px] p-3",
                  borderColor,
                )}
              >
                <span className="font-semibold text-primary-600">
                  {DAYS_OF_WEEK_SHORT[i]}
                </span>
              </div>
            ))}
          {currentDaysOfMonth.map((day, index) => (
            <div
              key={day.date()}
              className={cn(
                "flex min-w-[150px] flex-col items-center border-b-[1px] border-r-[1px] border-card p-3",
                emptyDays + index === 6 && "rounded-tr-lg",
              )}
              onClick={() => handleOpenModal(day)}
            >
              <span className="font-semibold text-primary-600">
                {day.date() < 8 - emptyDays && DAYS_OF_WEEK_SHORT[day.day()]}
              </span>
              <div
                className={cn(
                  "mt-1 cursor-pointer text-slate-300",
                  isSameDay(day, currentDay) ? "text-primary-600" : "",
                )}
              >
                {day.date()}
              </div>
            </div>
          ))}
          {Array(fillerDays)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className={cn(
                  "flex min-w-[150px] flex-col items-center border-b-[1px] border-r-[1px]",
                  borderColor,
                )}
              ></div>
            ))}
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="border-card bg-dark-100 text-white">
            <DialogHeader>
              <div className="">
                <Input
                  placeholder="Enter Workout Name"
                  className={cn(
                    "h-auto border-none bg-transparent p-0 outline-none focus:border-none focus:outline-none",
                    "w-[250px] text-xl font-normal text-white",
                  )}
                />
              </div>

              <div className="mt-1 flex flex-col">
                <span className="text-primary-600">
                  {selectedDay ? selectedDay.format("MMMM DD, YYYY") : "hello"}
                </span>
                <SelectExercise />
                <div className="mt-3 w-full border text-center">
                  Add Exercises
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>

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
