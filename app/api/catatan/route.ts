import connectMongoDB from "@/libs/mongodb";
import Catatan from "@/models/catatan";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Catatan.create({ title, description });
  return NextResponse.json({ message: "Catatan dibuat" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const catatans = await Catatan.find();
  return NextResponse.json({ catatans });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Catatan.findByIdAndDelete(id);
  return NextResponse.json({ message: "Catatan dihapus" }, { status: 200 });
}
