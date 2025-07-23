import React from "react";
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
      content: "",
    },
    {
      title: "Maîtrise d'Œuvre (MOE)",
      content: "",
    },
    {
      title: "Ordonnancement, Pilotage, Coordination (OPC)",
      content: "",
    },
    {
      title: "Études techniques, notices, autorisations",
      content: "",
    },
    {
      title: "Rédaction de CCTP, CCAP, DPGF, etc.",
      content: "",
    },
  ];

  return (
    <section className="relative w-full py-16 flex flex-row justify-between items-center">
      {/* Left column - Title and description */}
      <div className="flex flex-col w-[365px] items-start gap-8 ml-[60px]">
        <h2 className="self-stretch font-display-h3 font-[number:var(--display-h3-font-weight)] text-[#1e1e1e] text-[length:var(--display-h3-font-size)] tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)] [font-style:var(--display-h3-font-style)]">
          EURÊKA INGENIERIE!
        </h2>

        <p className="self-stretch font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
          L&apos;expertise terrain de notre équipe pour piloter vos projets
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

      {/* Center column - Image */}
      <div className="w-[366px] h-[600px] bg-[url(/frame-704.png)] bg-cover bg-[50%_50%]" />

      {/* Right column - Services accordion */}
      <div className="flex flex-col w-[365px] items-start gap-6 mr-[60px]">
        <Accordion type="single" collapsible className="w-full">
          {services.map((service, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0 mb-6 last:mb-0"
            >
              <Card className="bg-[#fbf9eb]">
                <CardContent className="p-3">
                  <AccordionTrigger className="hover:no-underline p-0">
                    <h3 className="text-left font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#1e1e1e] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                      {service.title}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-text-small font-[number:var(--text-small-font-weight)] text-[#1e1e1e] text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] [font-style:var(--text-small-font-style)]">
                      {service.content}
                    </p>
                  </AccordionContent>
                </CardContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
