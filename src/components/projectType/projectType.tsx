import { Building2, Home } from "lucide-react";
import { useFormState } from "../../context/useFormState";
import BackButton from "../formTwo/PrimaryButton/BackButton";
import { PrimaryButton } from "../formTwo/PrimaryButton/PrimaryButton";

interface ProjectTypeChoice {
  type: "new" | "renovation";
  icon: typeof Building2;
  titre: string;
  sousTitre: string;
  description: string;
}

export function ProjectType() {
  const { formData, updateFormData } = useFormState();

  const choices: ProjectTypeChoice[] = [
    {
      type: "new",
      icon: Building2,
      titre: "Construction neuve",
      sousTitre: "Je construis un nouveau bâtiment",
      description:
        "Votre projet concerne la construction d'un bâtiment neuf, sans travaux sur une structure existante.",
    },
    {
      type: "renovation",
      icon: Home,
      titre: "Rénovation",
      sousTitre: "Je rénove un bâtiment existant",
      description:
        "Votre projet concerne la rénovation, l'extension ou la modification d'un bâtiment existant.",
    },
  ];

  return (
    <div className="px-4 my-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:200ms]">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540]">
          Type de projet
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Indiquez s'il s'agit d'une construction neuve ou d'une rénovation
        </p>
      </div>

      {/* Choice Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-8 items-stretch">
        {choices.map((choice) => (
          <div
            key={choice.type}
            onClick={() => {
              updateFormData({ projectType: choice.type });
            }}
            className={`w-full max-w-[400px] mx-auto rounded-xl overflow-hidden shadow-xl cursor-pointer transition-all duration-200 ${
              formData.projectType === choice.type ?
                "border-2 border-[#deb83b] ring-2 ring-[#deb83b] ring-opacity-30 scale-[1.02]"
              : "border border-gray-200 hover:border-[#deb83b] hover:border-opacity-50 hover:scale-[1.01]"
            }`}
          >
            {/* Top Section - Dark Navy */}
            <div className="bg-[#0a2540] text-white p-6 sm:p-8">
              <choice.icon
                className={`w-10 h-10 mb-4 transition-colors ${
                  formData.projectType === choice.type ?
                    "text-[#deb83b]"
                  : "text-gray-300"
                }`}
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
            <div className="bg-gray-50 p-6 sm:p-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                {choice.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-4 translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:400ms]">
        <BackButton
          handleClick={() => {
            // Go back to estimated cost step
            updateFormData({
              projectType: undefined,
              isEstimatedCostKnown: undefined,
              estimatedProjectCost: undefined,
            });
          }}
        />
        <PrimaryButton
          handleClick={() => {
            // projectType is already set, FormOne will detect it and show next step
          }}
          disabled={!formData.projectType}
        />
      </div>
    </div>
  );
}
