import { NextResponse, type NextRequest } from "next/server";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { sendContactEmails } from "@/lib/mail";
import { isAuthenticated } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const str = (v: unknown, max = 1000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const fullName = str(body.fullName ?? body.name, 120);
    const email = str(body.email, 255);
    const message = str(body.message, 5000);
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const phone = str(body.phone, 30) || null;
    const company = str(body.company, 150) || null;
    const service = str(body.service, 100) || null;
    const subject = str(body.subject, 200) || null;

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      null;
    const userAgent = req.headers.get("user-agent") || null;

    const [row] = await db
      .insert(contactSubmissions)
      .values({
        fullName,
        email,
        phone,
        company,
        service,
        subject,
        message,
        ipAddress: ip,
        userAgent,
      })
      .returning();

    sendContactEmails({
      fullName,
      email,
      phone,
      company,
      service,
      subject,
      message,
    }).catch((e) => console.error("[mail] failed:", e));

    return NextResponse.json({ ok: true, id: row.id });
  } catch (err) {
    console.error("[contact POST]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const rows = await db
    .select()
    .from(contactSubmissions)
    .orderBy(desc(contactSubmissions.createdAt));
  return NextResponse.json({ data: rows });
}
