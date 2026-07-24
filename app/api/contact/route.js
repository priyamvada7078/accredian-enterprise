import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
  }

  // No database yet — logging server-side so submissions aren't silently lost.
  console.log("New enterprise lead:", { name, email, message });

  return NextResponse.json({ success: true, message: "Thanks — we'll be in touch shortly." });
}
