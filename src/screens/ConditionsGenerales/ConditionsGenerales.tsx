import { NavigationSection } from "../../components/NavigationSection";
import { FooterSection } from "../../components/FooterSection";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { FileText, Receipt, Truck, Shield, CreditCard, RefreshCcw } from "lucide-react";

const ConditionsGenerales = (): JSX.Element => {
  const sections = [
    {
      icon: FileText,
      title: "1. Objet",
      content: (
        <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
          Les présentes Conditions Générales encadrent les relations entre Eurêka Ingénierie et ses clients pour la fourniture de ses prestations et services. Elles prévalent sur tout autre document, sauf accord écrit contraire.
        </p>
      ),
    },
    {
      icon: CreditCard,
      title: "2. Prix et Paiement",
      content: (
        <ul className="space-y-3">
          {[
            "Les prix sont indiqués en euros hors taxes, sauf indication contraire.",
            "Les modalités de paiement (échéancier, acompte, solde) sont précisées dans le devis ou la commande.",
            "Tout retard de paiement pourra entraîner des pénalités conformément à la loi en vigueur.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary-500 mt-2" />
              <span className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: Receipt,
      title: "3. Commandes et Devis",
      content: (
        <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
          Les devis émis par Eurêka Ingénierie ont une durée de validité précisée sur le document. La commande est ferme à réception de l'acceptation écrite et, le cas échéant, de l'acompte.
        </p>
      ),
    },
    {
      icon: Truck,
      title: "4. Livraison et Délais",
      content: (
        <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
          Les délais sont indiqués à titre indicatif et peuvent varier selon les contraintes techniques et d'exécution. Eurêka Ingénierie s'engage à informer le client en cas de retard prévisible.
        </p>
      ),
    },
    {
      icon: Shield,
      title: "5. Responsabilités et Garanties",
      content: (
        <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
          Eurêka Ingénierie met en œuvre les moyens nécessaires à la bonne exécution des prestations. Sa responsabilité ne saurait être engagée au-delà des montants facturés au titre de la prestation concernée, sauf disposition impérative.
        </p>
      ),
    },
    {
      icon: RefreshCcw,
      title: "6. Modifications",
      content: (
        <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
          Eurêka Ingénierie réserve le droit de modifier à tout moment les présentes Conditions Générales. La version applicable est celle en vigueur à la date d'acceptation du devis ou de la commande.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavigationSection />

      {/* Hero */}
      <section className="bg-[#fbf9eb] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="font-display-h6 text-4xl sm:text-5xl lg:text-6xl text-[#1e1e1e] mb-6">
              Conditions Générales
            </h1>
            <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] max-w-3xl mx-auto">
              Cadre contractuel des prestations et services Eurêka Ingénierie.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            {sections.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Card key={idx} className="border-0 shadow-none bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-radial-gold rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#1e1e1e]" />
                      </div>
                      <CardTitle className="text-2xl text-[#1e1e1e] font-display-h6">{s.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 [font-family:'Sofia_Pro'] font-light">{s.content}</CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ConditionsGenerales;
