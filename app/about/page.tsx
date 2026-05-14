import AboutComponent from "@/components/about";
import { DOMAIN_URL } from "@/constants";
import { generateMetadataProps } from "@/lib/metadata";
import Script from "next/script";

export const metadata = generateMetadataProps({
  title: "About GCE Group — Engineering, Mining, Energy & Digital Solutions",
  description:
    "Learn about GCE Group, a diversified engineering and industrial group built on industry-academia collaboration, practical execution, and specialized companies across mining, environment, energy, and digital sectors.",
  keywords: [
    "About GCE Group",
    "engineering company Pakistan",
    "GCE history",
    "GCE leadership",
  ],
  url: `${DOMAIN_URL}/about`,
  ogTitle: "About GCE Group",
  ogDescription:
    "A diversified engineering and industrial group delivering practical solutions through specialized companies, technical expertise, and execution-focused delivery.",
});

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${DOMAIN_URL}/about`,
    },
  ],
};

const About = () => {
  return (
    <>
      <Script
        id="json-ld-breadcrumb-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <AboutComponent />
    </>
  );
};

export default About;
