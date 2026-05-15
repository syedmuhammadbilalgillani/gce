import { NextResponse, type NextRequest } from "next/server";
import { setAuthCookie } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const expected = process.env.ADMIN_CODE;
  if (!expected) {
    return NextResponse.json(
      { error: "Server not configured." },
      { status: 500 },
    );
  }
  const body = await req.json().catch(() => ({}));
  const code = typeof body.code === "string" ? body.code.trim() : "";
  if (!code || code !== expected) {
    await new Promise((r) => setTimeout(r, 400));
    return NextResponse.json({ error: "Invalid code." }, { status: 401 });
  }
  await setAuthCookie();
  return NextResponse.json({ ok: true });
}
