import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Data for roadmap points with details for both mobile and desktop
  const roadmapPoints = [
    {
      number: "1",
      desktopClasses: "top-[405px] left-[644px]",
      title: "Phase 1: Fondation",
      description: "Établir les bases de l'écosystème EURÊKA avec les fonctionnalités d'ingénierie de base.",
    },
    {
      number: "2",
      desktopClasses: "top-[783px] left-[10px]",
      title: "Phase 2: Intégration intelligente",
      description: "Introduire des algorithmes intelligents pour l'analyse prédictive et l'optimisation des processus.",
    },
    {
      number: "3",
      desktopClasses: "top-[973px] left-[546px]",
      title: "Phase 3: Expansion",
      description: "Étendre la plateforme pour inclure de nouveaux modules et intégrations tierces.",
    },
    {
      number: "4",
      desktopClasses: "top-[1533px] left-[266px]",
      title: "Phase 4: Accessibilité",
      description: "Améliorer l'accessibilité sur toutes les plateformes et introduire des applications mobiles.",
    },
    {
      number: "5",
      desktopClasses: "top-[1527px] left-[650px]",
      title: "Phase 5: Écosystème Intelligent",
      description: "Atteindre une synergie complète entre tous les composants, créant un écosystème véritablement intelligent.",
    },
  ];

  return (
    <section className="relative w-full md:h-[2149px] py-16 md:py-0 px-4 sm:px-8 md:px-0 z-[2]">
      {/* Header Text */}
      <div className="md:absolute md:top-[271px] md:left-[60px] flex flex-col gap-8 mb-12 md:mb-0">
        <h2 className="w-full md:w-[564px] font-display-h3 font-[number:var(--display-h3-font-weight)] text-[#1e1e1e] text-[length:var(--display-h3-font-size)] tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)] [font-style:var(--display-h3-font-style)]">
          Ce que nous construisons pour vous
        </h2>
        <p className="w-full md:w-[564px] font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
          Notre roadmap reflète notre ambition : faire d&apos;EURÊKA l&apos;écosystème intelligent de référence dans le secteur du bâtiment, en mêlant ingénierie, système intelligent et accessibilité.
        </p>
      </div>

      {/* Desktop Layout: Absolute positioning */}
      <div className="hidden md:block">
        {roadmapPoints.map((point) => (
          <Card
            key={`desktop-point-${point.number}`}
            className={`flex items-center justify-center w-[60px] h-[60px] p-0 absolute ${point.desktopClasses} bg-[#483621] rounded-[1000px] border-none`}
          >
            <CardContent className="flex items-center justify-center p-0 h-full w-full">
              <span className="font-display-h6 font-[number:var(--display-h6-font-weight)] text-white text-[length:var(--display-h6-font-size)] text-center tracking-[var(--display-h6-letter-spacing)] leading-[var(--display-h6-line-height)] whitespace-nowrap [font-style:var(--display-h6-font-style)]">
                {point.number}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile Layout: Flexbox */}
      <div className="md:hidden flex flex-col gap-8">
        {roadmapPoints.map((point) => (
          <div key={`mobile-point-${point.number}`} className="flex items-start gap-4">
            <Card className="flex-shrink-0 flex items-center justify-center w-12 h-12 p-0 bg-[#483621] rounded-full border-none">
              <CardContent className="flex items-center justify-center p-0">
                <span className="font-display-h6 font-[number:var(--display-h6-font-weight)] text-white text-[length:var(--display-h6-font-size)] text-center tracking-[var(--display-h6-letter-spacing)] leading-[var(--display-h6-line-height)] [font-style:var(--display-h6-font-style)]">
                  {point.number}
                </span>
              </CardContent>
            </Card>
            <div className="flex flex-col gap-2">
              <h3 className="font-display-h6 font-bold text-[#1e1e1e]">{point.title}</h3>
              <p className="font-text-small text-[#1e1e1e] opacity-80">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
