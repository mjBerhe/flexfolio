import Link from "next/link";
import { db } from "~/server/db";
import { getMyWorkouts, createWorkout } from "~/server/queries";

import { Button } from "./_components/ui/button";
import { Calendar } from "./_components/calendar";
import { SignedIn, SignedOut } from "@clerk/nextjs";

// every db change updates this page
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const workouts = await getMyWorkouts();
  // console.log(workouts);

  return (
    <main className="flex w-full flex-grow flex-col text-white">
      <div>hello?? should go to dashboard????</div>
    </main>
  );
}
