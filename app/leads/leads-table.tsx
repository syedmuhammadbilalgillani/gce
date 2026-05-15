"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Eye, Trash2, LogOut, Mail, Phone, RefreshCw } from "lucide-react";

type Row = {
  id: string;
  fullName: string;
  email: string;
  phone: string | null;
  company: string | null;
  service: string | null;
  subject: string | null;
  message: string;
  isRead: boolean;
  createdAt: string | Date;
};

export default function LeadsTable({ initial }: { initial: Row[] }) {
  const router = useRouter();
  const [rows, setRows] = useState<Row[]>(initial);
  const [q, setQ] = useState("");
  const [viewing, setViewing] = useState<Row | null>(null);
  const [pending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter((r) =>
      [r.fullName, r.email, r.phone, r.company, r.service, r.subject, r.message]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(s)),
    );
  }, [rows, q]);

  const markRead = async (r: Row) => {
    if (r.isRead) return;
    const res = await fetch(`/api/contact/${r.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isRead: true }),
    });
    if (res.ok) {
      setRows((prev) =>
        prev.map((x) => (x.id === r.id ? { ...x, isRead: true } : x)),
      );
    }
  };

  const remove = async (id: string) => {
    const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });
    if (res.ok) {
      setRows((prev) => prev.filter((x) => x.id !== id));
      toast.success("Lead deleted.");
    } else {
      toast.error("Failed to delete.");
    }
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  };

  const unread = rows.filter((r) => !r.isRead).length;

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary">Leads</h1>
          <p className="text-sm text-muted-foreground">
            {rows.length} total · {unread} unread
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-56"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => startTransition(() => router.refresh())}
            disabled={pending}
          >
            <RefreshCw className={`size-4 ${pending ? "animate-spin" : ""}`} />
          </Button>
          <Button variant="outline" size="sm" onClick={logout}>
            <LogOut className="size-4" /> Logout
          </Button>
        </div>
      </div>

      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground py-12">
                  No leads found.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((r) => (
                <TableRow key={r.id} className={r.isRead ? "" : "bg-amber-50/40"}>
                  <TableCell className="whitespace-nowrap text-xs text-muted-foreground">
                    {new Date(r.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell className="font-medium">{r.fullName}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-0.5 text-xs">
                      <a className="inline-flex items-center gap-1 hover:text-gold" href={`mailto:${r.email}`}>
                        <Mail className="size-3" /> {r.email}
                      </a>
                      {r.phone && (
                        <a className="inline-flex items-center gap-1 hover:text-gold" href={`tel:${r.phone}`}>
                          <Phone className="size-3" /> {r.phone}
                        </a>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{r.company ?? "—"}</TableCell>
                  <TableCell className="text-sm">{r.service ?? "—"}</TableCell>
                  <TableCell>
                    {r.isRead ? (
                      <Badge variant="secondary">Read</Badge>
                    ) : (
                      <Badge>New</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="inline-flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setViewing(r);
                          markRead(r);
                        }}
                      >
                        <Eye className="size-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="size-4 text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete this lead?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => remove(r.id)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!viewing} onOpenChange={(o) => !o && setViewing(null)}>
        <DialogContent className="max-w-2xl">
          {viewing && (
            <>
              <DialogHeader>
                <DialogTitle>{viewing.fullName}</DialogTitle>
                <DialogDescription>
                  {new Date(viewing.createdAt).toLocaleString()}
                </DialogDescription>
              </DialogHeader>
              <dl className="grid grid-cols-3 gap-y-2 text-sm">
                <dt className="text-muted-foreground">Email</dt>
                <dd className="col-span-2">{viewing.email}</dd>
                {viewing.phone && (
                  <>
                    <dt className="text-muted-foreground">Phone</dt>
                    <dd className="col-span-2">{viewing.phone}</dd>
                  </>
                )}
                {viewing.company && (
                  <>
                    <dt className="text-muted-foreground">Company</dt>
                    <dd className="col-span-2">{viewing.company}</dd>
                  </>
                )}
                {viewing.service && (
                  <>
                    <dt className="text-muted-foreground">Service</dt>
                    <dd className="col-span-2">{viewing.service}</dd>
                  </>
                )}
              </dl>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                  Message
                </div>
                <p className="whitespace-pre-wrap text-sm leading-relaxed">
                  {viewing.message}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
