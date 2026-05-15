import "server-only";
import "dotenv/config";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const from = process.env.RESEND_FROM ?? "GCE Group <onboarding@resend.dev>";
const adminTo = process.env.ADMIN_EMAIL ?? "info@gceofficial.com";

let client: Resend | null = null;
function getClient() {
  if (!apiKey) throw new Error("RESEND_API_KEY is not set.");
  if (!client) client = new Resend(apiKey);
  return client;
}

export type ContactPayload = {
  fullName: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  subject?: string | null;
  message: string;
};

const esc = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );

function adminHtml(p: ContactPayload) {
  const row = (k: string, v?: string | null) =>
    v
      ? `<tr><td style="padding:6px 12px;color:#666;font-weight:600">${k}</td><td style="padding:6px 12px">${esc(v)}</td></tr>`
      : "";
  return `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto">
    <h2 style="color:#1A2B5F">New contact submission</h2>
    <table style="border-collapse:collapse;width:100%;border:1px solid #eee">
      ${row("Name", p.fullName)}
      ${row("Email", p.email)}
      ${row("Phone", p.phone)}
      ${row("Company", p.company)}
      ${row("Service", p.service)}
      ${row("Subject", p.subject)}
    </table>
    <h3 style="color:#1A2B5F;margin-top:24px">Message</h3>
    <p style="white-space:pre-wrap;line-height:1.6">${esc(p.message)}</p>
  </div>`;
}

function userHtml(p: ContactPayload) {
  return `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto">
    <h2 style="color:#1A2B5F">Thank you for contacting GCE Group</h2>
    <p>Hi ${esc(p.fullName)},</p>
    <p>We have received your message and our team will reach out shortly. For reference, here is a copy of what you sent:</p>
    <blockquote style="border-left:3px solid #C9A227;margin:16px 0;padding:8px 16px;background:#fafafa;white-space:pre-wrap">${esc(p.message)}</blockquote>
    <p>Regards,<br/>GCE Group<br/><a href="https://www.gceofficial.com">www.gceofficial.com</a></p>
  </div>`;
}

export async function sendContactEmails(p: ContactPayload) {
  const r = getClient();
  const [admin, ack] = await Promise.all([
    r.emails.send({
      from,
      to: [adminTo],
      replyTo: p.email,
      subject: `New lead: ${p.fullName}${p.service ? ` — ${p.service}` : ""}`,
      html: adminHtml(p),
    }),
    r.emails.send({
      from,
      to: [p.email],
      subject: "We received your message — GCE Group",
      html: userHtml(p),
    }),
  ]);
  if (admin.error) throw new Error(`Resend admin: ${admin.error.message}`);
  if (ack.error) throw new Error(`Resend ack: ${ack.error.message}`);
}
