import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectPresentationSection = (): JSX.Element => {
  // Data for the project tools cards
  const projectTools = [
    {
      title: "Simulateur de coût",
      description:
        "Calculez le coût total de votre projet (études, travaux, maîtrise d'œuvre) grâce à notre simulateur intelligent.",
      backgroundImage: "url(..//frame-16-3.png)",
      titleColor: "text-[#f7e1aa]",
    },
    {
      title: "Simulateur de photos IA",
      description:
        "Transformez une photo de votre bien en un visuel projeté : façade rénovée, aménagement extérieur, intérieur etc.",
      backgroundImage: "url(..//frame-16-4.png)",
      titleColor: "text-[#efe299]",
    },
    {
      title: "Assistant IA intelligent",
      description:
        "Notre assistant IA vous aide à comprendre la réglementation, les normes techniques, et à structurer vos documents de projet.",
      backgroundImage: "url(..//frame-16-5.png)",
      titleColor: "text-[#efe299]",
    },
  ];

  return (
    <section className="w-full bg-white py-[72px] px-4 md:px-12 z-[3]">
      <div className="max-w-[1161px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-start gap-5 w-full">
          <h2 className="w-full [font-family:'Neulis_Alt-Regular',Helvetica] font-normal text-[#1e1e1e] text-4xl text-center tracking-[0] leading-[normal]">
            Vos outils, à portée de clic
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between w-full gap-4"></div>
      </div>
    </section>
  );
};
