import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

export const HeroSection = () => {
  // Stats data for the two stat cards
  const stats = [
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

      <div className="flex flex-col w-[565px] items-start gap-20 absolute top-[194px] left-[59px]">
        <div className="flex flex-col items-start gap-[60px] relative self-stretch w-full">
          <div className="gap-8 self-stretch w-full flex flex-col items-start">
            <h1 className="self-stretch mt-[-1.00px] [font-family:'Neulis_Alt-Regular',Helvetica] font-normal text-5xl tracking-[0] leading-[48px]">
              <span className="text-[#1e1e1e]">Pilotez vos </span>
              <span className="text-[#cd9f25]">projets de construction</span>
              <span className="text-[#1e1e1e]"> avec EURÊKA INGÉNIERIE!</span>
            </h1>

            <p className="self-stretch [font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#1e1e1e] text-base tracking-[0] leading-5">
              Des solutions humaines et intelligentes pour piloter vos projets
              de construction, de la simple rénovation à l&apos;ouvrage
              complexe.
            </p>
          </div>

          <Button
            variant="ghost"
            className="h-10 items-center justify-center gap-3 pl-0 pr-2 py-0 hover:bg-transparent"
          >
            <span className="[font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-6">
              Découvrir nos solutions
            </span>
            <div className="flex w-8 h-8 items-center justify-center bg-[#f7e1aa] rounded-[1000px]">
              <ArrowRightIcon className="w-5 h-5 text-black" />
            </div>
          </Button>
        </div>

        <div className="flex items-center gap-8">
          {stats.map((stat, index) => (
            <React.Fragment key={`stat-${index}`}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="h-auto self-stretch"
                />
              )}

              <Card className="w-[167px] gap-5 flex flex-col items-start border-none shadow-none bg-transparent">
                <h2 className="self-stretch mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[#444444] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                  {stat.number}
                </h2>

                <p className="self-stretch [font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#1e1e1e] text-sm tracking-[0] leading-5">
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
              </Card>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
