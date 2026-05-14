import { DOMAIN_URL } from "@/constants";
import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const lastmod = new Date().toISOString();
  const urls: Array<{ path: string; priority: number; changefreq: string }> = [
    { path: "/", priority: 1.0, changefreq: "weekly" },
    { path: "/about", priority: 0.8, changefreq: "monthly" },
    { path: "/services", priority: 0.9, changefreq: "monthly" },
    { path: "/contact", priority: 0.7, changefreq: "yearly" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${DOMAIN_URL}${u.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
