import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
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
    <section className="w-full py-16 px-4 sm:px-8 lg:px-12 md:mt-[320px] mt-0">
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
          <Button
            variant="ghost"
            className="h-10 pl-0 pr-2 py-0 flex items-center gap-3 hover:bg-transparent"
          >
            <span className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#1e1e1e] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
              Découvrir les prestations
            </span>
            <div className="flex w-8 h-8 items-center justify-center rounded-[1000px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <div className="relative w-5 h-5 bg-[url(/arrow-right.svg)] bg-[100%_100%]" />
              </div>
            </div>
          </Button>
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
