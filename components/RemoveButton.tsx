"use client";
import { useRouter } from "next/navigation";

export default function RemoveButton({ id }: any) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Kamu yakin?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/catatan?id=${id}`, {
        cache: "no-store",
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button
      onClick={removeTopic}
      className="rounded-md bg-red-500 px-4 py-2 hover:bg-red-400"
    >
      Hapus
    </button>
  );
}
