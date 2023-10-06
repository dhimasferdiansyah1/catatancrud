"use client";
import { useRouter } from "next/navigation";

interface Itopic {
  id: any;
  _id: number;
  nextUrl: any;
  json: any;
  title: string;
  description: string;
}

export default function RemoveButton({ id }: any) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Kamu yakin?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/catatan?id=${id}`, {
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
      className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-400"
    >
      Hapus
    </button>
  );
}
