import { ChevronDownIcon } from "lucide-react";
import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[832px] z-[3]">
      <div
        className="absolute w-[564px] h-[760px] top-[72px] right-[60px] bg-cover bg-center"
        style={{ backgroundImage: "url(..//frame-651.png)" }}
      />

      <div className="inline-flex items-center gap-2 absolute top-[92px] left-[60px]">
        <h2 className="font-display-h5 text-[length:var(--display-h5-font-size)] font-[number:var(--display-h5-font-weight)] tracking-[var(--display-h5-letter-spacing)] leading-[var(--display-h5-line-height)] [font-style:var(--display-h5-font-style)] text-[#1e1e1e]">
          Etudes de cas
        </h2>
        <ChevronDownIcon className="w-6 h-6 text-[#1e1e1e]" />
      </div>

      <div className="flex flex-col w-[564px] items-start gap-8 absolute top-[322px] left-[60px]">
        <h1 className="self-stretch font-display-h3 text-[length:var(--display-h3-font-size)] font-[number:var(--display-h3-font-weight)] tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)] [font-style:var(--display-h3-font-style)] text-[#1e1e1e]">
          Des projets concrets, des résultats mesurables
        </h1>

        <p className="self-stretch font-text-medium text-[length:var(--text-medium-font-size)] font-[number:var(--text-medium-font-weight)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)] text-[#1e1e1e]">
          Découvrez comment particuliers, professionnels et agents immobiliers
          utilisent les solutions EURÊKA pour gagner du temps, améliorer leurs
          documents et réussir leurs projets.
        </p>
      </div>
    </section>
  );
};
