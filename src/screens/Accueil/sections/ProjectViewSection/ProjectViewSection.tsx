import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Service item data for both cards
const engineeringServices = [
  "Assistance à la Maîtrise d'Ouvrage (AMO)",
  "Maîtrise d'œuvre complète (MOE)",
  "Rédaction de CCTP, CCAP, notices réglementaires",
  "Suivi de chantier & planification",
  "Préparation de dossiers d'autorisation",
];

const aiServices = [
  "Simulateur de coût total du projet",
  "Générateur de documents (CCTP, notice, diagnostics)",
  "Assistant IA pour réponses techniques",
  "Simulateur photo/vidéo avec rendu travaux",
  "Base technique intelligente et personnalisée",
];

export const ProjectViewSection = (): JSX.Element => {
  return (
    <section className="flex flex-wrap justify-center gap-8 py-16 bg-white">
      {/* Engineering Services Card */}
      <Card className="w-full max-w-[564px] h-[704px] rounded-[28px] overflow-hidden border-none shadow-none">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between w-full">
            <div className="bg-[#fbf9eb] translate-y-[10px]">
              <CardHeader className="px-5 py-4 bg-white rounded-[0px_0px_28px_0px]">
                <h2 className="font-heading-h1 text-[#1e1e1e] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                  EURÊKA INGENIERIE!
                </h2>
              </CardHeader>
            </div>
            <div className="flex-1 h-[69px] bg-[#fbf9eb] rounded-[28px_0px_0px_0px] "></div>
          </div>

          <CardContent className="flex-1 flex flex-col gap-5 p-8 bg-[#fbf9eb] rounded-[28px_0px_0px_0px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <p className="font-label-large text-[#444444] text-[length:var(--label-large-font-size)] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] [font-style:var(--label-large-font-style)]">
                  L&apos;expertise humaine à vos côtés
                </p>
                <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                  Un accompagnement sur mesure par des professionnels du
                  bâtiment pour sécuriser chaque étape de votre projet.
                </p>
              </div>

              <Separator className="w-[150px] h-0.5 bg-[#deb83b]" />

              <div className="flex flex-col">
                {engineeringServices.map((service, index) => (
                  <div
                    key={`engineering-service-${index}`}
                    className="flex items-center gap-3 py-3 pr-2"
                  >
                    <div className="w-5 h-5 bg-[url(/3dcube.svg)] bg-[100%_100%]" />
                    <p className="flex-1 font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                      {service}
                    </p>
                  </div>
                ))}
              </div>

              <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                Un accompagnement sur mesure par des professionnels du bâtiment
                pour sécuriser chaque étape de votre projet.
              </p>

              <Button
                variant="ghost"
                className="inline-flex h-10 items-center justify-start gap-3 p-0 w-fit"
              >
                <span className="font-label-medium text-[#1e1e1e] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                  Voir toutes les prestations
                </span>
                <div className="flex w-8 h-8 items-center justify-center rounded-[1000px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
                  <div className="w-5 h-5 bg-[url(/arrow-right.svg)] bg-[100%_100%]" />
                </div>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>

      {/* AI Services Card */}
      <Card className="w-full max-w-[564px] h-[704px] rounded-[28px] overflow-hidden border-none shadow-none">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between w-full">
            <div className="bg-[#f6f6f6] translate-y-[10px]">
              <CardHeader className="px-5 py-4 bg-white  rounded-[0px_0px_28px_0px]">
                <h2 className="font-heading-h1 text-[#1e1e1e] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                  EURÊK&apos;IA!
                </h2>
              </CardHeader>
            </div>
            <div className="flex-1 h-[69px] bg-[#f6f6f6] rounded-[28px_0px_0px_0px]"></div>
          </div>

          <CardContent className="flex-1 flex flex-col gap-5 p-8 bg-[#f6f6f6] rounded-[28px_0px_0px_0px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <p className="font-text-bold-large text-[#444444] text-[length:var(--text-bold-large-font-size)] tracking-[var(--text-bold-large-letter-spacing)] leading-[var(--text-bold-large-line-height)] [font-style:var(--text-bold-large-font-style)]">
                  L&apos;intelligence artificielle pour construire mieux et plus
                  vite
                </p>
                <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                  Des outils puissants pour simuler, générer et structurer vos
                  projets en toute autonomie.
                </p>
              </div>

              <Separator className="w-[150px] h-0.5 bg-[#deb83b]" />

              <div className="flex flex-col">
                {aiServices.map((service, index) => (
                  <div
                    key={`ai-service-${index}`}
                    className="flex items-center gap-3 py-3 pr-2"
                  >
                    <div className="w-5 h-5 bg-[url(/3dcube.svg)] bg-[100%_100%]" />
                    <p className="flex-1 font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                      {service}
                    </p>
                  </div>
                ))}
              </div>

              <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                Un accompagnement sur mesure par des professionnels du bâtiment
                pour sécuriser chaque étape de votre projet.
              </p>

              <Button
                variant="ghost"
                className="inline-flex h-10 items-center justify-start gap-3 p-0 w-fit"
              >
                <span className="font-label-medium text-[#1e1e1e] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                  Découvrir l&apos;assistant IA
                </span>
                <div className="flex w-8 h-8 items-center justify-center rounded-[1000px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
                  <div className="w-5 h-5 bg-[url(/arrow-right.svg)] bg-[100%_100%]" />
                </div>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
};
