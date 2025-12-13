import { ArrowRightIcon } from "lucide-react";
import ArrowButton from "../../../../components/ArrowButton";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";

export const SolutionsOverviewSection = (): JSX.Element => {
  // Data for the accordion items
  const solutionItems = [
    {
      title: "Simulateur de coût total du projet (simplifié & avancé)",
      content: "",
    },
    {
      title: "Simulateur photo/vidéo (rénovation intérieure, extérieure)",
      content: "",
    },
    {
      title: "Assistant numérique intelligent",
      content: "",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="container flex flex-col md:flex-row items-center gap-8 max-w-[1220px] mx-auto">
        <div className="relative w-full md:w-1/2 h-[621px] bg-[url(/placeholder-image.png)] bg-cover bg-center rounded-md" />

        <div className="flex flex-col w-full md:w-1/2 items-start gap-[60px]">
          <div className="flex flex-col items-start gap-8 w-full">
            <div className="flex items-center gap-4">
              <h2 className="font-display-h3 text-[#1e1e1e] text-[length:var(--display-h3-font-size)] tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)]">
                EURÊK&apos;IA!
              </h2>
              <Badge className="text-sm py-1 px-2 bg-[#fbf9eb] text-[#1e1e1e] border-transparent">En cours de développement</Badge>
            </div>

            <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)]">
              Des outils intelligents pour simplifier, accélérer et fiabiliser
              vos projets
            </p>
          </div>

          <div className="w-full">
            {solutionItems.map((item) => (
              <Card className="mb-3 bg-[#fbf9eb] border-none rounded-none shadow-none w-full">
                <CardContent className="p-3">
                  <h3 className="text-left font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#1e1e1e] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <ArrowButton
            handleClick={() => (window.location.href = "/pricing")}
            text="Découvrez la solution"
            lucideIcon={
              <ArrowRightIcon className="w-5 h-5 text-black group-hover:text-[#cd9f25]" />
            }
          />
        </div>
      </div>
    </section>
  );
};
