import HomePageComponent from "@/components/home";
import { DOMAIN_URL } from "@/constants";
import { generateMetadataProps } from "@/lib/metadata";
export const metadata = generateMetadataProps({
  title: "GCE Group — Integrated Engineering Solutions | We Care",
  description: "GCE Group delivers engineering, environmental, energy, digital, mining, and industrial solutions through specialized companies, practical expertise, and execution-focused delivery.",
  keywords: ["GCE Group", "Integrated Engineering Solutions", "We Care"],
  url: DOMAIN_URL,
});
const Home = () => {
  return <HomePageComponent />;
};

export default Home;
