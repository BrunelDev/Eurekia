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
      <div className="mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 pt-16 lg:pt-24 ">
          {/* Text Content */}
          <div className="lg:w-1/2 flex px-4 flex-col items-start gap-10 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-6 self-stretch">
              <h1 className="self-stretch font-['Neulis_Alt-Regular',Helvetica] font-normal text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.2]">
                <span className="text-[#1e1e1e] font-display-h6">Pilotez vos </span>
                <span className="text-[#cd9f25] font-display-h6">projets de construction</span>
                <span className="text-[#1e1e1e] font-display-h6"> avec EURÊKA INGÉNIERIE!</span>
              </h1>
              <p className="self-stretch text-base sm:text-lg text-[#1e1e1e] font-display-h6">
                Des solutions humaines et intelligentes pour piloter vos projets
                de construction, de la simple rénovation à l&apos;ouvrage
                complexe.
              </p>
            </div>
            <Button
              variant="default"
              className="h-12 px-0 py-0 gap-3 w-[230px] bg-transparent hover:bg-transparent justify-start group hover:gap-1 hover:px-2 transition-all duration-300"
            >
              <a
                href="/nos-solutions"
                className="text-base font-medium text-[#1e1e1e] group-hover:text-[#cd9f25] font-display-h6"
              >
                Découvrir nos solutions
              </a>
              <div className="flex w-10 h-10 items-center justify-center rounded-full bg-radial-gold group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white">
                <ArrowRightIcon className="w-6 h-6 text-black group-hover:text-[#cd9f25]" />
              </div>
            </Button>
            {/* Stats Section */}
            <div className="flex flex-row pb-4 md:flex-row items-center justify-center md:justify-around gap-8 md:gap-12 pt-12 border-t border-gray-200">
              {statsData.map((stat, index) => (
                <React.Fragment key={`stat-${index}`}>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-xs">
                    <h2 className="text-3xl sm:text-4xl text-[#444444] font-display-h6">
                      {stat.number}
                    </h2>
                    <p className="text-sm sm:text-base text-[#1e1e1e] font-display-h6">
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

          {/* Image */}
          <div className="w-full lg:flex lg:w-1/2 justify-center">
            <img
              className="w-full h-auto object-cover rounded-none shadow-none"
              alt="Placeholder image"
              src="/placeholder-image.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
