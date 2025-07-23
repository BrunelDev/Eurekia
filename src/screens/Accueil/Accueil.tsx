import React from "react";
import { AboutUsDetailsSection } from "./sections/AboutUsDetailsSection";
import { AboutUsSection } from "./sections/AboutUsSection";
import { BlogPresentationSection } from "./sections/BlogPresentationSection";
import { FooterSection } from "../../components/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationSection } from "../../components/NavigationSection";
import { ProjectPresentationSection } from "./sections/ProjectPresentationSection";
import { ProjectViewSection } from "./sections/ProjectViewSection";

export const Accueil = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <NavigationSection />
      <HeroSection />
      <AboutUsSection />
      <ProjectViewSection />
      <ProjectPresentationSection />
      <AboutUsDetailsSection />
      <BlogPresentationSection />
      <FooterSection />
    </div>
  );
};
