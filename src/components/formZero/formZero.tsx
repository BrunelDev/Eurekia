import { ListChecks, Package } from "lucide-react";
import { useState } from "react";
import { useFormState } from "../../context/useFormState";
import BackButton from "../formTwo/PrimaryButton/BackButton";
import { PrimaryButton } from "../formTwo/PrimaryButton/PrimaryButton";

interface FlowChoice {
  type: "forfait" | "prestations";
  icon: typeof Package;
  titre: string;
  sousTitre: string;
  description: string;
  avantages: string[];
}

export default function FormZero() {
  const { formData, updateFormData, resetStepThree } = useFormState();
  const [selectedFlow, setSelectedFlow] = useState<
    "forfait" | "prestations" | undefined
  >(formData.flowType);

  const flowChoices: FlowChoice[] = [
    {
      type: "forfait",
      icon: Package,
      titre: "Forfait complet",
      sousTitre: "Solution clé en main",
      description:
        "Optez pour un forfait tout-en-un incluant toutes les prestations nécessaires à votre projet.",
      avantages: [
        "Toutes les prestations incluses",
        "Tarif forfaitaire avantageux",
        "Solution simplifiée et rapide",
        "Parfait pour projets ≤ 150 m²",
      ],
    },
    {
      type: "prestations",
      icon: ListChecks,
      titre: "Prestations à la carte",
      sousTitre: "Personnalisez votre service",
      description:
        "Choisissez uniquement les prestations dont vous avez besoin pour votre projet sur mesure.",
      avantages: [
        "Flexibilité maximale",
        "Payez uniquement ce dont vous avez besoin",
        "Sélection personnalisée",
        "Adapté à tous types de projets",
      ],
    },
  ];

  return (
    <div className="px-4 my-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:200ms]">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540]">
          Choisissez votre formule
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Sélectionnez la formule qui correspond le mieux à vos besoins et à
          votre projet
        </p>
      </div>

      {/* Flow Choice Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-8 items-stretch">
        {flowChoices.map((choice) => (
          <div
            key={choice.type}
            onClick={() => {
              setSelectedFlow(choice.type);
              // Reset step 3 selections when changing flow type
              if (choice.type !== formData.flowType) {
                resetStepThree();
              }
            }}
            className={`w-full max-w-[500px] mx-auto rounded-xl overflow-hidden shadow-xl cursor-pointer transition-all duration-200 ${
              selectedFlow === choice.type ?
                "border-2 border-[#deb83b] ring-2 ring-[#deb83b] ring-opacity-30 scale-[1.02]"
              : "border border-gray-200 hover:border-[#deb83b] hover:border-opacity-50 hover:scale-[1.01]"
            }`}
          >
            {/* Top Section - Dark Navy */}
            <div className="bg-[#0a2540] text-white p-6 sm:p-8">
              <choice.icon
                className={`w-10 h-10 mb-4 transition-colors ${selectedFlow === choice.type ? "text-[#deb83b]" : "text-gray-300"}`}
                strokeWidth={1.5}
              />
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                {choice.titre}
              </h2>
              <p className="text-base text-gray-200 italic">
                {choice.sousTitre}
              </p>
            </div>

            {/* Bottom Section - Light Gray */}
            <div className="bg-gray-50 p-6 sm:p-8 space-y-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                {choice.description}
              </p>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Avantages
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {choice.avantages.map((avantage, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#deb83b] mr-2 font-bold">✓</span>
                      <span>{avantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="flex justify-center items-center gap-4 translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:400ms]">
        <BackButton
          handleClick={() => {
            // Navigate to homepage or reset
            window.location.href = "/";
          }}
        />
        <PrimaryButton
          handleClick={() => {
            if (selectedFlow) {
              updateFormData({
                ...formData,
                flowType: selectedFlow,
                isStepZeroChecked: true,
              });
            }
          }}
          disabled={!selectedFlow}
        />
      </div>
    </div>
  );
}
