"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TambahCatatan() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Judul dan isi tidak boleh kosong!");
      return;
    }

    try {
      const apiUrl = process.env.API_URL;
      const res = await fetch(`${process.env.API_URL}/api/catatan`, {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Gagal membuat catatan");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="mt-4 p-2 text-center text-2xl font-bold">
        Tambah Catatan
      </div>
      <div className="mt-4 rounded-sm border-2 border-gray-500 p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Judul Catatan</h1>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              className="rounded-sm border-2 border-gray-100 p-2 text-xl"
              placeholder="Judul Catatan"
            ></input>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <h1 className="text-xl font-bold">Isi Catatan</h1>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="h-60 rounded-sm border-2 border-gray-100 p-2 text-xl"
              placeholder="Isi Catatan"
            ></textarea>
          </div>
          <div className="mb-4 mt-8">
            <button
              type="submit"
              className="rounded-md bg-green-500 px-4 py-3 text-white hover:bg-green-400"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
