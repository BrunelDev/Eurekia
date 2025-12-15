import { FooterSection } from "../../components/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { HeroSection } from "./sections/HeroSection";
import { SolutionInstant } from "./sections/SolutionInstantSection";
import { SolutionsOverviewSection } from "./sections/SolutionsOverviewSection";
import { SolutionsSection } from "./sections/SolutionsSection";

export const NosSolutions = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <NavigationSection />
      <HeroSection />
      <div className="flex flex-col gap-24 pb-8">
        {/* Order changed to: EURÊK'IA, EURÊKA INSTANT, EURÊKA INGENIERIE */}
        <SolutionsOverviewSection />
        <SolutionInstant />
        <SolutionsSection />
      </div>

      <CallToActionSection />
      <FooterSection />
    </div>
  );
};
