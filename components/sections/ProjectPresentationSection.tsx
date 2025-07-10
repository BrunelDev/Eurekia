import React from "react";
import { Card, CardContent } from "../ui/card";

export const ProjectPresentationSection = () => {
  // Data for the tool cards
  const toolCards = [
    {
      title: "Simulateur de coût",
      description: "Calculez le coût total de votre projet (études, travaux, maîtrise d'œuvre) grâce à notre simulateur intelligent.",
      //bgImage: "..frame-16-3.png",
      titleColor: "text-[#f7e1aa]",
    },
    {
      title: "Simulateur de photos IA",
      description:
        "Transformez une photo de votre bien en un visuel projeté : façade rénovée, aménagement extérieur, intérieur etc.",
      //bgImage: "..frame-16-4.png",
      titleColor: "text-[#efe299]",
    },
    {
      title: "Assistant IA intelligent",
      description:
        "Notre assistant IA vous aide à comprendre la réglementation, les normes techniques, et à structurer vos documents de projet.",
      //bgImage: "..//frame-16-5.png",
      titleColor: "text-[#efe299]",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-10">
          <header className="text-center">
            <h2 className="font-['Neulis_Alt-Regular',Helvetica] font-normal text-[#1e1e1e] text-4xl">
              Vos outils, à portée de clic
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toolCards.map((card, index) => (
              <Card
                key={index}
                className="border-0 rounded-[20px] overflow-hidden h-[559px] flex flex-col"
                style={{
                  background: `linear-gradient(180deg, rgba(72,54,33,0) 0%, rgba(72,54,33,0.8) 100%)`,
                }}
              >
                <CardContent className="mt-auto p-5">
                  <div className="flex flex-col gap-3">
                    <h3
                      className={`mt-[-1px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] ${card.titleColor} text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]`}
                    >
                      {card.title}
                    </h3>
                    <p className="font-['Sofia_Pro-Light',Helvetica] font-light text-white text-base leading-5">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
