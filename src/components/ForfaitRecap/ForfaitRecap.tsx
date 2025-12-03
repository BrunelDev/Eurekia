import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Prestation {
  titre: string;
  description: string;
  price?: string;
}

interface ForfaitRecapProps {
  forfaitType: "AMO" | "MOE";
}

export function ForfaitRecap({ forfaitType }: ForfaitRecapProps) {
  const prestationsAMO: Prestation[] = [
    {
      titre: "Notice descriptive + estimation prévisionnelle",
      description:
        "Élaboration d'un descriptif sommaire du projet avec estimation indicative du coût des travaux.",
      price: "300 € HT",
    },
    {
      titre: "Autorisation urbanisme (permis/déclaration)",
      description:
        "Montage et dépôt du dossier de permis de construire ou déclaration de travaux.",
      price: "50 € HT/m², min. 1 500 €",
    },
    {
      titre: "Notice accessibilité",
      description:
        "Rédaction de la notice d'accessibilité (ERP 5e catégorie ou logement).",
      price: "300 € HT",
    },
    {
      titre: "Notice sécurité incendie",
      description:
        "Rédaction de la notice sécurité incendie (ERP 5e catégorie ou équivalent).",
      price: "300 € HT",
    },
    {
      titre: "Planning (études & travaux)",
      description:
        "Élaboration d'un planning global (études d'ingénierie et exécution des travaux).",
      price: "400 € HT",
    },
    {
      titre: "Démarches concessionnaires",
      description:
        "Démarches de raccordement auprès des concessionnaires (électricité, eau, gaz, télécom, assainissement).",
      price: "300 € HT",
    },
    {
      titre: "Cahier des charges géotechniques",
      description:
        "Rédaction du CCTP pour étude géotechnique préalable (missions G1, G2-AVP).",
      price: "300 € HT",
    },
    {
      titre: "Rédaction CCAP",
      description:
        "Rédaction du Cahier des Clauses Administratives Particulières pour consultation des entreprises.",
      price: "300 € HT",
    },
    {
      titre: "Rédaction règlement de consultation",
      description:
        "Élaboration du règlement de consultation (modalités d'appel d'offres, critères de sélection).",
      price: "300 € HT",
    },
  ];

  const prestationsMOE: Prestation[] = [
    {
      titre: "Diagnostic (construction existante)",
      description:
        "Diagnostic technique de la structure et des éléments porteurs du bâtiment.",
      price: "~1 685 € HT",
    },
    {
      titre: "Étude de faisabilité",
      description:
        "Étude de faisabilité (implantation, conformité, normes) avec estimation sommaire du budget travaux.",
      price: "500 € HT",
    },
    {
      titre: "Études de conception (APS/APD)",
      description:
        "Conception sommaire (esquisses, principes constructifs) incluant estimation des lots gros-œuvre.",
      price: "~65 € HT/m²",
    },
    {
      titre: "Dossier Consultation Entreprises (DCE) & ACT",
      description:
        "Rédaction des pièces administratives (CCAP, CCTP, DPGF…) et Analyse des Offres (ACT).",
      price: "~5% montant travaux, min. 2 500 €",
    },
    {
      titre: "Plans d'exécution technique",
      description:
        "Établissement des plans d'exécution détaillés (coffrage, charpente, électricité, plomberie, etc.).",
      price: "150 € HT min.",
    },
    {
      titre: "Note de calcul électrique",
      description:
        "Calculs de dimensionnement des installations électriques (courants forts/faibles).",
      price: "300 € HT",
    },
    {
      titre: "Note de calcul plomberie",
      description:
        "Calculs de dimensionnement des réseaux d'eau potable et d'assainissement.",
      price: "300 € HT",
    },
    {
      titre: "Note de calcul aéraulique (HVAC)",
      description:
        "Calculs de dimensionnement des réseaux de ventilation/climatisation.",
      price: "300 € HT",
    },
    {
      titre: "Note de calcul VRD",
      description:
        "Calculs de dimensionnement VRD (voirie, assainissement pluvial et EU).",
      price: "300 € HT",
    },
    {
      titre: "Attestation thermique (PC <50 m²)",
      description:
        "Attestation de respect de la réglementation thermique (RT/RE2020) pour dépôt de permis (<50 m²).",
      price: "16 € HT",
    },
    {
      titre: "Étude thermique (PC >50 m²)",
      description:
        "Étude thermique réglementaire (RT/RE2020) préalable au permis de construire (>50 m²).",
      price: "90 € HT",
    },
    {
      titre: "Étude thermique (phase chantier)",
      description:
        "Calculs thermiques en cours de chantier (bilans Cep, etc.).",
      price: "208 € HT",
    },
    {
      titre: "Attestation + ACV fin de travaux (>50 m²)",
      description:
        "Calculs finaux (Cep, Cepₙr, Ic énergie+construction) et attestation de conformité RT/RE2020 avec ACV.",
      price: "290 € HT",
    },
  ];

  const prestations = forfaitType === "AMO" ? prestationsAMO : prestationsMOE;
  const forfaitTitle =
    forfaitType === "AMO" ?
      "Forfait AMO - Assistance à Maîtrise d'Ouvrage"
    : "Forfait MOE - Maîtrise d'Œuvre";

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

          <div className="bg-gray-50 px-6 py-4 border-t-2 border-[#deb83b]">
            <p className="text-sm text-gray-700 text-center">
              <span className="font-semibold text-[#0a2540]">
                Tarif forfaitaire avantageux
              </span>{" "}
              - Solution clé en main pour votre projet
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
