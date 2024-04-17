import Link from "next/link";
import { db } from "~/server/db";

// every db change updates this page
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="flex flex-col items-center justify-center text-white">
      <div className="flex w-full flex-wrap gap-4 p-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
      </div>

      {/* <div>FlexFolio</div> */}
    </main>
  );
}
