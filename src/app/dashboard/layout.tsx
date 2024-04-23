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
    <div className="flex flex-grow text-white">
      <div className="flex border p-3">Sidebar here</div>
      <div>{children}</div>
    </div>
  );
}
