import { ArrowRightIcon } from "lucide-react";
import { Avatar } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";
import React from "react";

// Define filter categories
const filterCategories = [
  { id: "all", label: "Tous", active: true },
  { id: "glossary", label: "Glossaire", active: false },
  { id: "technical", label: "Domaine technique", active: false },
  { id: "administrative", label: "Administratif", active: false },
  { id: "legal", label: "Juridique", active: false },
];

// Define case studies data
const caseStudies = [
  {
    id: 1,
    title: "Rénovation d'un appartement à Lyon",
    category: "Particulier",
    context:
      "Julie, propriétaire d'un appartement de 78 m² à Lyon, souhaite effectuer une rénovation complète (salle de bain, cuisine, revêtements, menuiseries) pour améliorer le confort thermique et valoriser son bien. Avant d'obtenir un prêt bancaire, elle a besoin de documents justificatifs solides et estimations précises.",
    objectives: [
      "Chiffrer le coût global du projet",
      "Produire une notice descriptive claire",
      "Appuyer sa demande de financement auprès de sa banque",
    ],
    image: "/placeholder-image.png",
    imagePosition: "left",
  },
  {
    id: 2,
    title: "Rénovation d'une maison à Bordeaux",
    category: "Investisseur",
    context:
      "Marc, investisseur immobilier, envisage d'acquérir une maison ancienne à Bordeaux nécessitant des travaux de modernisation (isolation, électricité, plomberie) pour la revendre avec un bénéfice. Il doit élaborer un plan détaillé des travaux et des estimations de coûts pour convaincre ses partenaires financiers.",
    objectives: [
      "Évaluer le retour sur investissement potentiel",
      "Établir un calendrier des travaux",
      "Obtenir des devis de plusieurs entreprises",
    ],
    image: "/placeholder-image-1.png",
    imagePosition: "right",
  },
  {
    id: 3,
    title: "Rénovation d'un local commercial à Marseille",
    category: "Entrepreneur",
    context:
      "Sophie, gérante d'une boulangerie, doit rénover son local à Marseille pour attirer plus de clients. Les travaux incluront la mise à jour de l'agencement et des équipements. Elle doit préparer un dossier pour obtenir des subventions locales pour améliorer son établissement.",
    objectives: [
      "Améliorer l'esthétique du magasin",
      "Optimiser l'espace de vente",
      "Lancer une campagne de communication autour de la réouverture",
    ],
    image: "/placeholder-image-2.png",
    imagePosition: "left",
  },
  {
    id: 4,
    title: "Rénovation d'une résidence secondaire à Annecy",
    category: "Particulier",
    context:
      "Thomas et Clara, couple ayant acheté une maison au bord du lac d'Annecy, souhaitent la rénover pour en faire leur résidence secondaire. Les travaux prévus incluent la création d'un espace de vie ouvert et l'amélioration de l'efficacité énergétique. Ils ont besoin d'une estimation précise pour planifier leur budget de rénovation.",
    objectives: [
      "Maximiser le confort de vie",
      "Réduire les coûts énergétiques",
      "Préparer une vente éventuelle à long terme",
    ],
    image: "/placeholder-image-3.png",
    imagePosition: "right",
  },
];

export const HeroWrapperSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto">
        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <ToggleGroup type="single" defaultValue="all" className="flex gap-3 flex-wrap">
            {filterCategories.map((category) => (
              <ToggleGroupItem
                key={category.id}
                value={category.id}
                className={`p-3 rounded ${
                  category.active ? "bg-[#efe299]" : ""
                }`}
              >
                <span className="font-text-small text-[#1e1e1e] text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] [font-style:var(--text-small-font-style)]">
                  {category.label}
                </span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {/* Case Studies */}
        <div className="flex flex-col gap-[60px]">
          {caseStudies.map((study) => (
            <Card key={study.id} className="border-none shadow-none">
              <CardContent className="p-0">
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    study.imagePosition === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      className="w-full h-auto object-cover aspect-square"
                      alt={`Image for ${study.title}`}
                      src={study.image}
                    />
                  </div>

                  <div className="flex flex-col items-start gap-5 flex-1">
                    <div className="flex flex-col items-start gap-3 w-full">
                      <h3 className="w-full mt-[-1.00px] font-display-h5 font-[number:var(--display-h5-font-weight)] text-[#483621] text-[length:var(--display-h5-font-size)] tracking-[var(--display-h5-letter-spacing)] leading-[var(--display-h5-line-height)] [font-style:var(--display-h5-font-style)]">
                        {study.title}
                      </h3>

                      <Badge className="bg-[#fbf9eb] text-[#1e1e1e] hover:bg-[#fbf9eb] p-1 rounded font-text-smaller font-[number:var(--text-smaller-font-weight)] text-[length:var(--text-smaller-font-size)] leading-[var(--text-smaller-line-height)] tracking-[var(--text-smaller-letter-spacing)] [font-style:var(--text-smaller-font-style)]">
                        {study.category}
                      </Badge>

                      <div className="w-full font-text-small font-[number:var(--text-small-font-weight)] text-[length:var(--text-small-font-size)] leading-[var(--text-small-line-height)] text-[#1e1e1e] tracking-[var(--text-small-letter-spacing)] [font-style:var(--text-small-font-style)]">
                        <p>
                          Contexte :<br />
                          {study.context}
                        </p>
                        <br />
                        <p>
                          Objectif :<br />
                          {study.objectives.map((objective, index) => (
                            <React.Fragment key={index}>
                              {objective}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex items-center gap-2 w-full ${
                        study.imagePosition === "left" ? "justify-end" : ""
                      }`}
                    >
                      <Avatar className="w-10 h-10 bg-[#d9d9d9] rounded-[20px]" />
                      <Avatar className="w-10 h-10 bg-[#d9d9d9] rounded-[20px]" />
                    </div>

                    <Button
                      variant="ghost"
                      className="h-10 p-0 gap-3 hover:bg-transparent"
                    >
                      <span className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#1e1e1e] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                        Lire le cas complet
                      </span>
                      <div className="flex w-8 h-8 items-center justify-center rounded-[1000px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
                        <ArrowRightIcon className="w-5 h-5" />
                      </div>
                    </Button>
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
