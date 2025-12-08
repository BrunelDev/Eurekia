import { ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import ArrowButton from "../../../../components/ArrowButton";

export const AboutUsSection = (): JSX.Element => {

  // Data for the three user category cards
  const userCategories = [
    {
      title: "Particuliers",
      description:
        "Préparez votre projet en toute autonomie avec nos outils pour estimer les coûts, générer vos documents et structurer votre dossier.",
      buttonText: "Simuler votre projet",
      backgroundImage: "url(..//Particuliers.png)",
     
    },
    {
      title: "Agents immobiliers",
      description:
        "Préparez votre projet en toute autonomie avec nos outils pour estimer les coûts, générer vos documents et structurer votre dossier.",
      buttonText: "Voir un exemple",
      backgroundImage: "url(..//Agent_immobilier.png)",
      
    },
    {
      title: "Professionnels du bâtiment",
      description:
        "Automatisez la rédaction de vos documents techniques et gagnez un temps précieux sur vos projets grâce à notre algorithme intelligent.",
      buttonText: "Accéder aux solutions",
      backgroundImage: "url(..//Fonctionnel_du_batiment.png)",
    },
  ];

  return (
    <section className="bg-[#fbf9eb] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-start gap-5 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl text-[#1e1e1e] font-display-h6">
              Une plateforme pensée pour chaque acteur du projet
            </h2>
            <p className="text-base sm:text-lg text-[#1e1e1e] max-w-4xl mx-auto md:mx-0 [font-family:'Sofia_Pro'] font-light">
              Que vous soyez particulier, agent immobilier ou professionnel du
              bâtiment, EURÊKA vous offre des outils adaptés à vos besoins pour
              piloter, valoriser ou accélérer vos projets de construction et de
              rénovation — avec ou sans technologies avancées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-transparent border-none shadow-none flex flex-col"
              >
                <div
                  className="h-64 sm:h-80 w-full rounded-lg mb-6 bg-cover bg-center"
                  style={{
                    backgroundImage: category.backgroundOverlay
                      ? `linear-gradient(0deg, rgba(72,54,33,0.4), rgba(72,54,33,0.4)), ${category.backgroundImage}`
                      : category.backgroundImage,
                  }}
                />
                <CardContent className="p-0 flex flex-col gap-5 flex-grow">
                  <div className="flex flex-col gap-3 flex-grow">
                    <h3 className="text-xl text-[#cd9f25] font-display-h6">
                      {category.title}
                    </h3>
                    <p className="text-base text-[#1e1e1e] flex-grow [font-family:'Sofia_Pro'] font-light">
                      {category.description}
                    </p>
                  </div>
                  <ArrowButton
                    handleClick={() => window.location.href = "category.link"}
                    text={category.buttonText}
                    lucideIcon={
                      <ArrowRightIcon className="w-6 h-6 text-black group-hover:text-[#cd9f25]" />
                    }
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
