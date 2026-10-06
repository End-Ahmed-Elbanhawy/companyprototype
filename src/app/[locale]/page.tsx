import Herosection from "@/components/sections/HeroSection";
import Directpurchase from "@/components/sections/DirectPurchase";
import Industryauthority from "@/components/sections/IndustryAuthority";
import Technicalgrid from "@/components/sections/TechnicalGrid";
import Latestprojects from "@/components/sections/LatestProjects";
import Questions from "@/components/sections/Questions";

export default function Home() {
  return (
    <>
      <Herosection />
      <Directpurchase />
      <Industryauthority />
      <Technicalgrid />
      <Latestprojects />
      <Questions />
    </>
  );
}
