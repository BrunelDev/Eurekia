import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../../../../components/ui/carousel";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { testimonials } from "../../../../lib/testimonials";

export const TestimonialCarousel = (): JSX.Element => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={setApi}
      className="w-full"
    >
      <div className="flex flex-col w-full gap-8">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="p-0 flex flex-col gap-6">
                    <div className="h-[500px] lg:h-[350px] overflow-hidden">
                      <div className="relative">
                        <p className="font-text-large text-[#1e1e1e] text-[length:var(--text-large-font-size)] tracking-[var(--text-large-letter-spacing)] leading-[var(--text-large-line-height)] [font-style:var(--text-large-font-style)] font-normal  font-display-h3">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full">
                      <Avatar className="w-[60px] h-[60px] rounded-none flex-shrink-0">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="text-[#cd9f25] font-bold text-sm">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col items-start justify-center gap-1 h-[48px]">
                        <span className="font-label-large text-[#cd9f25] text-[length:var(--label-large-font-size)] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] [font-style:var(--label-large-font-style)]">
                          {testimonial.name}
                        </span>
                        <span className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                          {testimonial.title}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>

      <div className="flex items-center justify-between w-full pt-4">
        {/* Pagination dots - Gauche */}
        <div className="flex items-center gap-2 h-[50px]">
          {testimonials.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                index === current - 1 ? "bg-[#cd9f25]" : "bg-[#d1d1d1]"
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <CarouselPrevious className="w-10 h-10 rounded-full border-[1px] border-[#1e1e1e] hover:bg-[#fbf9eb] transition-colors duration-200 flex items-center justify-center flex-shrink-0 static translate-y-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L6 10L12 16"
                stroke="#1e1e1e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CarouselPrevious>

          <CarouselNext className="w-10 h-10 rounded-full border-[1px] border-[#1e1e1e] hover:bg-[#fbf9eb] transition-colors duration-200 flex items-center justify-center flex-shrink-0 static translate-y-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4L14 10L8 16"
                stroke="#1e1e1e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CarouselNext>
        </div>
      </div>
    </Carousel>
  );
};
