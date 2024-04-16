import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="flex flex-col items-center justify-center text-white">
      <div>FlexFolio</div>
    </main>
  );
}
