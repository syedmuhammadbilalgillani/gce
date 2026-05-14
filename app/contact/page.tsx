import ContactComponent from "@/components/contact";
import { DOMAIN_URL } from "@/constants";
import { generateMetadataProps } from "@/lib/metadata";
import Script from "next/script";

export const metadata = generateMetadataProps({
  title: "Contact GCE Group — Engineering & Industrial Solutions",
  description:
    "Contact GCE Group for mining, environmental, energy, digital, and industrial engineering solutions. Office in Lahore, Pakistan.",
  keywords: [
    "Contact GCE Group",
    "engineering consultancy Lahore",
    "GCE office",
    "mining consultancy contact",
  ],
  url: `${DOMAIN_URL}/contact`,
  ogTitle: "Contact GCE Group",
  ogDescription:
    "Reach out to discuss technical, industrial, environmental, energy, mining, or digital project requirements.",
});

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${DOMAIN_URL}/contact`,
    },
  ],
};

const contactPageLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${DOMAIN_URL}/contact`,
  name: "Contact GCE Group",
  mainEntity: {
    "@type": "Organization",
    name: "GCE Group",
    email: "info@gceofficial.com",
    telephone: "+92 42 35971455",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7-A Main Gulberg",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
  },
};

const Contact = () => {
  return (
    <>
      <Script
        id="json-ld-breadcrumb-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Script
        id="json-ld-contactpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageLd) }}
      />
      <ContactComponent />
    </>
  );
};

export default Contact;
