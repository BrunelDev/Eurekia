import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUsDetailsSection = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote:
        "Grâce à l'assistant IA, j'ai pu constituer mon dossier de rénovation sans faire appel à un cabinet. J'ai économisé du temps et de l'argent.",
      name: "Ronald Richards",
      role: "Conducteur de travaux",
      avatar: "",
      active: true,
    },
    // Additional testimonials would be added here
  ];

  return (
    <section className="flex w-full bg-[#fbf9eb]">
      {/* Left side - Dark image background */}
      <div className="w-full lg:w-1/2 h-[832px] bg-[linear-gradient(0deg,rgba(72,54,33,0.4)_0%,rgba(72,54,33,0.4)_100%)" />

      {/* Right side - Testimonial content */}
      <div className="w-full lg:w-1/2 h-[832px] relative">
        <div className="w-full h-full bg-cover bg-center">
          <div className="flex flex-col w-full max-w-[564px] gap-[100px] pt-[202px] px-8 lg:px-28">
            {/* Heading */}
            <div className="flex flex-col gap-5 w-full">
              <h2 className="font-['Neulis_Alt-Regular',Helvetica] text-4xl text-[#1e1e1e]">
                Ils ont construit avec nous
              </h2>
            </div>

            {/* Testimonial card */}
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="flex flex-col gap-10 p-0">
                {/* Testimonial content */}
                <div className="flex flex-col h-[200px] gap-5">
                  <p className="font-['Sofia_Pro-Light',Helvetica] font-light text-lg text-[#1e1e1e] leading-5">
                    &quot;Grâce à l&apos;assistant IA, j&apos;ai pu constituer
                    mon dossier de rénovation sans faire appel à un cabinet.
                    J&apos;ai économisé du temps et de l&apos;argent.&quot;
                  </p>

                  {/* Avatar and name */}
                  <div className="flex items-center gap-2 w-full">
                    <Avatar className="w-[60px] h-[60px]">
                      <AvatarImage
                        src="/avatar-image-1.png"
                        alt="Ronald Richards"
                      />
                    </Avatar>

                    <div className="flex flex-col gap-0.5">
                      <span className="font-['Sofia_Pro-Regular',Helvetica] font-normal text-lg text-[#cd9f25] leading-7">
                        Ronald Richards
                      </span>
                      <span className="font-['Sofia_Pro-Light',Helvetica] font-light text-base text-[#1e1e1e] leading-5">
                        Conducteur de travaux
                      </span>
                    </div>
                  </div>
                </div>

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

                  {/* Navigation buttons */}
                  <div className="flex items-center gap-4 w-[120px]">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-10 h-10 rounded-full border-[0.78px] border-[#1e1e1e]"
                    >
                      <ChevronLeftIcon className="w-[18.8px] h-[18.8px]" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-10 h-10 rounded-full border-[0.78px] border-[#1e1e1e]"
                    >
                      <ChevronRightIcon className="w-[18.8px] h-[18.8px]" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
