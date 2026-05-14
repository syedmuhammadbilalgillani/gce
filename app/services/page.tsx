import ServicesComponent from "@/components/services";
import { DOMAIN_URL } from "@/constants";
import { generateMetadataProps } from "@/lib/metadata";

export const metadata = generateMetadataProps({
  title:
    "Services — Mining, Environment, Energy & Digital Solutions | GCE Group",
  description:
    "Explore GCE Group services across mining and industrial solutions, environmental engineering, energy systems, and digital technology through specialized group companies.",
  keywords: ["GCE Group", "Integrated Engineering Solutions", "We Care"],
  url: `${DOMAIN_URL}/services`,
  ogTitle: "GCE Group Services",
  ogDescription:
    "Explore GCE Group services across mining and industrial solutions, environmental engineering, energy systems, and digital technology through specialized group companies.",
});

const Services = () => {
  return <ServicesComponent />;
};

export default Services;
