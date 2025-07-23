import { FooterSection } from "../../components/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationSection } from "../../components/NavigationSection";
import { SolutionsOverviewSection } from "./sections/SolutionsOverviewSection";

export const APropos = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white">
      <NavigationSection />
      <SolutionsOverviewSection />
      <HeroSection />
      <FooterSection />
    </main>
  );
};
