import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectPresentationSection = (): JSX.Element => {
  // Data for the project tools cards
  const projectTools = [
    {
      title: "Simulateur de coût",
      description:
        "Calculez le coût total de votre projet (études, travaux, maîtrise d'œuvre) grâce à notre simulateur intelligent.",
      backgroundImage: "url(..//frame16-4.png)",
      titleColor: "text-[#f7e1aa]",
    },
    {
      title: "Simulateur de photos",
      description:
        "Transformez une photo de votre bien en un visuel projeté : façade rénovée, aménagement extérieur, intérieur etc.",
      backgroundImage: "url(..//frame16-5.png)",
      titleColor: "text-[#efe299]",
    },
    {
      title: "Assistant intelligent",
      description:
        "Notre assistant numérique intelligent vous aide à comprendre la réglementation, les normes techniques, et à structurer vos documents de projet.",
      backgroundImage: "url(..//frame16-6.png)",
      titleColor: "text-[#efe299]",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col gap-12 text-center">
          <h2 className="text-3xl sm:text-4xl text-[#1e1e1e] font-display-h6">
            Vos outils, à portée de clic
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTools.map((tool, index) => (
                <Card
                key={`tool-${index}`}
                className="w-full h-96 sm:h-[500px] rounded-xl overflow-hidden p-0 border-0 relative group bg-cover bg-center"
                style={{
                  backgroundImage: tool.backgroundImage,
                }}
              >
                <CardContent className="flex flex-col items-start justify-end gap-4 p-6 text-left h-full">
                  <h3 className={`text-xl ${tool.titleColor} font-display-h6`}>
                    {tool.title}
                  </h3>
                  <p className="text-base text-white [font-family:'Sofia_Pro'] font-light">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
