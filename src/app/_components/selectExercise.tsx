"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import fuzzysort from "fuzzysort";

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
  .map((x) => x.name);
// .map((y) => ({ name: y.name, value: y.name }));

export const SelectExercise = (props: { className?: string }) => {
  const { className } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const filteredOptions =
    query === ""
      ? exerciseOptions.slice(0, 100)
      : fuzzysort
          .go(query, [...exerciseOptions], { limit: 50 })
          .map((x) => x.target);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border-dark-400 text-gray-300"
        >
          {value
            ? filteredOptions?.find((exercise) => exercise === value)
            : "Select exercise..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "z-[100] max-h-[400px] overflow-y-scroll border-card bg-dark-200 p-0",
          className,
        )}
      >
        <Command className="text-white">
          <CommandInput
            value={query}
            onInput={(e) => setQuery(e.currentTarget.value)}
            placeholder="Search exercise..."
          />

          <CommandEmpty>No exercise found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {filteredOptions?.map((exercise) => (
                <CommandItem
                  key={exercise}
                  value={exercise}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="cursor-pointer hover:bg-dark-300/80"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === exercise ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {exercise}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
