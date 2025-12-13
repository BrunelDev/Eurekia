import { useFormState } from "@/context/useFormState";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Prestation {
  titre: string;
  description: string;
  price?: string;
}

interface ForfaitRecapProps {
  forfaitType: "AMO" | "MOE";
}

// Pricing configuration
const FORFAIT_PRICING = {
  AMO: {
    new: { percentage: 3.5, minimum: 3000 },
    renovation: { percentage: 4.5, minimum: 3500 },
  },
  MOE: {
    new: { percentage: 5, minimum: 3200 },
    renovation: { percentage: 6, minimum: 3600 },
  },
};

export function ForfaitRecap({ forfaitType }: ForfaitRecapProps) {
  const { formData } = useFormState();
  const { projectType, estimatedProjectCost, isEstimatedCostKnown } = formData;

  // Calculate the forfait price if applicable
  let forfaitPrice: number | null = null;
  let pricingInfo: string = "";
  let isPendingEstimation = false;

  if (projectType) {
    const config =
      FORFAIT_PRICING[forfaitType][projectType as "new" | "renovation"];

    if (isEstimatedCostKnown === false || estimatedProjectCost === undefined) {
      isPendingEstimation = true;
      pricingInfo = `${config.percentage}% du coût prévisionnel (min. ${config.minimum.toLocaleString("fr-FR")} € HT)`;
    } else {
      const calculatedPrice = estimatedProjectCost * (config.percentage / 100);
      forfaitPrice = Math.max(calculatedPrice, config.minimum);
      pricingInfo = `${config.percentage}% de ${estimatedProjectCost.toLocaleString("fr-FR")} €`;
    }
  }

  // AMO prestations - Common to both project types
  const prestationsAMOBase: Prestation[] = [
    {
      titre: "Notice descriptive + estimation prévisionnelle",
      description:
        "Élaboration d'un descriptif sommaire du projet avec estimation indicative du coût des travaux.",
    },
    {
      titre: "Autorisation urbanisme (permis/déclaration)",
      description:
        "Montage et dépôt du dossier de permis de construire ou déclaration de travaux.",
    },
    {
      titre: "Notice accessibilité",
      description:
        "Rédaction de la notice d'accessibilité (ERP 5e catégorie ou logement).",
    },
    {
      titre: "Notice sécurité incendie",
      description:
        "Rédaction de la notice sécurité incendie (ERP 5e catégorie ou équivalent).",
    },
    {
      titre: "Planning (études & travaux)",
      description:
        "Élaboration d'un planning global (études d'ingénierie et exécution des travaux).",
    },
    {
      titre: "Coordination BET/Architecte",
      description:
        "Coordination entre les bureaux d'études techniques et l'architecte pour assurer la cohérence du projet.",
    },
    {
      titre: "Démarches concessionnaires",
      description:
        "Démarches de raccordement auprès des concessionnaires (électricité, eau, gaz, télécom, assainissement).",
    },
    {
      titre: "Cahier des charges géotechniques",
      description:
        "Rédaction du CCTP pour étude géotechnique préalable (missions G1, G2-AVP).",
    },
    {
      titre: "Rédaction CCAP",
      description:
        "Rédaction du Cahier des Clauses Administratives Particulières pour consultation des entreprises.",
    },
    {
      titre: "Rédaction règlement de consultation",
      description:
        "Élaboration du règlement de consultation (modalités d'appel d'offres, critères de sélection).",
    },
  ];

  // Additional prestations for AMO renovation
  const prestationsAMORenovation: Prestation[] = [
    {
      titre: "Diagnostic de l'existant",
      description:
        "Analyse de l'état actuel du bâtiment, identification des contraintes techniques et pathologies éventuelles.",
    },
    {
      titre: "Gestion des contraintes techniques",
      description:
        "Prise en compte de la complexité liée à l'existant (structure, réseaux, accessibilité).",
    },
  ];

  // MOE prestations - Common base for all projects
  const prestationsMOEBase: Prestation[] = [
    {
      titre: "Étude de faisabilité",
      description:
        "Étude de faisabilité (implantation, conformité, normes) avec estimation sommaire du budget travaux.",
    },
    {
      titre: "Études de conception (APS/APD/PRO)",
      description:
        "Conception sommaire et détaillée (esquisses, principes constructifs, plans détaillés).",
    },
    {
      titre: "Dossier Consultation Entreprises (DCE) & ACT",
      description:
        "Rédaction des pièces administratives (CCAP, CCTP, DPGF…) et Analyse des Offres (ACT).",
    },
    {
      titre: "Plans d'exécution technique",
      description:
        "Établissement des plans d'exécution détaillés (coffrage, charpente, électricité, plomberie, etc.).",
    },
    {
      titre: "Notes de calcul techniques",
      description:
        "Calculs de dimensionnement (électrique, plomberie, HVAC, VRD).",
    },
    {
      titre: "Études thermiques",
      description:
        "Attestation thermique, étude thermique PC (<50m² ou >50m²), étude phase chantier, attestation fin de travaux.",
    },
  ];

  // Additional prestations for MOE renovation
  const prestationsMOERenovation: Prestation[] = [
    {
      titre: "Diagnostic initial de l'existant",
      description:
        "Diagnostic technique de la structure et des éléments porteurs du bâtiment existant.",
    },
    {
      titre: "État des lieux technique",
      description:
        "Relevé et analyse de l'état actuel des installations et de la structure.",
    },
    {
      titre: "Gestion de la complexité de l'existant",
      description:
        "Prise en compte des contraintes techniques spécifiques à la rénovation (interfaces, reprises en sous-œuvre, etc.).",
    },
  ];

  // Build final prestation lists based on project type
  const getPrestationsAMO = (): Prestation[] => {
    if (projectType === "renovation") {
      return [...prestationsAMORenovation, ...prestationsAMOBase];
    }
    return prestationsAMOBase;
  };

  const getPrestationsMOE = (): Prestation[] => {
    if (projectType === "renovation") {
      return [...prestationsMOERenovation, ...prestationsMOEBase];
    }
    return prestationsMOEBase;
  };

  const prestations =
    forfaitType === "AMO" ? getPrestationsAMO() : getPrestationsMOE();
  const forfaitTitle =
    forfaitType === "AMO" ?
      "Forfait AMO - Assistance à Maîtrise d'Ouvrage"
    : "Forfait MOE - Maîtrise d'Œuvre";

  const projectTypeLabel =
    projectType === "new" ? "Neuf"
    : projectType === "renovation" ? "Rénovation"
    : "";

  return (
    <div className="w-full">
      <Card className="border border-gray-200 bg-white shadow-sm">
        <CardHeader className="bg-[#0a2540] text-white p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-[#deb83b]" strokeWidth={2} />
            <div>
              <CardTitle className="text-2xl font-bold">
                {forfaitTitle}
              </CardTitle>
              <p className="text-gray-200 text-sm mt-1">
                Forfait complet pour projets ≤ 150 m²
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="bg-[#deb83b] bg-opacity-10 px-6 py-4 border-b border-gray-200">
            <p className="text-sm font-semibold text-[#0a2540]">
              ✓ {prestations.length} prestations incluses dans ce forfait
            </p>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {prestations.map((prestation, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0 p-5 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#deb83b] flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#0a2540] text-base mb-1">
                      {prestation.titre}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {prestation.description}
                    </p>
                    {prestation.price && (
                      <p className="text-xs font-medium text-[#deb83b]">
                        {prestation.price}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 px-6 py-4 border-t-2 border-[#deb83b] space-y-3">
            {projectType && (
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-gray-600">Type de projet :</span>
                <span className="font-semibold text-[#0a2540]">
                  {projectTypeLabel}
                </span>
              </div>
            )}

            {isPendingEstimation ?
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-amber-800">
                      Coût en attente d'estimation
                    </p>
                    <p className="text-xs text-amber-700 mt-1">
                      Le prix final sera calculé après l'estimation de votre
                      projet par nos experts.
                    </p>
                    <p className="text-xs text-amber-700 mt-1 font-medium">
                      Formule : {pricingInfo} + 300 € HT (prestation
                      d'estimation)
                    </p>
                  </div>
                </div>
              </div>
            : forfaitPrice !== null ?
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">{pricingInfo}</p>
                <p className="text-2xl font-bold text-[#0a2540]">
                  {forfaitPrice.toLocaleString("fr-FR")} € HT
                </p>
                <p className="text-sm text-gray-500">
                  ({(forfaitPrice * 1.2).toLocaleString("fr-FR")} € TTC)
                </p>
              </div>
            : <p className="text-sm text-gray-700 text-center">
                <span className="font-semibold text-[#0a2540]">
                  Tarif forfaitaire avantageux
                </span>{" "}
                - Solution clé en main pour votre projet
              </p>
            }
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
