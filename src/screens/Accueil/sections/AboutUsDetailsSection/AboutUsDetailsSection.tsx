import React from "react";
import { TestimonialCarousel } from "./TestimonialCarousel";


export const AboutUsDetailsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#fbf9eb] z-[2]">
      <div className="flex flex-row w-full">
        {/* Left side - Background image with overlay */}
        <div className="relative w-1/2 md:w-1/2 min-h-[790px] bg-[url(/Ils_ont_construit_avec_nous.png)] bg-cover bg-center hidden sm:block">
          <div className="absolute inset-0 bg-[rgba(72,54,33,0.4)]" />
        </div>

        {/* Right side - Testimonial content */}
        <div className="w-full md:w-1/2  relative">
          <div className="relative w-full h-full bg-[url(/fond_principal.png)] bg-cover bg-center">
            <div className="flex flex-col w-full  gap-[5px] pt-[10px] px-6 md:px-8">
              {/* Section heading */}
              <div className="w-full text-left translate-y-[50px] mb-12 md:mb-16 lg:text-center">
                  <h2 className="text-3xl md:text-4xl text-gray-800 tracking-wide leading-snug font-display-h3">
                      Ils ont construit avec nous
                  </h2>
              </div>
              {/* Testimonial carousel */}
              <div className="flex flex-col gap-10 w-full lg:w-3/4 lg:mx-auto">
                <TestimonialCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
