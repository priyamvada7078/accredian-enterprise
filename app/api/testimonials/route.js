import { NextResponse } from "next/server";
import { testimonials } from "@/constants/testimonials";

export async function GET() {
  return NextResponse.json({ testimonials });
}
