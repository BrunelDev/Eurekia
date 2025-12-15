import { ArrowRightIcon } from "lucide-react";
import ArrowButton from "../../../../components/ArrowButton";
import { Card, CardContent } from "../../../../components/ui/card";

export const SolutionsSection = (): JSX.Element => {
  // Services data for the accordion
  const services = [
    {
      title: "Assistant à la Maîtrise d'Ouvrage (AMO)",
      content: "Description for AMO service.",
    },
    {
      title: "Maîtrise d'Œuvre (MOE)",
      content: "Description for MOE service.",
    },
    {
      title: "Ordonnancement, Pilotage, Coordination (OPC)",
      content: "Description for OPC service.",
    },
    {
      title: "Études techniques, notices, autorisations",
      content: "Description for technical studies.",
    },
    {
      title: "Rédaction de CCTP, CCAP, DPGF, etc.",
      content: "Description for document writing.",
    },
  ];

  return (
    <section className="w-full py-0 px-4 sm:px-8 lg:px-1 mt-0">
  <div className="container flex flex-col md:flex-row items-center gap-8 max-w-[1220px] mx-auto">
        {/* Image Column - keep image on the LEFT for desktop (match EURÊK'IA) */}
    <div className="relative w-full md:w-1/2">
          <div className="h-[621px] bg-[url(/engineer.png)] bg-cover bg-center rounded-lg" />
        </div>

  {/* Text Column (title + description + CTA + services) - match EURÊK'IA (md:1/2) */}
  <div className="flex flex-col w-full md:w-1/2 md:h-[621px] justify-between">
          <div className="space-y-6 md:space-y-8">
            <h2 className="font-display-h3 font-[number:var(--display-h3-font-weight)] text-[#1e1e1e] text-[length:var(--display-h3-font-size)] tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)] [font-style:var(--display-h3-font-style)]">
              EURÊKA INGENIERIE!
            </h2>
            <p className="font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
              L'expertise terrain de notre équipe pour piloter vos projets
            </p>
          </div>

          <div className="w-full mt-8 flex-1 overflow-auto flex flex-col gap-4">
            {services.map((service) => (
              <Card key={service.title} className="mb-3 bg-[#fbf9eb] border-none rounded-none shadow-none w-full">
                <CardContent className="p-3">
                  <h3 className="text-left font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#1e1e1e] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-0">
            <ArrowButton
              handleClick={() => (window.location.href = "/contact?sujet=Devis personnalisé")}
              text="Demander un devis personnalisé"
              lucideIcon={
                <ArrowRightIcon className="w-5 h-5 text-black group-hover:text-[#cd9f25]" />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
