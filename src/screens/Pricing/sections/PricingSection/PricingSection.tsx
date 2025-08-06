import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useNavigate } from "react-router-dom";
import ArrowButton from "../../../../components/ArrowButton";
import { ArrowRightIcon } from "lucide-react";

export const PricingSection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full py-24 bg-white">
      <div className="container px-0 mx-0 flex flex-col md:flex-row items-center gap-8">
        {/* Left side image */}
        <div className="w-full md:w-1/2">
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="h-[621px] w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.16)_100%)]" style={{
                backgroundImage: "url(/hero-img.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}/>
            </CardContent>
          </Card>
        </div>

        {/* Right side content */}
        <div className="w-full md:w-1/2 flex flex-col gap-[60px]">
          <div className="flex flex-col gap-8">
            <h2 className="font-display-h3 font-[number:var(--display-h3-font-weight)] text-[length:var(--display-h3-font-size)] tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)] [font-style:var(--display-h3-font-style)]">
              <span className="text-[#1e1e1e]">Offre </span>
              <span className="text-[#deb83b]">EURÊKA !</span>
            </h2>

            <p className="font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
              La formule EURÊKA ! s&apos;adresse aux architectes, promoteurs,
              économistes ou maîtres d&apos;ouvrage souhaitant un accompagnement
              expert, des outils personnalisés et une intégration poussée de
              l&apos;IA dans leur flux documentaire.
            </p>
          </div>

          <Button
            variant="ghost"
            className="w-fit h-10 p-0 gap-3 justify-start hover:bg-transparent"
          >
            <a href="/devis" className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#1e1e1e] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
              Demander un devis
            </a>
            <div className="flex w-8 h-8 items-center justify-center rounded-full overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
              <div className="w-5 h-5 bg-[url(/arrow-right.svg)] bg-[100%_100%]" />
            </div>
          </Button>
          <ArrowButton handleClick={() => navigate("/devis")} text="Demander un devis" lucideIcon={<ArrowRightIcon className="w-6 h-6 text-black group-hover:text-[#cd9f25]"/>}/>
        </div>
      </div>
    </section>
  );
};
