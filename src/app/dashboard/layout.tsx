import Link from "next/link";

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
      {/* <SideBar /> */}
      <div className="mx-auto w-full max-w-7xl px-4">{children}</div>
    </div>
  );
}

const SideBar: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 border p-3">
      <Link href={"/dashboard"}>Calendar</Link>
      <Link href={"/dashboard/workouts"}>Workouts</Link>
    </div>
  );
};
