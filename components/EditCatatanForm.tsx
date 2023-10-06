"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditCatatanForm({ id, title, description }: any) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setnNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://catatancrud.vercel.app/api/catatan/${id}`, {
        cache: "no-store",
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error("Gagal mengupdate catatan");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col ">
      <div className="mt-4 p-2 text-center text-2xl font-bold">
        Edit Catatan
      </div>
      <div className="mt-4 rounded-sm border-2 border-gray-500 p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Judul Catatan</h1>
            <input
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
              type="text"
              className="rounded-sm border-2 border-gray-100 p-2 text-xl"
              placeholder="Judul Catatan"
            ></input>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <h1 className="text-xl font-bold">Isi Catatan</h1>
            <textarea
              onChange={(e) => setnNewDescription(e.target.value)}
              value={newDescription}
              className="h-60 rounded-sm border-2 border-gray-100 p-2 text-xl"
              placeholder="Isi Catatan"
            ></textarea>
          </div>
          <div className="mb-4 mt-8">
            <button
              id="submit"
              className="rounded-md bg-yellow-500 px-4 py-3 text-white hover:bg-yellow-400"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
