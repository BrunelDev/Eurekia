import { CallToActionSection } from "./sections/CallToActionSection";
import { HeroSection } from "./sections/HeroSection";
import { HeroWrapperSection } from "./sections/HeroWrapperSection";
import { NavigationSection } from "../../components/NavigationSection";
import { FooterSection } from "../../components/FooterSection";

export const RessourcesEtudeDe = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <NavigationSection />
      <HeroSection />
      <HeroWrapperSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};
