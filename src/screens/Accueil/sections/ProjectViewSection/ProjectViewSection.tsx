import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { ArrowRightIcon, BoxIcon } from "lucide-react";

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
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Engineering Services Card */}
          <Card className="w-full h-full flex flex-col rounded-3xl overflow-hidden border-none shadow-none bg-[#fbf9eb]">
            <CardHeader className="p-6 sm:p-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e1e]">
                EURÊKA INGENIERIE!
              </h2>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-6 sm:gap-8 p-6 sm:p-8 pt-0">
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold text-[#444444]">
                  L'expertise humaine à vos côtés
                </p>
                <p className="text-base text-[#1e1e1e]">
                  Un accompagnement sur mesure par des professionnels du
                  bâtiment pour sécuriser chaque étape de votre projet.
                </p>
              </div>

              <Separator className="w-24 h-1 bg-[#deb83b]" />

              <div className="flex flex-col gap-2">
                {engineeringServices.map((service, index) => (
                  <div
                    key={`engineering-service-${index}`}
                    className="flex items-center gap-4 py-2"
                  >
                    <BoxIcon className="w-6 h-6 text-[#cd9f25]" />
                    <p className="flex-1 text-base text-[#1e1e1e]">{service}</p>
                  </div>
                ))}
              </div>

              <p className="text-base text-[#1e1e1e]">
                Un accompagnement sur mesure par des professionnels du bâtiment
                pour sécuriser chaque étape de votre projet.
              </p>

              <Button
                variant="ghost"
                className="inline-flex h-auto items-center justify-start gap-3 p-0 w-fit mt-auto"
              >
                <span className="text-base font-medium text-[#1e1e1e]">
                  Voir toutes les prestations
                </span>
                <div className="flex w-10 h-10 items-center justify-center rounded-full overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
                  <ArrowRightIcon className="w-6 h-6 text-black" />
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* AI Services Card */}
          <Card className="w-full h-full flex flex-col rounded-3xl overflow-hidden border-none shadow-none bg-[#f6f6f6]">
            <CardHeader className="p-6 sm:p-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e1e]">
                EURÊK'IA!
              </h2>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-6 sm:gap-8 p-6 sm:p-8 pt-0">
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold text-[#444444]">
                  L'intelligence artificielle pour construire mieux et plus vite
                </p>
                <p className="text-base text-[#1e1e1e]">
                  Des outils puissants pour simuler, générer et structurer vos
                  projets en toute autonomie.
                </p>
              </div>

              <Separator className="w-24 h-1 bg-[#deb83b]" />

              <div className="flex flex-col gap-2">
                {aiServices.map((service, index) => (
                  <div
                    key={`ai-service-${index}`}
                    className="flex items-center gap-4 py-2"
                  >
                    <BoxIcon className="w-6 h-6 text-[#cd9f25]" />
                    <p className="flex-1 text-base text-[#1e1e1e]">{service}</p>
                  </div>
                ))}
              </div>

              <p className="text-base text-[#1e1e1e]">
                Un accompagnement sur mesure par des professionnels du bâtiment
                pour sécuriser chaque étape de votre projet.
              </p>

              <Button
                variant="ghost"
                className="inline-flex h-auto items-center justify-start gap-3 p-0 w-fit mt-auto"
              >
                <span className="text-base font-medium text-[#1e1e1e]">
                  Découvrir l'assistant IA
                </span>
                <div className="flex w-10 h-10 items-center justify-center rounded-full overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
                  <ArrowRightIcon className="w-6 h-6 text-black" />
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
