import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { workouts } from "./db/schema";
import { redirect } from "next/navigation";

export async function getMyWorkouts() {
  const user = auth();

  if (!user.userId) {
    return [];
  }

  const workouts = await db.query.workouts.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return workouts;
}

export async function createWorkout(
  name: string,
  time: string,
  date: Date,
  type: string,
  duration: string,
) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  if (!name || !time || !date || !type || !duration)
    throw new Error("Invalid data");

  const workout = await db
    .insert(workouts)
    .values({
      userId: user.userId,
      date,
      name,
      time,
      type,
      duration,
    })
    .returning();

  redirect("/");
}
