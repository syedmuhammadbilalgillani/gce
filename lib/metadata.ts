import type { Metadata } from "next";
import { DOMAIN_URL } from "@/constants";

type MetadataProps = {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

export function generateMetadataProps({
  title,
  description,
  keywords = [],
  image = "/og-image.png",
  url = DOMAIN_URL,
  ogTitle,
  ogDescription,
  ogImage,
}: MetadataProps): Metadata {
  const canonical = url || DOMAIN_URL;
  return {
    title,
    description,
    keywords,
    applicationName: "GCE Group",
    authors: [{ name: "GCE Group", url: DOMAIN_URL }],
    creator: "GCE Group",
    publisher: "GCE Group",
    metadataBase: new URL(DOMAIN_URL),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      url: canonical,
      siteName: "GCE Group",
      images: [
        {
          url: ogImage || image,
          width: 1200,
          height: 630,
          alt: ogTitle || title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle || title,
      description: ogDescription || description,
      images: [ogImage || image],
    },
    alternates: {
      canonical,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}
