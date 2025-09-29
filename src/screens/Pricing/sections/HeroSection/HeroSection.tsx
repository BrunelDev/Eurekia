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
      description: "(Les Curieux)",
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
      HTPrice: "(0€ HT)",
    },
    {
      name: "LITE",
      price: "9",
      description: "(Les Débrouillards)",
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
      HTPrice: "(7,99€ HT)",
    },
    {
      name: "PRO",
      price: "29",
      description: "(Les Connectés)",
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
      HTPrice: "(27,49€ HT)",
    },
    {
      name: "PREMIUM",
      price: "59",
      description: "(Les Innovateurs)",
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
      HTPrice: "(47,34€ HT)",
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
                <div className="flex flex-col gap-5 px-2">
                  <div
                    className={`flex flex-col gap-4 ${
                      plan.name === "PRO" ? "bg-[#F6F2CB]" : "bg-[#F6F6F6]"
                    } py-3 px-2 rounded-[20px]`}
                  >
                    <h3 className="font-label-large font-[number:var(--label-large-font-weight)] text-[#1e1e1e] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] [font-style:var(--label-large-font-style)] bg-white px-2 py-1 rounded-full w-fit text-[18px]">
                      {plan.name}
                    </h3>
                    <div className="flex items-end gap-2.5">
                      <span className="font-display-h4 font-[number:var(--display-h4-font-weight)] text-[#1e1e1e] text-[length:var(--display-h4-font-size)] tracking-[var(--display-h4-letter-spacing)] leading-[var(--display-h4-line-height)] whitespace-nowrap [font-style:var(--display-h4-font-style)]">
                        €
                      </span>
                      <span className="font-display-h4 font-[number:var(--display-h4-font-weight)] text-[#1e1e1e] text-[length:var(--display-h4-font-size)] tracking-[var(--display-h4-letter-spacing)] leading-[var(--display-h4-line-height)] whitespace-nowrap [font-style:var(--display-h4-font-style)]">
                        {plan.price}
                      </span>
                      <span className="font-text-bold-large text-[#1e1e1e] text-[length:var(--text-bold-large-font-size)] tracking-[var(--text-bold-large-letter-spacing)] leading-[var(--text-bold-large-line-height)] whitespace-nowrap [font-style:var(--text-bold-large-font-style)] font-normal">
                        {plan.HTPrice}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "bg-[#F6F6F6] flex flex-col gap-5 rounded-[28px]  relative "
                  }
                >
                  <div className="bg-white h-[130px] flex flex-col justify-center rounded-[28px] w-full px-3">
                    <p className="text-[#CD9F25]  tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] [font-style:var(--text-small-font-style)] font-display-h3 text-[18px] font-normal">
                      {plan.description}
                    </p>

                    <Button
                      className={`w-full mt-6 ${
                        plan.buttonVariant === "primary"
                          ? "bg-[#483621] text-white hover:bg-[#5a442d]"
                          : "bg-[#f6f2cb] text-[#483621] hover:bg-[#f0ebc0] "
                      } rounded-full shadow-none h-[44px]`}
                    >
                      <span className="font-label-small font-[number:var(--label-small-font-weight)] text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] whitespace-nowrap [font-style:var(--label-small-font-style)]">
                        {plan.buttonText}
                      </span>
                    </Button>
                  </div>

                  <div className="mt-4 space-y-3 px-4 pb-4">
                    {/* {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2"
                      >
                        <div className="w-fit h-fit p-1 rounded-full bg-[#8D5A1B]">
                          <Check size={14} color="white" />
                        </div>
                        <span className="font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                          {feature}
                        </span>
                      </div>
                    ))}*/}
                    <div className="flex items-center justify-center">
                      <div className="relative px-4 py-2 bg-gradient-to-r from-lime-50 to-amber-50 rounded-lg border border-green-200 shadow-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h6 className="font-display-h3 text-sm font-normal text-green-800">
                              En cours de développement
                            </h6>
                          </div>
                        </div>
                        <div className="absolute inset-0 rounded-lg bg-green-200 opacity-10 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
