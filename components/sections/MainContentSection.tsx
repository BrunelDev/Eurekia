import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

export const MainContentSection = () => {
  // Navigation items data
  const navigationItems = [
    "Accueil",
    "A propos",
    "Nos solutions",
    "Tarifs",
    "Ressources",
    "Contact",
  ];

  // Footer links data
  const footerLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Cookies Settings",
  ];

  return (
    <section className="flex flex-col w-full items-start relative bg-[#483621]">
      {/* CTA Section with background image */}
      <div className="relative w-full bg-[linear-gradient(180deg,rgba(72,54,33,0)_0%,rgba(72,54,33,1)_100%)">
        <div className="flex w-full max-w-[1152px] items-center gap-8 relative py-16 px-16 mx-auto">
          <div className="flex flex-col items-start gap-5 relative flex-1">
            <h2 className="relative self-stretch [font-family:'Neulis_Alt-Regular',Helvetica] font-normal text-[#f6f6f6] text-4xl tracking-[0] leading-[normal]">
              Rejoignez la communauté EURÊKA
            </h2>

            <p className="relative self-stretch [font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#f6f6f6] text-base tracking-[0] leading-5">
              Retrouvez nos conseils, actualités et guides pour réussir tous vos
              projets.
            </p>
          </div>

          <Card className="flex flex-col w-[460px] items-start gap-4 relative bg-transparent border-none shadow-none">
            <CardContent className="p-0 w-full">
              <div className="flex items-start gap-3 relative self-stretch w-full">
                <div className="flex items-center gap-2 p-3 relative flex-1 border border-solid border-[#f6f6f6]">
                  <Input
                    className="border-none p-0 h-auto [font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#d1d1d1] text-sm tracking-[0] leading-5 bg-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <Button className="rounded-none px-4 py-3 bg-[#deb83b] hover:bg-[#c9a534] [font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#483621] text-sm tracking-[0] leading-5">
                  Sign Up
                </Button>
              </div>

              <p className="mt-4 [font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#f6f6f6] text-sm tracking-[0] leading-5">
                En cliquant sur s&#39;inscrire, vous confirmez que vous acceptez
                nos Conditions Générales.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col w-full items-start gap-12 pt-0 pb-[60px] px-[60px] relative bg-[#483621]">
        {/* Navigation Menu */}
        <nav className="inline-flex items-center gap-4 relative">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex flex-col h-9 items-center justify-center gap-0.5 relative"
            >
              <a
                href="#"
                className="text-white relative w-fit [font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap"
              >
                {item}
              </a>
              <div className="relative w-5 h-0.5 rounded-[1000px]" />
            </div>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-[60px] relative self-stretch w-full">
          {/* Logo */}
          <img
            className="relative w-full max-w-[1160px] h-[350px]"
            alt="Logo"
            src="/logo-1.svg"
          />

          {/* Footer Links and Copyright */}
          <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
            <Separator
              className="h-px bg-transparent"
              style={{ backgroundImage: "url(/divider.svg)" }}
            />

            <div className="flex items-start justify-between relative self-stretch w-full">
              <div className="inline-flex items-start gap-6 relative">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="relative w-fit [font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#f6f6f6] text-sm tracking-[0] leading-5 underline whitespace-nowrap"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="relative w-fit [font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#f6f6f6] text-sm tracking-[0] leading-5 whitespace-nowrap">
                © 2025 Eurêka. Tout droit réservé
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
