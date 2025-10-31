import React from "react";  
import { FooterSection } from "./../../components/FooterSection";
import { NavigationSection } from "./../../components/NavigationSection";
import RoadmapTimeline from "./sections/RoadmapTimeline";
import { SolutionsOverviewSection } from "./sections/SolutionsOverviewSection";



// Le composant Apropos est maintenant épuré et contient uniquement la navigation,
// la roadmap et le pied de page.
export const APropos = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white">
      <NavigationSection />
      <SolutionsOverviewSection />
      {/* Intégration du composant RoadmapTimeline */}
      <RoadmapTimeline />
      
      <FooterSection />
    </main>
  );
};




