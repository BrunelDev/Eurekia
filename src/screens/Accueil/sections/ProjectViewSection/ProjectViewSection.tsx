import ArrowButton from "../../../../components/ArrowButton";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { ArrowRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";

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
  "Assistant numérique pour réponses techniques",
  "Simulateur photo/vidéo avec rendu travaux",
  "Base technique intelligente et personnalisée",
];

export const ProjectViewSection = (): JSX.Element => {
  
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/**
         * center the grid
         */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Engineering Services Card */}
          <Card className="w-full max-w-[564px] min-h-[704px] rounded-[28px] overflow-hidden border-none shadow-none">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between w-full translate-y-1 rounded-tr-[28px] overflow-hidden">
                <div className="bg-[#fbf9eb] ">
                  <CardHeader className="px-5 py-4 bg-white rounded-[0px_0px_28px_0px] overflow-hidden">
                    <h2 className="md:text-3xl text-xl md:font-bold font-semibold font-heading-h1 text-[#1e1e1e]  tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                      EURÊKA INGENIERIE!
                    </h2>
                  </CardHeader>
                </div>
                <div className="flex-1 h-[69px] bg-[#fbf9eb] rounded-[28px_0px_0px_0px]"></div>
              </div>

              <CardContent className="flex-1 flex flex-col gap-5 p-8 bg-[#fbf9eb] rounded-[28px_0px_0px_0px]">
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                    <p className="font-label-large text-[#444444] text-[length:var(--label-large-font-size)] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] [font-style:var(--label-large-font-style)]">
                      L’expertise humaine à vos côtés
                    </p>
                    <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                      Un accompagnement sur mesure par des professionnels du
                      bâtiment pour sécuriser chaque étape de votre projet.
                    </p>
                  </div>

                  <Separator className="w-24 h-0.5 bg-[#deb83b]" />

                  <div className="flex flex-col gap-2">
                    {engineeringServices.map((service, index) => (
                      <div
                        key={`engineering-service-${index}`}
                        className="flex items-center gap-4 py-2"
                      >
                        <img
                          src="/box-icon.svg"
                          alt="Box Icon"
                          className="w-6 h-6"
                        />
                        <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                          {service}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                    Un accompagnement sur mesure par des professionnels du
                    bâtiment pour sécuriser chaque étape de votre projet.
                  </p>

                  <ArrowButton
                    handleClick={() => window.location.href = "/contact?sujet=Devis%20personnalis%C3%A9"}
                    text="Demander un devis personnalisé"
                    lucideIcon={
                      <ArrowRightIcon className="w-6 h-6 text-black group-hover:text-[#cd9f25]" />
                    }
                  />
                </div>
              </CardContent>
            </div>
          </Card>

          {/* AI Services Card */}
          <Card className="w-full max-w-[564px] min-h-[704px] rounded-[28px] overflow-hidden border-none shadow-none">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between w-full translate-y-1 rounded-tr-[28px] overflow-hidden">
                <div className="bg-[#f6f6f6] ">
                  <CardHeader className="px-5 py-4 bg-white rounded-[0px_0px_28px_0px] overflow-hidden">
                    <div className="flex items-center gap-4">
                      <h2 className="md:text-3xl text-xl md:font-bold font-semibold font-heading-h1 text-[#1e1e1e]  tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                        EURÊK’IA!
                      </h2>
                      <Badge className="text-sm py-1 px-2 bg-[#f6f6f6] text-[#1e1e1e] border-transparent">En cours de développement</Badge>
                    </div>
                  </CardHeader>
                </div>
                <div className="flex-1 h-[69px] bg-[#f6f6f6] rounded-[28px_0px_0px_0px]"></div>
              </div>

              <CardContent className="flex-1 flex flex-col gap-5 p-8 bg-[#f6f6f6] rounded-[28px_0px_0px_0px]">
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                    <p className="font-label-large text-[#444444] text-[length:var(--label-large-font-size)] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] [font-style:var(--label-large-font-style)]">
                      Les technologies avancées pour construire mieux et plus
                      vite
                    </p>
                    <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                      Des outils puissants pour simuler, générer et structurer
                      vos projets en toute autonomie.
                    </p>
                  </div>

                  <Separator className="w-24 h-0.5 bg-[#deb83b]" />

                  <div className="flex flex-col gap-2">
                    {aiServices.map((service, index) => (
                      <div
                        key={`ai-service-${index}`}
                        className="flex items-center gap-4 py-2"
                      >
                        <img
                          src="/box-icon.svg"
                          alt="Box Icon"
                          className="w-6 h-6"
                        />
                        <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                          {service}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                    Un accompagnement sur mesure par des professionnels du
                    bâtiment pour sécuriser chaque étape de votre projet.
                  </p>

                  <ArrowButton
                    handleClick={() => window.location.href = "/pricing"}
                    text="Découvrir l'assistant intelligent"
                    lucideIcon={
                      <ArrowRightIcon className="w-6 h-6 text-black group-hover:text-[#cd9f25]" />
                    }
                  />
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
