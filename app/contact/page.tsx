import ContactComponent from "@/components/contact";
import { DOMAIN_URL } from "@/constants";
import { generateMetadataProps } from "@/lib/metadata";

export const metadata = generateMetadataProps({
  title:
    "Contact GCE Group — Engineering & Industrial Solutions",
  description:
    "Contact GCE Group for mining, environmental, energy, digital, and industrial engineering solutions.",
  keywords: ["GCE Group", "Integrated Engineering Solutions", "We Care"],
  url: `${DOMAIN_URL}/contact`,
  ogTitle: "Contact GCE Group",
  ogDescription:
    "Reach out to discuss technical, industrial, environmental, energy, mining, or digital project requirements.",
});

const Contact = () => {
  return <ContactComponent />;
};

export default Contact;
