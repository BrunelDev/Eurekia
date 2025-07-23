import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  // Data for the three user category cards
  const userCategories = [
    {
      title: "Particuliers",
      description:
        "Préparez votre projet en toute autonomie avec nos outils pour estimer les coûts, générer vos documents et structurer votre dossier.",
      buttonText: "Simuler votre projet",
      backgroundImage: "url(..//frame16-1.png)",
      backgroundOverlay:
        "linear-gradient(0deg,rgba(72,54,33,0.4) 0%,rgba(72,54,33,0.4) 100%)",
    },
    {
      title: "Agents immobiliers",
      description:
        "Préparez votre projet en toute autonomie avec nos outils pour estimer les coûts, générer vos documents et structurer votre dossier.",
      buttonText: "Voir un exemple",
      backgroundImage: "url(..//frame16-2.png)",
      backgroundOverlay: "none",
    },
    {
      title: "Professionnels du bâtiment",
      description:
        "Automatisez la rédaction de vos documents techniques et gagnez un temps précieux sur vos projets grâce à l'intelligence artificielle.",
      buttonText: "Accéder aux solutions",
      backgroundImage: "url(..//frame16-3.png)",
      backgroundOverlay: "none",
    },
  ];

  return (
    <section className="relative z-[5] bg-[#fbf9eb] py-[72px] px-[59px]">
      <div className="flex flex-col gap-10 max-w-[1161px] mx-auto">
        <div className="flex flex-col items-start gap-5 w-full">
          <h2 className="font-display-h4 text-[#1e1e1e] text-[length:var(--display-h4-font-size)] tracking-[var(--display-h4-letter-spacing)] leading-[var(--display-h4-line-height)] [font-style:var(--display-h4-font-style)]">
            Une plateforme pensée pour chaque acteur du projet
          </h2>

          <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
            Que vous soyez particulier, agent immobilier ou professionnel du
            bâtiment, EURÊKA vous offre des outils adaptés à vos besoins pour
            piloter, valoriser ou accélérer vos projets de construction et de
            rénovation — avec ou sans intelligence artificielle.
          </p>
        </div>

        <div className="flex justify-between gap-5 w-full">
          {userCategories.map((category, index) => (
            <Card
              key={index}
              className="w-[365px] bg-transparent border-none shadow-none"
            >
              <div
                className="h-[365px] w-full rounded-lg mb-8"
                style={{
                  background: category.backgroundOverlay
                    ? `${category.backgroundOverlay}, ${category.backgroundImage} 50% 50% / cover`
                    : `${category.backgroundImage} 50% 50% / cover`,
                }}
              />
              <CardContent className="p-0 flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <h3 className="font-heading-h3 text-[#cd9f25] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
                    {category.title}
                  </h3>
                  <p className="[font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#1e1e1e] text-base leading-5">
                    {category.description}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  className="justify-start p-0 h-10 hover:bg-transparent"
                >
                  <span className="[font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#1e1e1e] text-base leading-6">
                    {category.buttonText}
                  </span>
                  <div className="flex w-8 h-8 items-center justify-center ml-3 rounded-[1000px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
                    <ArrowRightIcon className="w-5 h-5 text-black" />
                  </div>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
