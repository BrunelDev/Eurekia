import { FooterSection } from "../../components/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { HeroHeader } from "./sections/HeroHeader";

export const Contact = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white">
      <NavigationSection />
      <HeroHeader />
      <ContactFormSection />
      <FooterSection />
    </main>
  );
};
