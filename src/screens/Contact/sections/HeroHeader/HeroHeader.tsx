import { ArrowDownIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroHeader = (): JSX.Element => {
  const handleScrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      const targetPosition =
        contactForm.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Scroll duration in milliseconds (1 second)
      let startTime: number | null = null;

      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };
  const contactItems = [
    {
      icon: <MapPinIcon className="w-7 h-7 text-black" />,
      description: "Nos bureaux sont situés en plein cœur de Paris.",
      link: "159 Chemin du Val de Cagne 06800 Cagnes-sur-Mer FRANCE",
      href: "https://www.google.com/maps/search/?api=1&query=159+Chemin+du+Val+de+Cagne+06800+Cagnes-sur-Mer+FRANCE",
    },
    {
      icon: <PhoneIcon className="w-7 h-7 text-black" />,
      description: "Appelez-nous du lundi au vendredi, de 9h à 18h",
      link: "06.15.66.39.70",
      href: "tel:0615663970",
    },
    {
      icon: <MailIcon className="w-7 h-7 text-black" />,
      description: "Nous répondons sous 24h ouvrées",
      link: "contact@eurekaingenierie.com",
      href: "mailto:contact@eurekaingenierie.com",
    },
  ];

  return (
    <section className="w-full bg-[#fbf9eb] relative">
      <div className="h-[calc(100vh*0.3)] w-[calc(100vh*0.3)] bg-[#F6F2CB] rounded-full absolute left-0 bottom-0 " />

      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[832px] pl-8 sm:pl-12 lg:pl-20">
          {/* Left side with heading and CTA */}
          <div className="flex flex-col justify-center items-start gap-12 py-16 lg:py-24">
            <div className="flex flex-col items-start gap-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1e1e1e]">
                Une <span className="text-[#cd9f25]">question</span> ? Un{" "}
                <span className="text-[#cd9f25]">projet</span> ? Parlons-en.
              </h1>
              <p className="text-lg text-[#1e1e1e]">
                Notre équipe vous répond sous 24h ouvrées. Choisissez le canal
                de contact qui vous convient.
              </p>
            </div>
            <Button
              variant="default"
              className="h-auto w-[185px] p-0 inline-flex items-center gap-3 group bg-transparent hover:bg-transparent hover:px-2 hover:gap-1 transition-all duration-300"
              onClick={handleScrollToContact}
            >
              <span className="text-base font-medium text-[#1e1e1e] group-hover:text-[#cd9f25]">
                Envoyer un message
              </span>
              <div className="flex w-10 h-10 items-center justify-center rounded-full bg-radial-gold-circle group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:to-transparent transition-all duration-300">
                <ArrowDownIcon className="w-5 h-5 text-black group-hover:text-[#cd9f25]" />
              </div>
            </Button>
          </div>

          {/* Right side with image and contact info */}
          <div
            className="relative w-full min-h-[400px] lg:min-h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/home4.jpg')" }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <Card className="w-full max-w-md bg-[rgba(72,54,33,0.8)] border-none rounded-lg shadow-lg">
                <CardContent className="p-6 sm:p-8 space-y-6">
                  {contactItems.map((item, index) => (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      className="flex items-start gap-4 no-underline"
                    >
                      <div className="flex-shrink-0 flex w-14 h-14 items-center justify-center rounded-full bg-radial-gold-circle">
                        {item.icon}
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-white font-semibold">
                          {item.description}
                        </p>
                        <p className="text-base font-semibold text-[#f7e1aa] underline">
                          {item.link}
                        </p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
