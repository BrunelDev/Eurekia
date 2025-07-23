import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  // Decorative circles data
  const decorativeCircles = [
    { top: "top-[86px]", left: "left-[1069px]" },
    { top: "top-[261px]", left: "left-[159px]" },
    { top: "top-[187px]", left: "left-[1188px]" },
    { top: "top-[54px]", left: "left-[60px]" },
  ];

  return (
    <section className="relative w-full py-24 bg-[#fbf9eb] z-[1]">
      <div className="flex flex-col items-center justify-center gap-8 mx-auto max-w-screen-md">
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <h2 className="font-display-h4 text-[#1e1e1e] text-[length:var(--display-h4-font-size)] text-center tracking-[var(--display-h4-letter-spacing)] leading-[var(--display-h4-line-height)] [font-style:var(--display-h4-font-style)]">
            Prêt à passer à l&apos;action ?
          </h2>

          <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] text-center tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
            Testez nos outils dès aujourd&apos;hui et bénéficiez des mêmes
            résultats.
          </p>
        </div>

        <Button className="flex items-center justify-center gap-2 p-3 bg-[#f6f2cb] hover:bg-[#f6f2cb]/90 text-[#483621]">
          <span className="font-label-small text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)]">
            Explorer les tarifs
          </span>
          <ArrowRightIcon className="w-5 h-5" />
        </Button>
      </div>

      {/* Decorative circles */}
      {decorativeCircles.map((circle, index) => (
        <div
          key={`circle-${index}`}
          className={`absolute w-8 h-8 bg-white rounded-2xl ${circle.top} ${circle.left}`}
        />
      ))}
    </section>
  );
};
