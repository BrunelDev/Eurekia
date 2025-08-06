import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { useState } from "react";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { label: "Accueil", link: "/" },
    { label: "À propos", link: "/a-propos" },
    { label: "Nos solutions", link: "/nos-solutions" },
    { label: "Tarifs", link: "/pricing" },
    { label: "Ressources", link: "https://blog.eurekaingenierie.com/" },
    { label: "Contact", link: "/contact" },
  ];

  // Footer policy links data
  const policyLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Cookies Settings",
  ];

  const [email, setEmail] = useState("");

  return (
    <footer
      className="relative w-full bg-white"
      style={{
        backgroundImage: "url(/Rectangle.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute w-full h-[225px] top-0 left-0">
        <img
          className="w-full h-[225px] object-cover"
          alt="Rectangle"
          src="/Rectangle-3842.png"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-[#483621df] to-[#483621]" />
      </div>
      <div className="relative w-full flex flex-col  md:gap-12 gap-6 ">
        <div className="relative">
          {/* Background image with gradient overlay */}
          <div className="relative">
            <img
              className="w-full h-[225px]"
              alt="Rectangle"
              src="/Rectangle-3842.png"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-[#483621df] to-[#483621]" />
            {/* Newsletter subscription section */}
            <div className="md:absolute top-0 left-0 w-full">
              <div className="flex flex-wrap items-center gap-8 relative md:px-16 py-16 px-4">
                <div className="flex flex-col items-start gap-5 relative flex-1 grow md:min-w-[350px]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Neulis_Alt-Regular',Helvetica] font-normal text-[#f6f6f6] text-4xl tracking-[0] leading-[normal]">
                    Rejoignez la communauté EURÊKA
                  </div>

                  <div className="relative self-stretch [font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#f6f6f6] text-base tracking-[0] leading-5">
                    Retrouvez nos conseils, actualités et guides pour réussir
                    tous vos projets.
                  </div>
                </div>

                <div className="flex flex-col w-[460px] items-start gap-4 relative">
                  <div className="flex items-start gap-3 relative self-stretch w-full">
                    <Input
                      className="flex-1 p-3 border border-solid border-[#f6f6f6] bg-transparent [font-family:'Sofia_Pro-Regular',Helvetica] text-[#d1d1d1] text-sm"
                      placeholder="Entrez votre email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                    />

                    <Button className="p-3 [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)] text-[#1e1e1e] font-label-small"
                    onClick={() => (window.location.href = "/newsletter/?email=" + encodeURIComponent(email))}>
                      S'inscrire
                    </Button>
                  </div>

                  <div className="relative self-stretch [font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#f6f6f6] text-sm tracking-[0] leading-5">
                    <span className="[font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#f6f6f6] text-sm tracking-[0] leading-5">
                      En cliquant sur s&#39;inscrire, vous confirmez que vous
                      acceptez nos{" "}
                    </span>
                    <span className="underline">Conditions Générales.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="flex flex-col w-full items-start gap-12 pt-0 pb-[60px] md:px-[60px] px-4 relative">
          {/* Navigation links */}
          <div className="inline-flex flex-wrap items-center gap-4 relative flex-[0_0_auto]">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-center justify-center gap-0.5 relative flex-[0_0_auto]"
              >
                <div className="mt-[-1.00px] text-white relative w-fit font-label-medium font-[number:var(--label-medium-font-weight)] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)] hover:text-[#ffffff88] transition-all duration-300 ease-out">
                  <a href={link.link}>{link.label}</a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-[60px] relative self-stretch w-full flex-[0_0_auto]">
            {/* Logo */}
            <img
              className="relative w-full h-auto"
              alt="Logo"
              src="/logo1.svg"
            />

            {/* Footer bottom section */}
            <div className="flex flex-col items-start md:gap-8 gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <Separator className="h-px bg-[#f6f6f6]/20" />

              <div className="flex flex-wrap items-start justify-between relative self-stretch w-full">
                {/* Policy links */}
                <div className="inline-flex flex-wrap items-start md:gap-6 gap-2 relative">
                  {policyLinks.map((link, index) => (
                    <div
                      key={index}
                      className="relative w-fit mt-[-1.00px] [font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#f6f6f6] text-sm tracking-[0] leading-[14px]"
                    >
                      <span className="leading-[var(--label-small-line-height)] underline font-label-small [font-style:var(--label-small-font-style)] font-[number:var(--label-small-font-weight)] tracking-[var(--label-small-letter-spacing)] text-[length:var(--label-small-font-size)] cursor-pointer">
                        {link}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Copyright */}
                <div className="relative w-fit mt-[-1.00px] font-label-small font-[number:var(--label-small-font-weight)] text-[#f6f6f6] text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] whitespace-nowrap [font-style:var(--label-small-font-style)]">
                  {/*© 2025 Eurêka. Tout droit réservé*/}
                  Eurêka Ingénierie!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
