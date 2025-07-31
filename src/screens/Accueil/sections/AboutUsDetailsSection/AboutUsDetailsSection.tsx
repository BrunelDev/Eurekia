import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsDetailsSection = (): JSX.Element => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote:
        "\"Grâce à l'assistant IA, j'ai pu constituer mon dossier de rénovation sans faire appel à un cabinet. J'ai économisé du temps et de l'argent.\"",
      name: "Ronald Richards",
      title: "Conducteur de travaux",
      image: "/rectangle-2.png",
      active: true,
    },
    // Additional testimonials would be added here
  ];

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
            <div className="flex flex-col w-full max-w-[564px] gap-[100px] pt-[202px] px-7 md:px-28">
              {/* Section heading */}
              <div className="flex flex-col gap-5 w-full">
                <h2 className="font-display-h4 text-[#1e1e1e] text-[length:var(--display-h4-font-size)] tracking-[var(--display-h4-letter-spacing)] leading-[var(--display-h4-line-height)] [font-style:var(--display-h4-font-style)]">
                  Ils ont construit avec nous
                </h2>
              </div>

              {/* Testimonial card and navigation */}
              <div className="flex flex-col gap-10 w-full">
                {/* Testimonial card */}
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="p-0 flex flex-col h-[200px] gap-5">
                    <p className="font-text-large text-[#1e1e1e] text-[length:var(--text-large-font-size)] tracking-[var(--text-large-letter-spacing)] leading-[var(--text-large-line-height)] [font-style:var(--text-large-font-style)] [font-family:'Sofia_Pro'] font-light">
                      {testimonials[0].quote}
                    </p>

                    <div className="flex items-center gap-2 w-full">
                      <Avatar className="w-[60px] h-[60px] rounded-none">
                        <AvatarImage
                          src={testimonials[0].image}
                          alt="Profile"
                        />
                        <AvatarFallback>RR</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col items-start justify-center gap-0.5">
                        <span className="font-label-large text-[#cd9f25] text-[length:var(--label-large-font-size)] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] whitespace-nowrap [font-style:var(--label-large-font-style)]">
                          {testimonials[0].name}
                        </span>
                        <span className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] whitespace-nowrap [font-style:var(--text-medium-font-style)]">
                          {testimonials[0].title}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Navigation controls */}
                <div className="flex items-end justify-between w-full">
                  {/* Pagination dots */}
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4].map((dot, index) => (
                      <div
                        key={`dot-${index}`}
                        className={`w-3 h-3 rounded-md ${
                          index === 0 ? "bg-[#cd9f25]" : "bg-[#d1d1d1]"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex w-[120px] items-center justify-between">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-10 h-10 rounded-full border-[0.78px] border-[#1e1e1e]"
                    >
                      <div className="w-[18.8px] h-[18.8px] bg-[url(/arrow-left.svg)] bg-[100%_100%]" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-10 h-10 rounded-full border-[0.78px] border-[#1e1e1e]"
                    >
                      <div className="w-[18.8px] h-[18.8px] bg-[url(/arrow-right.svg)] bg-[100%_100%]" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
