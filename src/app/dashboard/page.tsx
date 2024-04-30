import { getMyWorkouts, createWorkout } from "~/server/queries";

import { Button } from "../_components/ui/button";
import { Calendar } from "../_components/calendar";
import { auth, currentUser } from "@clerk/nextjs/server";
import AddWorkout from "./addWorkout";

// every db change updates this page
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const workouts = await getMyWorkouts();
  const user = await currentUser();
  console.log(user?.firstName);

  // const [showAddWorkout, setShowAddWorkout] = useState();

  return (
    <main className="flex w-full flex-grow flex-col text-white">
      <div className="mt-8 flex flex-col">
        <span className="text-3xl font-medium">
          Welcome, {user?.firstName ?? "Guest"}
        </span>
        <div className="mt-6 flex flex-col">
          <AddWorkout />
        </div>

        {/* <div className="flex">
          <Calendar />
        </div> */}
      </div>
    </main>
  );
}

{
  /* <div className="flex w-full flex-wrap gap-4 p-4">
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
        </div> */
}
