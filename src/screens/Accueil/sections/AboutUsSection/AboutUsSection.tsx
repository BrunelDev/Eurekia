import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  // Data for the three user category cards
  const userCategories = [
    {
      title: "Particuliers",
      description:
        "Préparez votre projet en toute autonomie avec nos outils pour estimer les coûts, générer vos documents et structurer votre dossier.",
      buttonText: "Simuler votre projet",
      backgroundImage: "url(..//frame16-1.png)",
      backgroundOverlay:
        "linear-gradient(0deg,rgba(72,54,33,0.4) 0%,rgba(72,54,33,0.4) 100%)",
    },
    {
      title: "Agents immobiliers",
      description:
        "Préparez votre projet en toute autonomie avec nos outils pour estimer les coûts, générer vos documents et structurer votre dossier.",
      buttonText: "Voir un exemple",
      backgroundImage: "url(..//frame16-2.png)",
      backgroundOverlay: "none",
    },
    {
      title: "Professionnels du bâtiment",
      description:
        "Automatisez la rédaction de vos documents techniques et gagnez un temps précieux sur vos projets grâce à l'intelligence artificielle.",
      buttonText: "Accéder aux solutions",
      backgroundImage: "url(..//frame16-3.png)",
      backgroundOverlay: "none",
    },
  ];

  return (
    <section className="bg-[#fbf9eb] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-start gap-5 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e1e]">
              Une plateforme pensée pour chaque acteur du projet
            </h2>
            <p className="text-base sm:text-lg text-[#1e1e1e] max-w-4xl mx-auto md:mx-0">
              Que vous soyez particulier, agent immobilier ou professionnel du
              bâtiment, EURÊKA vous offre des outils adaptés à vos besoins pour
              piloter, valoriser ou accélérer vos projets de construction et de
              rénovation — avec ou sans intelligence artificielle.
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
                    <h3 className="text-2xl font-semibold text-[#cd9f25]">
                      {category.title}
                    </h3>
                    <p className="text-base text-[#1e1e1e] flex-grow">
                      {category.description}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="justify-start p-0 h-auto hover:bg-transparent mt-4"
                  >
                    <span className="text-base font-medium text-[#1e1e1e]">
                      {category.buttonText}
                    </span>
                    <div className="flex w-10 h-10 items-center justify-center ml-3 rounded-full overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
                      <ArrowRightIcon className="w-6 h-6 text-black" />
                    </div>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
