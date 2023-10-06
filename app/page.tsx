import CatatanList from "./components/CatatanList";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="min-h-screen">
      <CatatanList />
    </div>
  );
}
