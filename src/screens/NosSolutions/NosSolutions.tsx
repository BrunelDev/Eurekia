import { CallToActionSection } from "./sections/CallToActionSection";
import { FooterSection } from "../../components/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationSection } from "../../components/NavigationSection";
import { SolutionsOverviewSection } from "./sections/SolutionsOverviewSection";
import { SolutionsSection } from "./sections/SolutionsSection";
import { SolutionInstant } from "./sections/SolutionInstantSection";

export const NosSolutions = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <NavigationSection />
      <HeroSection />
      <SolutionsSection />
      <SolutionsOverviewSection />
      <SolutionInstant/>
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};
