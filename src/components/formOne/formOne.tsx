import { DraftingCompass, HardHat } from "lucide-react";
import { useState } from "react";
import { useFormState } from "../../context/useFormState";
import { PrimaryButton } from "../formTwo/PrimaryButton/PrimaryButton";
import { PrestationCard } from "../prestationCard";

export default function FormOne() {
  const { formData, updateFormData } = useFormState();
  const [selectedService, setSelectedService] = useState<
    "AMO" | "MOE" | undefined
  >(formData.serviceChosen);

  // Determine title based on flow type
  const isForfaitFlow = formData.flowType === "forfait";
  const title =
    isForfaitFlow ?
      "Choisissez votre type de forfait"
    : "Choisissez votre type de prestations";

  return (
    <div className="px-4 my-6 space-y-8">
      {/* Title */}
      <div className="text-center translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:200ms]">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mb-3">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          {isForfaitFlow ?
            "Sélectionnez le forfait adapté à votre projet"
          : "Sélectionnez le type de prestations pour votre projet"}
        </p>
      </div>

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
