import { ArrowRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

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
      title: "Assistant IA intelligent",
      content: "",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="container flex flex-col md:flex-row items-center gap-8 max-w-[1220px] mx-auto">
        <div className="relative w-full md:w-1/2 h-[621px] bg-[url(..//frame-679.png)] bg-cover bg-center rounded-md" />

        <div className="flex flex-col w-full md:w-1/2 items-start gap-[60px]">
          <div className="flex flex-col items-start gap-8 w-full">
            <h2 className="font-display-h3 text-[#1e1e1e] text-[length:var(--display-h3-font-size)] tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)]">
              EURÊK&apos;IA!
            </h2>

            <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)]">
              Des outils intelligents pour simplifier, accélérer et fiabiliser
              vos projets
            </p>
          </div>

          <div className="w-full">
            <Accordion type="single" collapsible className="w-full">
              {solutionItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <Card className="mb-3 bg-[#fbf9eb] border-none">
                    <AccordionTrigger className="px-3 py-3 font-heading-h5 text-[#1e1e1e] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)]">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-3 pb-3 font-text-small text-[#1e1e1e] text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)]">
                      {item.content}
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Button variant="ghost" className="p-0 h-auto hover:bg-transparent">
            <span className="font-label-medium text-[#1e1e1e] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)]">
              Essayer une démo IA
            </span>
            <div className="flex w-8 h-8 items-center justify-center ml-3 rounded-full overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
              <ArrowRightIcon className="w-5 h-5" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};
