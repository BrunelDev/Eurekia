import { DraftingCompass, HardHat } from "lucide-react";
import { useState } from "react";
import { useFormState } from "../../context/useFormState";
import { PrimaryButton } from "../formTwo/PrimaryButton/PrimaryButton";
import { PrestationCard } from "../prestationCard";
import { Card, CardContent } from "../ui/card";

export default function FormOne() {
  const { formData, updateFormData } = useFormState();
  const [selectedService, setSelectedService] = useState<
    "AMO" | "MOE" | undefined
  >(undefined);

  return (
    <div className="px-4 my-6 space-y-8">
      {selectedService && (
        <Card className="max-w-[620px] mx-auto border-amber-200 bg-amber-50/40">
          <CardContent className="pt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {selectedService === "AMO" ? (
                <DraftingCompass className="w-5 h-5 text-amber-600" />
              ) : (
                <HardHat className="w-5 h-5 text-amber-600" />
              )}
              <div>
                <div className="text-sm font-semibold text-amber-900">
                  Service sélectionné: {selectedService}
                </div>
                <div className="text-xs text-amber-800/80">
                  Cliquez à nouveau sur une carte pour désélectionner
                </div>
              </div>
            </div>
            <div className="text-[10px] px-2 py-1 rounded-md bg-amber-100 text-amber-800">
              Aperçu
            </div>
          </CardContent>
        </Card>
      )}
      <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-8 items-stretch">
        <PrestationCard
          onClick={() =>
            setSelectedService((prev) => (prev === "AMO" ? undefined : "AMO"))
          }
          prestation={{
            selected: selectedService === "AMO",
            code: "AMO",
            titre: "Assistance à Maîtrise d'Ouvrage",
            sousTitre: "Je pilote mon projet",
            icon: DraftingCompass,
            description:
              "L'AMO vous accompagne dans la définition et le pilotage de votre projet de construction ou rénovation.",
            avantages: [
              "Définition précise de votre projet",
              "Constitution de tous vos dossiers administratifs",
              "Accompagnement pour les autorisations d'urbanisme",
              "Coordination entre les différents intervenants",
              "Gestion des démarches auprès des concessionnaires",
              "Rédaction des cahiers des charges",
              "Aide à la sélection des entreprises",
            ],
            pourQui: [
              "Particuliers souhaitant construire ou rénover.",
              "Promoteurs immobiliers et investisseurs.",
              "Entreprises et collectivités locales.",
            ],
            exemples: [
              "Constitution du dossier de permis de construire",
              "Coordination avec l'architecte et les bureaux d'études",
              "Rédaction des notices réglementaires",
              "Planning de projet",
              "Démarches administratives",
            ],
          }}
        />

        <PrestationCard
          onClick={() =>
            setSelectedService((prev) => (prev === "MOE" ? undefined : "MOE"))
          }
          prestation={{
            selected: selectedService === "MOE",
            code: "MOE",
            titre: "Maîtrise d'Œuvre",
            sousTitre: "Je conçois techniquement mon projet",
            icon: HardHat,
            description:
              "La MOE réalise toutes les études techniques nécessaires à la conception et à l'exécution de votre projet.",
            avantages: [
              "Études de faisabilité et diagnostic technique",
              "Conception complète du projet (APS/APD/PRO)",
              "Plans d'exécution détaillés pour chaque corps d'état",
              "Notes de calcul (structure, électricité, plomberie, thermique)",
              "Dossier de consultation des entreprises (DCE)",
              "Analyse des offres des entreprises",
              "Études thermiques réglementaires (RE2020)",
            ],
            pourQui: [
              "Particuliers souhaitant construire ou rénover.",
              "Promoteurs immobiliers et investisseurs.",
              "Entreprises et collectivités locales.",
            ],
            exemples: [
              "Plans d'exécution tous corps d'état",
              "Études thermiques RE2020",
              "Dimensionnement des installations",
              "Notes de calcul techniques",
              "Dossier consultation entreprises",
            ],
          }}
        />
      </div>
      <div className="flex justify-center items-center">
        <PrimaryButton
          handleClick={() => {
            updateFormData({
              ...formData,
              isStepOneChecked: true,
              serviceChosen: selectedService || undefined,
            });
          }}
          disabled={!selectedService}
        />
      </div>
    </div>
  );
}
