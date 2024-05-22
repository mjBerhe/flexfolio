export const metadata = {
  title: "FlexFolio Workouts",
  description: "flex your folio at flexflexio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function NewWorkoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex w-full flex-grow text-white">{children}</div>;
}
