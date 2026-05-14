import AboutComponent from "@/components/about";
import { DOMAIN_URL } from "@/constants";
import { generateMetadataProps } from "@/lib/metadata";

export const metadata = generateMetadataProps({
  title: "About GCE Group — Engineering, Mining, Energy & Digital Solutions",
  description:
    "Learn about GCE Group, a diversified engineering and industrial group built on industry-academia collaboration, practical execution, and specialized companies across mining, environment, energy, and digital sectors.",
  keywords: ["GCE Group", "Integrated Engineering Solutions", "We Care"],
  url: `${DOMAIN_URL}/about`,
  ogTitle: "About GCE Group",
  ogDescription:
    "A diversified engineering and industrial group delivering practical solutions through specialized companies, technical expertise, and execution-focused delivery.",
});

const About = () => {
  return <AboutComponent />;
};

export default About;
