import React from "react";
import { AboutUsDetailsSection } from "@/components/sections/AboutUsDetailsSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { BlogPresentationSection } from "@/components/sections/BlogPresentationSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MainContentSection } from "@/components/sections/MainContentSection";
import { NavigationSection } from "@/components/sections/NavigationSection";
import { ProjectPresentationSection } from "@/components/sections/ProjectPresentationSection";
import { ProjectViewSection } from "@/components/sections/ProjectViewSection";

export default function Accueil() {
  return (
    <div className="flex flex-col w-full bg-white">
      <NavigationSection />
      <HeroSection />
      <AboutUsSection />
      <ProjectViewSection />
      <ProjectPresentationSection />
      <AboutUsDetailsSection />
      <BlogPresentationSection />
      <MainContentSection />
    </div>
  );
}
