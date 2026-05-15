import { redirect } from "next/navigation";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { isAuthenticated } from "@/lib/auth";
import LeadsTable from "./leads-table";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  if (!(await isAuthenticated())) redirect("/login");

  const rows = await db
    .select()
    .from(contactSubmissions)
    .orderBy(desc(contactSubmissions.createdAt));

  return (
    <div className="container-gce py-12">
      <LeadsTable initial={rows} />
    </div>
  );
}
