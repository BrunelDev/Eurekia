import { FooterSection } from "../../components/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";
import { FaqSection } from "./sections/FaqSection";
import { HeroSection } from "./sections/HeroSection";

export const Pricing = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white">
      <NavigationSection />
      <HeroSection />
      {/* <PricingSection />*/}
      <FaqSection />
      <FooterSection />
    </main>
  );
};
