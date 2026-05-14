// lib/metadata.ts

import type { Metadata } from "next";

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
  url = "",
  ogTitle,
  ogDescription,
  ogImage,
}: MetadataProps): Metadata {
  return {
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      url,
      siteName: "GCE Group",
      images: [
        {
          url: ogImage || image,
          width: 1200,
          height: 630,
          alt: title,
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
      canonical: url,
    },
  };
}
