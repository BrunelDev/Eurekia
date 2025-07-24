import React from "react";

export const HeroSection = (): JSX.Element => {
  // Define the decorative elements data for mapping
  const decorativeElements = [
    { top: "top-[495px]", left: "left-[60px]" },
    { top: "top-[495px]", left: "left-[1053px]" },
    { top: "top-[627px]", left: "left-[358px]" },
    { top: "top-[627px]", left: "left-[755px]" },
  ];

  return (
    <section className="relative w-full h-[832px] z-[4]">
      <div className="flex flex-col max-w-[762px] mx-auto items-center gap-8 pt-40">
        <h1 className="font-display-h3 font-[number:var(--display-h3-font-weight)] text-[#1e1e1e] text-[length:var(--display-h3-font-size)] text-center tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)] [font-style:var(--display-h3-font-style)]">
          Nos solutions pour construire mieux, plus vite, et en toute sérénité
        </h1>

        <p className="font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] text-center tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
          Découvrez comment particuliers, professionnels et agents immobiliers
          utilisent les solutions EURÊKA pour gagner du temps, améliorer leurs
          documents et réussir leurs projets.
        </p>
      </div>

      {decorativeElements.map((element, index) => (
        <div
          key={`decorative-element-${index}`}
          className={`absolute w-[167px] h-[167px] ${element.top} ${element.left} [background:url(/checker.png)_50%_50%_/_cover]`}
        />
      ))}
    </section>
  );
};
