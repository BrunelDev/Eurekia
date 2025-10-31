import React from "react";
import { TestimonialCarousel } from "./TestimonialCarousel";


export const AboutUsDetailsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#fbf9eb] z-[2]">
      <div className="flex flex-row w-full">
        {/* Left side - Background image with overlay */}
        <div className="relative w-1/2 md:w-1/2 h-[832px] bg-[url(/frame15.png)] bg-cover bg-center">
          <div className="absolute inset-0 bg-[rgba(72,54,33,0.4)]" />
        </div>

        {/* Right side - Testimonial content */}
        <div className="w-full md:w-1/2 h-[832px] relative">
          <div className="relative w-full h-full bg-[url(/fond_principal.png)] bg-cover bg-center">
            <div className="flex flex-col w-full max-w-[564px] gap-[5px] pt-[10px] px-7 md:px-28">
              {/* Section heading */}
              <div className="w-full text-left mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide leading-snug">
                      Ils ont construit <br className="hidden md:block" /> avec nous
                  </h2>
              </div>
              {/* Testimonial carousel */}
              <div className="flex flex-col gap-10 w-full">
                <TestimonialCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
