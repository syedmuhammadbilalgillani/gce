import ServicesComponent from "@/components/services";
import { DOMAIN_URL } from "@/constants";
import { generateMetadataProps } from "@/lib/metadata";
import Script from "next/script";

export const metadata = generateMetadataProps({
  title:
    "Services — Mining, Environment, Energy & Digital Solutions | GCE Group",
  description:
    "Explore GCE Group services across mining and industrial solutions, environmental engineering, energy systems, and digital technology through specialized group companies.",
  keywords: [
    "GCE services",
    "mining consultancy",
    "environmental engineering",
    "EIA IEE Pakistan",
    "energy engineering",
    "digital transformation",
  ],
  url: `${DOMAIN_URL}/services`,
  ogTitle: "GCE Group Services",
  ogDescription:
    "Explore GCE Group services across mining and industrial solutions, environmental engineering, energy systems, and digital technology through specialized group companies.",
});

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${DOMAIN_URL}/services`,
    },
  ],
};

const serviceCatalogLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Integrated Engineering Solutions",
  provider: { "@type": "Organization", name: "GCE Group", url: DOMAIN_URL },
  areaServed: { "@type": "Country", name: "Pakistan" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "GCE Group Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mining & Industrial Solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Environmental Engineering",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Energy Solutions" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital & Technology Solutions",
        },
      },
    ],
  },
};

const Services = () => {
  return (
    <>
      <Script
        id="json-ld-breadcrumb-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Script
        id="json-ld-service-catalog"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogLd) }}
      />
      <ServicesComponent />
    </>
  );
};

export default Services;
