import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

export const ProjectViewSection = ()=> {
  // Service data for the left card (EURÊKA INGENIERIE)
  const engineeringServices = [
    "Assistance à la Maîtrise d'Ouvrage (AMO)",
    "Maîtrise d'œuvre complète (MOE)",
    "Rédaction de CCTP, CCAP, notices réglementaires",
    "Suivi de chantier & planification",
    "Préparation de dossiers d'autorisation",
  ];

  // Service data for the right card (EURÊK'IA)
  const aiServices = [
    "Simulateur de coût total du projet",
    "Générateur de documents (CCTP, notice, diagnostics)",
    "Assistant IA pour réponses techniques",
    "Simulateur photo/vidéo avec rendu travaux",
    "Base technique intelligente et personnalisée",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 w-full py-16">
      {/* Left Card - EURÊKA INGENIERIE */}
      <Card className="w-[564px] h-[704px] rounded-[28px] overflow-hidden border-none">
        <div className="flex flex-col h-full">
          <div className="flex items-center">
            <CardHeader className="p-0 bg-white rounded-[0px_0px_28px_0px] z-10">
              <CardTitle className="px-5 py-4 font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[#1e1e1e] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                EURÊKA INGENIERIE!
              </CardTitle>
            </CardHeader>
            <div className="flex-1 h-[69px] bg-[#fbf9eb] rounded-[28px_0px_0px_0px]"></div>
          </div>

          <CardContent className="flex-1 flex flex-col gap-5 p-8 bg-[#fbf9eb] rounded-[28px_0px_0px_0px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="[font-family:'Neulis_Alt-Regular',Helvetica] font-normal text-[#6d6d6d] text-lg leading-7">
                  L&apos;expertise humaine à vos côtés
                </div>
                <div className="[font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#1e1e1e] text-base leading-5">
                  Un accompagnement sur mesure par des professionnels du
                  bâtiment pour sécuriser chaque étape de votre projet.
                </div>
              </div>

              <Separator className="w-[150px] h-0.5 bg-[#deb83b]" />

              <div className="flex flex-col">
                {engineeringServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 py-3 pr-2"
                  >
                    <div className="w-5 h-5 bg-[url(/3dcube.svg)] bg-[100%_100%]" />
                    <div className="[font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#1e1e1e] text-base leading-5">
                      {service}
                    </div>
                  </div>
                ))}
              </div>

              <div className="[font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#1e1e1e] text-base leading-5">
                Un accompagnement sur mesure par des professionnels du bâtiment
                pour sécuriser chaque étape de votre projet.
              </div>

              <Button
                variant="ghost"
                className="w-fit h-10 p-0 gap-3 hover:bg-transparent"
              >
                <span className="[font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#1e1e1e] text-base leading-6">
                  Voir toutes les prestations
                </span>
                <div className="flex w-8 h-8 items-center justify-center bg-[#f7e1aa] rounded-full">
                  <div className="w-5 h-5 bg-[url(/arrow-right.svg)] bg-[100%_100%]" />
                </div>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>

      {/* Right Card - EURÊK'IA */}
      <Card className="w-[564px] h-[704px] rounded-[28px] overflow-hidden border-none">
        <div className="flex flex-col h-full">
          <div className="flex items-center">
            <CardHeader className="p-0 bg-white rounded-[0px_0px_28px_0px] z-10">
              <CardTitle className="px-5 py-4 font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[#1e1e1e] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                EURÊK&apos;IA!
              </CardTitle>
            </CardHeader>
            <div className="flex-1 h-[69px] bg-[#f6f6f6] rounded-[28px_0px_0px_0px]"></div>
          </div>

          <CardContent className="flex-1 flex flex-col gap-5 p-8 bg-[#f6f6f6] rounded-[28px_0px_0px_0px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="[font-family:'Neulis_Alt-Regular',Helvetica] font-normal text-[#6d6d6d] text-lg leading-7">
                  L&apos;intelligence artificielle pour construire mieux et plus
                  vite
                </div>
                <div className="[font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#1e1e1e] text-base leading-5">
                  Des outils puissants pour simuler, générer et structurer vos
                  projets en toute autonomie.
                </div>
              </div>

              <Separator className="w-[150px] h-0.5 bg-[#deb83b]" />

              <div className="flex flex-col">
                {aiServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 py-3 pr-2"
                  >
                    <div className="w-5 h-5 bg-[url(/3dcube.svg)] bg-[100%_100%]" />
                    <div className="[font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#1e1e1e] text-base leading-5">
                      {service}
                    </div>
                  </div>
                ))}
              </div>

              <div className="[font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#1e1e1e] text-base leading-5">
                Un accompagnement sur mesure par des professionnels du bâtiment
                pour sécuriser chaque étape de votre projet.
              </div>

              <Button
                variant="ghost"
                className="w-fit h-10 p-0 gap-3 hover:bg-transparent"
              >
                <span className="[font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#1e1e1e] text-base leading-6">
                  Découvrir l&apos;assistant IA
                </span>
                <div className="flex w-8 h-8 items-center justify-center bg-[#f7e1aa] rounded-full">
                  <div className="w-5 h-5 bg-[url(/arrow-right.svg)] bg-[100%_100%]" />
                </div>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};
