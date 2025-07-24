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
    <section className="w-full bg-white">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 py-16 lg:py-24">
          {/* Text Content */}
          <div className="lg:w-1/2 flex px-4 sm:px-0 flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-6 self-stretch">
              <h1 className="self-stretch font-['Neulis_Alt-Regular',Helvetica] font-normal text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.2]">
                <span className="text-[#1e1e1e]">Pilotez vos </span>
                <span className="text-[#cd9f25]">projets de construction</span>
                <span className="text-[#1e1e1e]"> avec EURÊKA INGÉNIERIE!</span>
              </h1>
              <p className="self-stretch text-base sm:text-lg text-[#1e1e1e]">
                Des solutions humaines et intelligentes pour piloter vos projets
                de construction, de la simple rénovation à l&apos;ouvrage
                complexe.
              </p>
            </div>
            <Button
              variant="ghost"
              className="h-12 px-0 py-0 gap-3 justify-start"
            >
              <span className="text-base font-medium text-[#1e1e1e]">
                Découvrir nos solutions
              </span>
              <div className="flex w-10 h-10 items-center justify-center rounded-full [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
                <ArrowRightIcon className="w-6 h-6 text-black" />
              </div>
            </Button>
          </div>

          {/* Image */}
          <div className="w-full lg:flex lg:w-1/2 justify-center">
            <img
              className="w-full h-auto object-cover rounded-none shadow-none sm:rounded-lg sm:shadow-lg"
              alt="Placeholder image"
              src="/placeholder-image.png"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 md:gap-12 py-12 border-t border-gray-200">
          {statsData.map((stat, index) => (
            <React.Fragment key={`stat-${index}`}>
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-xs">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#444444]">
                  {stat.number}
                </h2>
                <p className="text-sm sm:text-base text-[#1e1e1e]">
                  {stat.description}
                </p>
                <div className="flex items-center justify-center md:justify-start">
                  {stat.avatars.map((avatar, avatarIndex) => (
                    <img
                      key={`avatar-${index}-${avatarIndex}`}
                      className={`relative w-8 h-8 rounded-full border-2 border-white ${
                        avatarIndex > 0 ? "-ml-2" : ""
                      }`}
                      alt={avatar.alt}
                      src={avatar.src}
                    />
                  ))}
                </div>
              </div>
              {index < statsData.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-20 hidden md:block"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
