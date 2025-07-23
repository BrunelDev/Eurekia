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
      title: "Simulateur de photos IA",
      description:
        "Transformez une photo de votre bien en un visuel projeté : façade rénovée, aménagement extérieur, intérieur etc.",
      backgroundImage: "url(..//frame16-5.png)",
      titleColor: "text-[#efe299]",
    },
    {
      title: "Assistant IA intelligent",
      description:
        "Notre assistant IA vous aide à comprendre la réglementation, les normes techniques, et à structurer vos documents de projet.",
      backgroundImage: "url(..//frame16-6.png)",
      titleColor: "text-[#efe299]",
    },
  ];

  return (
    <section className="w-full bg-white py-[72px] px-4 md:px-12 z-[3]">
      <div className="max-w-[1161px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-start gap-5 w-full">
          <h2 className="w-full [font-family:'Neulis_Alt-Regular',Helvetica] font-normal text-[#1e1e1e] text-4xl text-center tracking-[0] leading-[normal]">
            Vos outils, à portée de clic
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between w-full gap-4">
          {projectTools.map((tool, index) => (
            <Card
              key={`tool-${index}`}
              className="w-full md:w-[365px] h-[559px] rounded-xl overflow-hidden p-0 border-0 relative"
              style={{
                background: `linear-gradient(180deg, rgba(72,54,33,0) 0%, rgba(72,54,33,0.8) 100%), ${tool.backgroundImage} 50% 50% / cover`,
              }}
            >
              <CardContent className="flex flex-col items-start gap-3 p-5 absolute bottom-0 w-full">
                <h3
                  className={`self-stretch font-heading-h3 font-[number:var(--heading-h3-font-weight)] ${tool.titleColor} text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]`}
                >
                  {tool.title}
                </h3>
                <p className="self-stretch font-text-medium font-[number:var(--text-medium-font-weight)] text-white text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
