import { NavigationSection } from "../../components/NavigationSection";
import { FooterSection } from "../../components/FooterSection";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Shield,
  FileText,
  Gavel,
  Ban,
  Scale,
  RefreshCcw,
  Mail,
} from "lucide-react";

const TermsOfService = (): JSX.Element => {
  const sections = [
    {
      icon: Shield,
      title: "1. Acceptation des Conditions",
      content: (
        <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
          En accédant et en utilisant le site et les services d'
          <span className="[font-family:'Sofia_Pro'] font-medium">
            Eurêka Ingénierie
          </span>
          , vous acceptez d'être lié par les présentes Conditions d'Utilisation.
          Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos
          services.
        </p>
      ),
    },
    {
      icon: FileText,
      title: "2. Utilisation des Services",
      content: (
        <ul className="space-y-3">
          {[
            "Vous vous engagez à utiliser nos services conformément aux lois en vigueur.",
            "Vous êtes responsable de l'exactitude des informations fournies.",
            "Tout usage abusif, frauduleux ou non autorisé est strictement interdit.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary-500 mt-2" />
              <span className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: Gavel,
      title: "3. Comptes et Sécurité",
      content: (
        <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
          Vous êtes responsable du maintien de la confidentialité de vos
          identifiants et de toutes les activités effectuées sous votre compte.
          Signalez immédiatement toute utilisation non autorisée.
        </p>
      ),
    },
    {
      icon: Ban,
      title: "4. Comportements Interdits",
      content: (
        <ul className="space-y-3">
          {[
            "Tentatives de contournement de la sécurité ou d'accès non autorisé.",
            "Ingénierie inverse, scraping intensif ou perturbation du service.",
            "Publication de contenus illicites, diffamatoires ou trompeurs.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary-500 mt-2" />
              <span className="font-display-h6 text-[#1e1e1e] leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: Scale,
      title: "5. Propriété Intellectuelle",
      content: (
        <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
          Tous les contenus, marques, logos, éléments visuels et logiciels sont
          la propriété d'Eurêka Ingénierie ou de ses partenaires. Toute
          reproduction ou utilisation sans autorisation écrite est interdite.
        </p>
      ),
    },
    {
      icon: RefreshCcw,
      title: "6. Modifications des Services et des Conditions",
      content: (
        <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
          Nous pouvons modifier ou mettre à jour les services et les présentes
          Conditions à tout moment. Les changements seront publiés sur cette
          page avec une date de mise à jour.
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
              Conditions Générales d'Utilisation
            </h1>
            <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] max-w-3xl mx-auto">
              Veuillez lire attentivement ces conditions avant d'utiliser nos
              services.
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
                      <CardTitle className="text-2xl text-[#1e1e1e] [font-family:'Sofia_Pro']">
                        {s.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 [font-family:'Sofia_Pro'] font-light">
                    {s.content}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact box */}
          <div className="mt-16 p-8 rounded-2xl border border-primary-200 ">
            <div className="text-center">
              <h3 className="[font-family:'Sofia_Pro'] text-2xl text-[#1e1e1e] font-light mb-4">
                Des questions sur nos Conditions ?
              </h3>
              <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] mb-6 max-w-2xl mx-auto">
                Notre équipe est disponible pour vous renseigner et vous
                accompagner.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[#1e1e1e] bg-[#F6F2CB] hover:bg-[#EFE299] px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Nous contacter
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default TermsOfService;
