import { NextResponse } from "next/server";
import mockData from "@/mocks/main-layout.json";

export async function GET() {
  return NextResponse.json(mockData);
}
