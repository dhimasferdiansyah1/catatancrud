import connectMongoDB from "@/libs/mongodb";
import Catatan from "@/models/catatan";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: any) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Catatan.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request: any, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const catatan = await Catatan.findOne({ _id: id });
  return NextResponse.json({ catatan }, { status: 200 });
}
