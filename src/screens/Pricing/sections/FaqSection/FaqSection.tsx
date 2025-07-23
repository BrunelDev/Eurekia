import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FaqSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "A quoi sert le simulateur de côut ?",
      answer:
        "Notre assistant IA vous aide à comprendre la réglementation, les normes techniques, et à structurer vos documents de projet.",
    },
    {
      question: "A quoi sert le simulateur de côut ?",
      answer:
        "Notre assistant IA vous aide à comprendre la réglementation, les normes techniques, et à structurer vos documents de projet.",
    },
    {
      question: "A quoi sert le simulateur de côut ?",
      answer:
        "Notre assistant IA vous aide à comprendre la réglementation, les normes techniques, et à structurer vos documents de projet.",
    },
    {
      question: "A quoi sert le simulateur de côut ?",
      answer:
        "Notre assistant IA vous aide à comprendre la réglementation, les normes techniques, et à structurer vos documents de projet.",
    },
  ];

  return (
    <section className="relative w-full bg-[#f6f6f6] py-16 overflow-hidden">
      <div className="relative w-full max-w-[1160px] mx-auto">
        <img
          className="absolute w-[706px] h-auto top-[-136px] right-[-60px]"
          alt="Vector"
          src="/vector-1.svg"
        />

        <div className="flex flex-col items-center gap-10 relative z-10">
          <h2 className="font-display-h3 font-[number:var(--display-h3-font-weight)] text-[#313131] text-[length:var(--display-h3-font-size)] text-center tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)] [font-style:var(--display-h3-font-style)]">
            FAQ&apos;s
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="mb-10 bg-white"
              >
                <AccordionTrigger className="px-5 py-6 flex items-center gap-5">
                  <div className="flex h-12 items-center justify-center gap-2.5 w-full">
                    <span className="opacity-[0.88] font-display-h6 font-[number:var(--display-h6-font-weight)] text-[#1e1e1e] text-[length:var(--display-h6-font-size)] tracking-[var(--display-h6-letter-spacing)] leading-[var(--display-h6-line-height)] [font-style:var(--display-h6-font-style)] text-left">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-6">
                  <div className="opacity-[0.88] font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
