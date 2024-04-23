export const metadata = {
  title: "FlexFolio Workouts",
  description: "flex your folio at flexflexio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function WorkoutsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-grow text-white">
      <div>{children}</div>
    </div>
  );
}
