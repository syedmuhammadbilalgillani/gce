import { NextResponse, type NextRequest } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { isAuthenticated } from "@/lib/auth";

export const runtime = "nodejs";

export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  if (!(await isAuthenticated()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const body = await req.json().catch(() => ({}));
  const patch: { isRead?: boolean } = {};
  if (typeof body.isRead === "boolean") patch.isRead = body.isRead;
  if (!Object.keys(patch).length)
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  const [row] = await db
    .update(contactSubmissions)
    .set(patch)
    .where(eq(contactSubmissions.id, id))
    .returning();
  if (!row)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ data: row });
}

export async function DELETE(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  if (!(await isAuthenticated()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const [row] = await db
    .delete(contactSubmissions)
    .where(eq(contactSubmissions.id, id))
    .returning();
  if (!row)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
