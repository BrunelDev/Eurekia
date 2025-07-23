import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "../../components/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationSection } from "../../components/NavigationSection";
import { PricingSection } from "./sections/PricingSection";

export const Pricing = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white">
      <NavigationSection />
      <HeroSection />
      <PricingSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
};
