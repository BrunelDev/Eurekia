import { Building2, LucideIcon, Sparkles, Users } from "lucide-react";

interface Prestation {
  code: "AMO" | "MOE";
  titre: string;
  sousTitre: string;
  icon: LucideIcon;
  description: string;
  avantages: string[];
  pourQui: string[];
  exemples: string[];
  selected?: boolean;
}

export function PrestationCard({
  prestation,
  onClick,
}: {
  prestation: Prestation;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`w-full max-w-[620px] grid md:grid-cols-2 rounded-xl overflow-hidden shadow-xl cursor-pointer transition-all duration-200 ${
        prestation.selected
          ? "border-2 border-amber-400 rounded-lg"
          : "border border-gray-200"
      }`}
    >
      {/* Left Section - Dark Navy */}
      <div className="bg-[#0a2540] brightness-100 text-white p-6 sm:p-8 flex flex-col justify-between min-h-[360px]">
        <div>
          <prestation.icon
            className="w-8 h-8 mb-4 text-teal-300"
            strokeWidth={1.5}
          />
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-balance">
            {prestation.titre}
          </h1>
          <p className="text-base text-gray-200 italic mb-4">
            {prestation.sousTitre}
          </p>
        </div>

        <div className="mt-auto">
          <p className="text-sm text-gray-300 leading-relaxed">
            {prestation.description}
          </p>
        </div>
      </div>

      {/* Right Section - Light Gray */}
      <div className="bg-gray-50 p-6 sm:p-8 flex flex-col justify-center space-y-4">
        {/* Avantages */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <h2 className="text-lg font-semibold text-gray-900">Avantages</h2>
          </div>

          <ul className="space-y-1.5 text-sm text-gray-700">
            {prestation.avantages.map((avantage) => (
              <li className="flex items-start" key={avantage}>
                <span className="mr-2">•</span>
                <span>{avantage}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pour Qui */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-teal-600" />
            <h2 className="text-lg font-semibold text-gray-900">Pour Qui</h2>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700">
            {prestation.pourQui.map((target) => (
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>{target}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exemples */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-teal-600" />
            <h2 className="text-lg font-semibold text-gray-900">Exemples</h2>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700">
            {prestation.exemples.map((exemple) => (
              <li className="flex items-start" key={exemple}>
                <span className="mr-2">•</span>
                <span>{exemple}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
