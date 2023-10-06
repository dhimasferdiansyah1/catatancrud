import CatatanList from "./components/CatatanList";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="min-h-screen">
      <CatatanList />
    </div>
  );
}
