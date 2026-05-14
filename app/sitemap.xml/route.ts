import { DOMAIN_URL } from "@/constants";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const paths = ["/", "/about", "/services", "/contact"];

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${paths
    .map(
      (path) => `
  <sitemap>
    <loc>${DOMAIN_URL}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`,
    )
    .join("")}
</sitemapindex>`;

  return new NextResponse(sitemapIndex, {
    headers: { "Content-Type": "text/xml" },
  });
}
