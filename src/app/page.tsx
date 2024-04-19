import Link from "next/link";
import { db } from "~/server/db";
import { getMyWorkouts, createWorkout } from "~/server/queries";

import { Button } from "./_components/ui/button";

// every db change updates this page
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const workouts = await getMyWorkouts();
  console.log(workouts);

  return (
    <main className="flex flex-col items-center justify-center text-white">
      <div className="flex w-full flex-wrap gap-4 p-4">
        {workouts.map((workout) => (
          <div key={workout.id}>{workout.name}</div>
        ))}
      </div>

      <div>
        <form
          action={async () => {
            "use server";
            await createWorkout(
              "test workout",
              "Morning",
              new Date(),
              "type 1",
              "1 hour",
            );
          }}
        >
          <Button variant={"default"}>Create Workout</Button>
        </form>
      </div>

      {/* <div>FlexFolio</div> */}
    </main>
  );
}
