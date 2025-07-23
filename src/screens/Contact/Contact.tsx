import React from "react";
import { FooterSection } from "../../components/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";
import { ContactFormSection } from "./sections/ContactFormSection";

export const Contact = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white">
      <NavigationSection />
      <ContactFormSection />
      <FooterSection />
    </main>
  );
};
