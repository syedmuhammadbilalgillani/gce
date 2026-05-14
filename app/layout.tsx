import Footer from "@/components/footer";
import Header, { ScrollTop } from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DOMAIN_URL } from "@/constants";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#1A2B5F",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN_URL),
  title: {
    default: "GCE Group — Integrated Engineering Solutions | We Care",
    template: "%s | GCE Group",
  },
  description:
    "GCE Group delivers engineering, environmental, energy, digital, mining, and industrial solutions through specialized companies, practical expertise, and execution-focused delivery.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GCE Group",
  legalName: "GCE (Pvt.) Ltd.",
  url: DOMAIN_URL,
  logo: `${DOMAIN_URL}/favicon.ico`,
  slogan: "We Care",
  description:
    "GCE Group delivers engineering, environmental, energy, digital, mining, and industrial solutions through specialized companies, practical expertise, and execution-focused delivery.",
  email: "info@gceofficial.com",
  telephone: "+92 42 35971455",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7-A Main Gulberg",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [DOMAIN_URL],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GCE Group",
  url: DOMAIN_URL,
  publisher: { "@type": "Organization", name: "GCE Group" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-white"
        >
          Skip to main content
        </a>
        <TooltipProvider>
          <Header />
          <Script
            id="json-ld-organization"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
          />
          <Script
            id="json-ld-website"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
          />
          <ScrollTop />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
