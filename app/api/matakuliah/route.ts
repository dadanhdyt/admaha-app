import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { mataKuliah, sks } = await req.json();

    const createdMataKuliah = await db.mataKuliah.create({
      data: {
        mataKuliah,
        sks,
      },
    });

    return NextResponse.json({
      status: 200,
      mataKuliah: createdMataKuliah,
    });
  } catch (error) {
    console.error("Error parsing JSON or creating mataKuliah:", error);
    return NextResponse.json({
      status: 500,
      error: "Internal Server Error",
    });
  }
}

export async function GET(req: NextRequest) {
  try {
    const mataKuliah = await db.mataKuliah.findMany();

    return NextResponse.json(mataKuliah);
  } catch (error) {
    console.log(error);
  }
}
