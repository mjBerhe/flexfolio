import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// every db change updates this page
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { userId } = auth();
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="flex w-full flex-grow flex-col text-white">
      <div>hello?? should go to dashboard????</div>
    </main>
  );
}
