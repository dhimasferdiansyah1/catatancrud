import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-sky-950 px-8 py-4 text-white">
      <Link
        className="text-2xl font-bold duration-300 hover:scale-105 hover:duration-300"
        href={"/"}
      >
        Catatan Crud
      </Link>
      <Link
        className="rounded-md bg-green-500 px-2 py-2 text-center hover:bg-green-400"
        href={"/tambahCatatan"}
      >
        Tambah Catatan
      </Link>
    </div>
  );
}
