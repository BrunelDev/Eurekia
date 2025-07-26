import React from "react";

export const HeroSection = (): JSX.Element => {
  // Define the decorative elements data for mapping
  const decorativeElements = [
    { position: "top-1/2 left-4 md:left-8 lg:left-16" },
    { position: "top-1/2 right-4 md:right-8 lg:right-16" },
    { position: "top-3/4 left-1/4" },
    { position: "top-3/4 right-1/4" },
  ];

  const checkerBackground = {
    backgroundImage: "url(/checker.png)",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
  };

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-40">
      <div className="flex flex-col max-w-[762px] mx-auto items-center gap-8 px-4">
        <h1 className="font-display-h3 font-[number:var(--display-h3-font-weight)] text-[#1e1e1e] text-[length:var(--display-h3-font-size)] text-center tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)] [font-style:var(--display-h3-font-style)]">
          Nos solutions pour construire mieux, plus vite, et en toute sérénité
        </h1>

        <p className="font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] text-center tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
          Découvrez comment particuliers, professionnels et agents immobiliers
          utilisent les solutions EURÊKA pour gagner du temps, améliorer leurs
          documents et réussir leurs projets.
        </p>
      </div>

      {/* Decorative elements are hidden on small screens to prevent layout issues */}
      {decorativeElements.map((element, index) => (
        <div
          key={`decorative-element-${index}`}
          className={`hidden md:block absolute w-24 h-24 md:w-32 md:h-32 lg:w-[167px] lg:h-[167px] ${element.position} -translate-x-1/2 -translate-y-1/2`}
          style={checkerBackground}
        />
      ))}
    </section>
  );
};
