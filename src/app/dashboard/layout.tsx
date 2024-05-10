import Link from "next/link";
import { Plus } from "lucide-react";

export const metadata = {
  title: "FlexFolio Dashboard",
  description: "flex your folio at flexflexio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-grow text-white">
      <SideBar />
      {/* <div className="mx-auto w-full max-w-7xl px-4">{children}</div> */}
      <div className="mx-4 my-3 flex w-full">{children}</div>
    </div>
  );
}

const SideBar: React.FC = () => {
  return (
    <div className="flex min-w-[200px] flex-col gap-3 bg-dark-200 px-5 pt-5">
      <Link href="/dashboard/new">
        <Plus />
      </Link>
      <Link href={"/dashboard"}>Calendar</Link>
      <Link href={"/dashboard/workouts"}>Workouts</Link>
    </div>
  );
};
