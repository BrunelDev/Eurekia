import { ArrowRightIcon } from "lucide-react";
import ArrowButton from "../../../../components/ArrowButton";
import { Button } from "../../../../components/ui/button";
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
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-8">
        {/* Image Column - Order 1 on mobile, Order 2 on desktop */}
        <div className="w-full lg:w-1/3 order-1 lg:order-2">
          <div className="h-[400px] md:h-[600px] bg-[url(/engineer.png)] bg-cover bg-center rounded-lg" />
        </div>

        {/* Left Column - Title and description - Order 2 on mobile, Order 1 on desktop */}
        <div className="w-full lg:w-1/3 flex flex-col items-start gap-8 order-2 lg:order-1">
          <h2 className="self-stretch font-display-h3 font-[number:var(--display-h3-font-weight)] text-[#1e1e1e] text-[length:var(--display-h3-font-size)] tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)] [font-style:var(--display-h3-font-style)]">
            EURÊKA INGENIERIE!
          </h2>
          <p className="self-stretch font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
            L'expertise terrain de notre équipe pour piloter vos projets
          </p>
          
          <ArrowButton
            handleClick={() => window.location.href = "/contact?sujet=Devis personnalisé"}
            text="Demander un devis personnalisé"
            lucideIcon={<ArrowRightIcon className="w-5 h-5 text-black group-hover:text-[#cd9f25]" />}
          />
        </div>

        {/* Right Column - Services accordion - Order 3 on all screens */}
        <div className="w-full lg:w-1/3 flex flex-col items-start gap-6 order-3">
          {services.map((service, index) => (
            <Card className="bg-[#fbf9eb] rounded-none shadow-none w-full border-none">
              <CardContent className="p-3">
                <h3 className="text-left font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#1e1e1e] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                  {service.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
