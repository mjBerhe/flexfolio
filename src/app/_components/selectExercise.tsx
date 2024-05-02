"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CommandList } from "cmdk";

import { exercises } from "../const/exercises";

const exerciseOptions = exercises
  .filter((x) => x.category === "strength")
  .map((y) => ({ name: y.name, value: y.name }));

export const SelectExercise = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? exerciseOptions?.find((exercise) => exercise.value === value)
                ?.value
            : "Select exercise..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" z-[100] w-full border-card bg-dark-200 p-0">
        <Command className="text-white">
          <CommandInput placeholder="Search exercise..." />

          <CommandEmpty>No exercise found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {exerciseOptions?.map((exercise) => (
                <CommandItem
                  key={exercise.value}
                  value={exercise.value}
                  onSelect={(currentValue) => {
                    console.log(currentValue);
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="cursor-pointer hover:bg-dark-300/80"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === exercise.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {exercise.name}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
