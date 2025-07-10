import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const AboutUsSection = () => {
  // Data for the three user type cards
  const userTypeCards = [
    {
      title: "Particuliers",
      description:
        "Préparez votre projet en toute autonomie avec nos outils pour estimer les coûts, générer vos documents et structurer votre dossier.",
      buttonText: "Simuler votre projet",
     // backgroundImage: "url(..//frame-16.png)",
      backgroundOverlay:
        "linear-gradient(0deg,rgba(72,54,33,0.4) 0%,rgba(72,54,33,0.4) 100%)",
    },
    {
      title: "Agents immobiliers",
      description:
        "Préparez votre projet en toute autonomie avec nos outils pour estimer les coûts, générer vos documents et structurer votre dossier.",
      buttonText: "Voir un exemple",
     // backgroundImage: "url(..//frame-16-1.png)",
      backgroundOverlay: "none",
    },
    {
      title: "Professionnels du bâtiment",
      description:
        "Automatisez la rédaction de vos documents techniques et gagnez un temps précieux sur vos projets grâce à l'intelligence artificielle.",
      buttonText: "Accéder aux solutions",
      backgroundImage: "url(..//placeholder-image-1.png)",
      backgroundOverlay: "none",
    },
  ];

  return (
    <section className="w-full py-16 bg-[#fbf9eb]">
      <div className="container max-w-[1161px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-start gap-5 w-full">
          <h2 className="w-full font-['Neulis_Alt-Regular',Helvetica] font-normal text-[#1e1e1e] text-4xl">
            Une plateforme pensée pour chaque acteur du projet
          </h2>

          <p className="w-full font-['Sofia_Pro-Light',Helvetica] font-light text-[#1e1e1e] text-base leading-5">
            Que vous soyez particulier, agent immobilier ou professionnel du
            bâtiment, EURÊKA vous offre des outils adaptés à vos besoins pour
            piloter, valoriser ou accélérer vos projets de construction et de
            rénovation — avec ou sans intelligence artificielle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {userTypeCards.map((card, index) => (
            <Card
              key={index}
              className="border-none shadow-none bg-transparent"
            >
              <div
                className="w-full h-[365px] rounded-lg mb-8"
                style={{
                  background: card.backgroundOverlay
                    ? `${card.backgroundOverlay}, ${card.backgroundImage} 50% 50% / cover`
                    : `${card.backgroundImage} 50% 50% / cover`,
                }}
              />
              <CardContent className="p-0 flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <h3 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[#cd9f25] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
                    {card.title}
                  </h3>
                  <p className="font-['Sofia_Pro-Light',Helvetica] font-light text-[#1e1e1e] text-base leading-5">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-['Sofia_Pro-Regular',Helvetica] font-normal text-[#1e1e1e] text-base leading-6">
                    {card.buttonText}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 p-0 bg-[#f7e1aa] rounded-full"
                  >
                    <ArrowRightIcon className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
