import HomePageComponent from "@/components/home";
import { DOMAIN_URL } from "@/constants";
import { generateMetadataProps } from "@/lib/metadata";

export const metadata = generateMetadataProps({
  title: "GCE Group — Integrated Engineering Solutions | We Care",
  description:
    "GCE Group delivers engineering, environmental, energy, digital, mining, and industrial solutions through specialized companies, practical expertise, and execution-focused delivery.",
  keywords: [
    "GCE Group",
    "engineering solutions Pakistan",
    "mining consultancy Lahore",
    "environmental engineering",
    "energy engineering",
    "industrial solutions",
    "EIA IEE Pakistan",
    "digital transformation",
  ],
  url: DOMAIN_URL,
});
const Home = () => {
  return <HomePageComponent />;
};

export default Home;
