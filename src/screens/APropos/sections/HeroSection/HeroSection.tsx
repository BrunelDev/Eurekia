import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Data for roadmap points
  const roadmapPoints = [
    { top: "top-[405px]", left: "left-[944px]", number: "1" },
    { top: "top-[783px]", left: "left-10", number: "1" },
    { top: "top-[973px]", left: "left-[546px]", number: "1" },
    { top: "top-[1527px]", left: "left-[944px]", number: "1" },
    { top: "top-[1533px]", left: "left-[266px]", number: "1" },
  ];

  return (
    <section className="relative w-full h-[2149px] z-[2]">
      <div className="flex flex-col gap-8 absolute top-[271px] left-[60px]">
        <h2 className="w-[564px] mt-[-1.00px] font-display-h3 font-[number:var(--display-h3-font-weight)] text-[#1e1e1e] text-[length:var(--display-h3-font-size)] tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)] [font-style:var(--display-h3-font-style)]">
          Ce que nous construisons pour vous
        </h2>

        <p className="w-[564px] font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
          Notre roadmap reflète notre ambition : faire d&apos;EURÊKA
          l&apos;écosystème intelligent de référence dans le secteur du
          bâtiment, en mêlant ingénierie, IA et accessibilité.
        </p>
      </div>

      {roadmapPoints.map((point, index) => (
        <Card
          key={`roadmap-point-${index}`}
          className={`flex items-center justify-center w-[60px] h-[60px] p-0 absolute ${point.top} ${point.left} bg-[#483621] rounded-[1000px] border-none`}
        >
          <CardContent className="flex items-center justify-center p-0 h-full w-full">
            <span className="font-display-h6 font-[number:var(--display-h6-font-weight)] text-white text-[length:var(--display-h6-font-size)] text-center tracking-[var(--display-h6-letter-spacing)] leading-[var(--display-h6-line-height)] whitespace-nowrap [font-style:var(--display-h6-font-style)]">
              {point.number}
            </span>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
