import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const HeroSection = (): JSX.Element => {
  const [billingPeriod, setBillingPeriod] = useState<string>("monthly");

  // Pricing plan data
  const pricingPlans = [
    {
      name: "GRATUIT",
      price: "0",
      description: "Idéal pour découvrir nos outils.",
      buttonText: "Créer un compte",
      buttonVariant: "secondary",
      features: [
        "Accès au blog Archim'aide",
        "Simulateur de coût simplifié",
        "Simulateur photo intelligent",
        "Génération de documents techniques",
        "Assistant intelligent (questions techniques)",
        "Accès à la base technique publique",
        "Base de données client privée",
      ],
    },
    {
      name: "LITE",
      price: "9",
      description: "Particuliers ou auto-constructeurs.",
      buttonText: "Choisir LITE",
      buttonVariant: "secondary",
      features: [
        "Accès au blog Archim'aide",
        "Simulateur de coût simplifié",
        "Simulateur photo intelligent",
        "Génération de documents techniques",
        "Assistant intelligent (questions techniques)",
        "Accès à la base technique publique",
        "Base de données client privée",
      ],
    },
    {
      name: "PRO",
      price: "29",
      description: "Professionnels du bâtiment.",
      buttonText: "Choisir PRO",
      buttonVariant: "primary",
      features: [
        "Accès au blog Archim'aide",
        "Simulateur de coût simplifié",
        "Simulateur photo intelligent",
        "Génération de documents techniques",
        "Assistant intelligent (questions techniques)",
        "Accès à la base technique publique",
        "Base de données client privée",
      ],
    },
    {
      name: "PREMIUM",
      price: "59",
      description: "Description",
      buttonText: "Choisir PREMIUM",
      buttonVariant: "secondary",
      features: [
        "Accès au blog Archim'aide",
        "Simulateur de coût simplifié",
        "Simulateur photo intelligent",
        "Génération de documents techniques",
        "Assistant intelligent (questions techniques)",
        "Accès à la base technique publique",
        "Base de données client privée",
      ],
    },
  ];

  return (
    <section className="w-full py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 mb-12">
          <h2 className="font-display-h3 font-[number:var(--display-h3-font-weight)] text-[#1e1e1e] text-[length:var(--display-h3-font-size)] text-center tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)] [font-style:var(--display-h3-font-style)]">
            Une solution pour chaque projet
          </h2>
          <p className="max-w-[762px] font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] text-center tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
            Découvrez l&apos;abonnement qui correspond à vos besoins, que vous
            soyez un particulier, un professionnel ou un expert du bâtiment.
            Changez de formule à tout moment.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <ToggleGroup
            type="single"
            color="#483621"
            value={billingPeriod}
            onValueChange={(value) => value && setBillingPeriod(value)}
            className="p-0.5 bg-[#FBF9EB]"
          >
            <ToggleGroupItem
              value="monthly"
              className={`w-20 p-2 ${
                billingPeriod === "monthly" ? "bg-[#483621] text-white" : ""
              }`}
            >
              <span className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
                Mensuel
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className={`w-20 p-2 ${
                billingPeriod === "yearly"
                  ? "bg-[#483621] text-white"
                  : "text-[#1e1e1e]"
              }`}
            >
              <span className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
                Annuel
              </span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="border-0 shadow-none">
              <CardContent className="pt-5 px-0">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-label-large font-[number:var(--label-large-font-weight)] text-[#1e1e1e] text-[length:var(--label-large-font-size)] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] [font-style:var(--label-large-font-style)]">
                      {plan.name}
                    </h3>
                    <div className="flex items-end gap-2.5">
                      <span className="font-display-h4 font-[number:var(--display-h4-font-weight)] text-[#1e1e1e] text-[length:var(--display-h4-font-size)] tracking-[var(--display-h4-letter-spacing)] leading-[var(--display-h4-line-height)] whitespace-nowrap [font-style:var(--display-h4-font-style)]">
                        €
                      </span>
                      <span className="font-display-h4 font-[number:var(--display-h4-font-weight)] text-[#1e1e1e] text-[length:var(--display-h4-font-size)] tracking-[var(--display-h4-letter-spacing)] leading-[var(--display-h4-line-height)] whitespace-nowrap [font-style:var(--display-h4-font-style)]">
                        {plan.price}
                      </span>
                      <span className="font-text-bold-large font-[number:var(--text-bold-large-font-weight)] text-[#1e1e1e] text-[length:var(--text-bold-large-font-size)] tracking-[var(--text-bold-large-letter-spacing)] leading-[var(--text-bold-large-line-height)] whitespace-nowrap [font-style:var(--text-bold-large-font-style)]">
                        /mois
                      </span>
                    </div>
                  </div>
                  <p className="font-text-small font-[number:var(--text-small-font-weight)] text-[#1e1e1e] text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] [font-style:var(--text-small-font-style)]">
                    {plan.description}
                  </p>
                </div>

                <Button
                  className={`w-full mt-6 ${
                    plan.buttonVariant === "primary"
                      ? "bg-[#483621] text-white hover:bg-[#5a442d]"
                      : "bg-[#f6f2cb] text-[#483621] hover:bg-[#f0ebc0] "
                  } rounded-none shadow-none`}
                >
                  <span className="font-label-small font-[number:var(--label-small-font-weight)] text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] whitespace-nowrap [font-style:var(--label-small-font-style)]">
                    {plan.buttonText}
                  </span>
                </Button>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className="w-fit h-fit p-1 rounded-full bg-[#8D5A1B]">
                        <Check size={14} color="white" />
                      </div>
                      <span className="font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
