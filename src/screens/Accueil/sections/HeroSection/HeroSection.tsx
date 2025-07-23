import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const HeroSection = (): JSX.Element => {
  // Stats data for the two stat cards
  const statsData = [
    {
      number: "+1 200",
      description: "projets accompagnés en 2024",
      avatars: [
        { src: "/ellipse-1.png", alt: "Ellipse" },
        { src: "/ellipse-2.png", alt: "Ellipse" },
        { src: "/ellipse-3.png", alt: "Ellipse" },
      ],
    },
    {
      number: "+800",
      description: "utilisateurs ont déjà testé nos outils IA",
      avatars: [
        { src: "/ellipse-1-1.png", alt: "Ellipse" },
        { src: "/ellipse-2-1.png", alt: "Ellipse" },
        { src: "/ellipse-3-1.png", alt: "Ellipse" },
      ],
    },
  ];

  return (
    <section className="relative w-full h-[832px] bg-white">
      <img
        className="absolute w-[624px] h-[760px] top-[72px] right-0 object-cover"
        alt="Placeholder image"
        src="/placeholder-image.png"
      />

      <div className="flex flex-col w-[565px] items-start gap-20 absolute top-[186px] left-[59px]">
        <div className="flex flex-col items-start gap-[60px] relative self-stretch w-full">
          <div className="gap-8 self-stretch w-full flex flex-col items-start">
            <h1 className="self-stretch mt-[-1.00px] font-['Neulis_Alt-Regular',Helvetica] font-normal text-5xl leading-[48px]">
              <span className="text-[#1e1e1e]">Pilotez vos </span>
              <span className="text-[#cd9f25]">projets de construction</span>
              <span className="text-[#1e1e1e]"> avec EURÊKA INGÉNIERIE!</span>
            </h1>

            <p className="self-stretch font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
              Des solutions humaines et intelligentes pour piloter vos projets
              de construction, de la simple rénovation à l&apos;ouvrage
              complexe.
            </p>
          </div>

          <Button
            variant="ghost"
            className="h-10 pl-0 pr-2 py-0 gap-3 justify-start"
          >
            <span className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#1e1e1e] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
              Découvrir nos solutions
            </span>
            <div className="flex w-8 h-8 items-center justify-center rounded-[1000px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
              <ArrowRightIcon className="w-5 h-5 text-black" />
            </div>
          </Button>
        </div>

        <div className="flex items-center gap-8">
          {statsData.map((stat, index) => (
            <React.Fragment key={`stat-${index}`}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="h-auto self-stretch"
                />
              )}

              <div className="flex flex-col w-[167px] items-start gap-5">
                <h2 className="self-stretch mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[#444444] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                  {stat.number}
                </h2>

                <p className="self-stretch font-text-small font-[number:var(--text-small-font-weight)] text-[#1e1e1e] text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] [font-style:var(--text-small-font-style)]">
                  {stat.description}
                </p>

                <div className="flex items-center">
                  {stat.avatars.map((avatar, avatarIndex) => (
                    <img
                      key={`avatar-${index}-${avatarIndex}`}
                      className={`relative w-6 h-6 ${avatarIndex > 0 ? "-ml-1" : ""} z-[${2 - avatarIndex}] object-cover`}
                      alt={avatar.alt}
                      src={avatar.src}
                    />
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
