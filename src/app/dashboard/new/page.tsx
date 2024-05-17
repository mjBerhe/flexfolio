"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";
import { Input } from "../../_components/ui/input";
import { SelectExercise } from "../../_components/selectExercise";
import dayjs, { Dayjs } from "dayjs";
import { Button } from "../../_components/ui/button";

const today = dayjs();

export default function NewWorkoutPage() {
  const [selectedDay, setSelectedDay] = useState<dayjs.Dayjs>(today);
  const [isAddingExercise, setIsAddingExercise] = useState<boolean>(false);

  return (
    <div className="flex h-full w-full min-w-[600px] flex-grow rounded-lg bg-dark-200 px-8">
      <div className="mt-8 flex w-full max-w-full flex-col overflow-hidden">
        <Input
          placeholder="Enter Workout Name"
          className={cn(
            "h-auto border-none bg-transparent p-0 outline-none focus:border-none focus:outline-none",
            "w-full text-3xl font-bold text-white",
          )}
        />

        <div className="mt-1">
          <span className=" text-primary-500">
            {selectedDay ? selectedDay.format("MMMM DD, YYYY") : "hello"}
          </span>
        </div>

        <div className="mt-8 flex w-full items-center justify-center">
          <div
            className="flex h-[70px] w-[150px] cursor-pointer items-center justify-center border"
            onClick={() => setIsAddingExercise(true)}
          >
            <span>Add Exercise</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function AddWorkout() {
//   const [isAddingNewWorkout, setIsAddingNewWorkout] = useState<boolean>(false);
//   const [isAddingExercise, setIsAddingExercise] = useState<boolean>(false);
//   const [selectedDay, setSelectedDay] = useState<dayjs.Dayjs>(today);

//   return (
//     <div className="flex gap-x-4">
//       <div
//         className="flex h-[250px] w-[250px] cursor-pointer items-center justify-center rounded-lg border border-card bg-dark-200/90 hover:bg-dark-200"
//         onClick={() => setIsAddingNewWorkout((prev) => !prev)}
//       >
//         Add New Workout
//       </div>
//       {isAddingNewWorkout && (
//         <div className="flex w-[300px] flex-col gap-y-2 rounded-lg border border-card bg-dark-200/90 p-4">
//           <div className="flex flex-col gap-y-1">
//             <Input
//               placeholder="Enter Workout Name"
//               className={cn(
//                 "h-auto border-none bg-transparent p-0 outline-none focus:border-none focus:outline-none",
//                 "w-[250px] text-xl font-normal text-white",
//               )}
//             />
//             <span className="text-sm text-primary-600">
//               {selectedDay ? selectedDay.format("MMMM DD, YYYY") : "hello"}
//             </span>
//           </div>

//           <div></div>

//           <div className="flex flex-col">
//             {isAddingExercise && <SelectExercise />}
//             <div className="mt-4">
//               <Button
//                 className="w-full text-center"
//                 onClick={() => setIsAddingExercise(true)}
//               >
//                 Add Exercises
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
