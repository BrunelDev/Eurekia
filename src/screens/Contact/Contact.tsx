import { FooterSection } from "../../components/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { HeroHeader } from "./sections/HeroHeader";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Contact = (): JSX.Element => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sujet = queryParams.get("sujet");

  useEffect(() => {
    if (sujet) {
      console.log(sujet);
      const formElement = document.getElementById('contact-form');
      console.log(formElement);
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [sujet]);
  return (
    <main className="flex flex-col w-full bg-white">
      <NavigationSection />
      <HeroHeader />
      <ContactFormSection />
      <FooterSection />
    </main>
  );
};
