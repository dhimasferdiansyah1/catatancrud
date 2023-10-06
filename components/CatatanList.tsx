import React from "react";
import Link from "next/link";
import RemoveButton from "./RemoveButton";

const getCatatan = async () => {
  try {
    const res = await fetch(`https://catatancrud.vercel.app/api/catatan`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch catatans");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading catatans: ", error);
  }
};

export default async function CatatanList() {
  const { catatans } = await getCatatan();
  return (
    <>
      {catatans.map((t: any) => (
        <div
          key={t._id}
          className="mt-4 flex flex-col rounded-sm border-2 border-gray-500 p-4"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{t.title}</h1>
            <p>{t.description}</p>
          </div>
          <div className="mt-4 flex items-end gap-2 text-white">
            <Link
              className="rounded-md bg-yellow-500 px-4 py-2 hover:bg-yellow-400"
              href={`/editCatatan/${t._id}`}
            >
              Edit
            </Link>
            <RemoveButton id={t._id} />
          </div>
        </div>
      ))}
    </>
  );
}
