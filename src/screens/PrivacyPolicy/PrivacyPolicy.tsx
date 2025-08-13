import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { NavigationSection } from "../../components/NavigationSection";
import { FooterSection } from "../../components/FooterSection";
import { Shield, Lock, Eye, Users, FileText, CheckCircle, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const policyData = [
    {
      icon: Shield,
      title: "Introduction",
      content: (
        <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
          Bienvenue sur le site d'
          <span className="font-medium">Eurêka Ingénierie</span>. Nous nous
          engageons à protéger votre vie privée. Cette politique de
          confidentialité explique comment nous collectons, utilisons,
          divulguons et protégeons vos informations lorsque vous visitez notre
          site web.
        </p>
      ),
    },
    {
      icon: Eye,
      title: "1. Collecte de l'information",
      content: (
        <div className="space-y-4">
          <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
            Nous collectons des informations lorsque vous vous inscrivez à notre
            newsletter, remplissez un formulaire de contact ou de demande de
            devis.
          </p>
          <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-400">
            <p className="[font-family:'Sofia_Pro'] font-medium text-[#1e1e1e] text-sm">
              <strong>Informations collectées :</strong> nom, prénom, adresse
              e-mail, numéro de téléphone (optionnel)
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: Users,
      title: "2. Utilisation des informations",
      content: (
        <div className="space-y-4">
          <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
            Toutes les informations que nous recueillons auprès de vous peuvent
            être utilisées pour :
          </p>
          <ul className="space-y-3">
            {[
              "Personnaliser votre expérience et répondre à vos besoins individuels",
              "Fournir un contenu adapté à vos projets",
              "Améliorer notre site web et nos offres de services",
              "Améliorer le service client et vos besoins de prise en charge",
              "Vous contacter par e-mail pour le suivi de vos demandes ou notre newsletter",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      icon: Lock,
      title: "3. Confidentialité et Sécurité",
      content: (
        <div className="space-y-4">
          <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
            Nous sommes les seuls propriétaires des informations recueillies sur
            ce site. Vos informations personnelles ne seront pas vendues,
            échangées, transférées, ou données à une autre société sans votre
            consentement.
          </p>
          <div className="bg-success-50 p-4 rounded-lg border border-success-200">
            <p className="[font-family:'Sofia_Pro'] font-medium text-success-800 text-sm">
              🔒 Vos données sont protégées par des mesures de sécurité avancées
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "4. Divulgation à des tiers",
      content: (
        <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
          Nous ne vendons, n'échangeons et ne transférons pas vos informations
          personnelles identifiables à des tiers. Ceci ne comprend pas les tiers
          de confiance qui nous aident à exploiter notre site Web, tant que ces
          parties conviennent de garder ces informations confidentielles.
        </p>
      ),
    },
    {
      icon: CheckCircle,
      title: "5. Consentement",
      content: (
        <div className="space-y-4">
          <p className="[font-family:'Sofia_Pro'] font-light text-[#1e1e1e] leading-relaxed">
            En utilisant notre site, vous consentez à notre politique de
            confidentialité.
          </p>
          <div className="bg-info-50 p-4 rounded-lg border border-info-200">
            <p className="[font-family:'Sofia_Pro'] font-medium text-info-800 text-sm">
              💡 Vous pouvez retirer votre consentement à tout moment en nous
              contactant
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavigationSection />

      {/* Hero Section */}
      <section className="bg-[#fbf9eb] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#1e1e1e] font-display-h6 mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-lg sm:text-xl text-[#1e1e1e] [font-family:'Sofia_Pro'] font-light max-w-3xl mx-auto mb-4">
              Votre confiance est notre priorité. Découvrez comment nous
              protégeons vos données personnelles.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200">
              <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
              <span className="text-sm [font-family:'Sofia_Pro'] font-medium text-[#1e1e1e]">
                Dernière mise à jour : 11 août 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            {policyData.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card
                  key={index}
                  className="shadow-none border-0 bg-white transition-all duration-300"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-[#1e1e1e] font-display-h6">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">{section.content}</CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl border border-primary-200">
            <div className="text-center">
              <h3 className="text-2xl text-[#1e1e1e] font-display-h6 mb-4">
                Des questions sur notre politique de confidentialité ?
              </h3>
              <p className="text-[#1e1e1e] [font-family:'Sofia_Pro'] font-light mb-6 max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour répondre à toutes vos
                questions concernant la protection de vos données.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-yellow-50 text-black px-6 py-3 rounded-lg font-medium hover:bg-[#EFE299] transition-all duration-200"
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

export default PrivacyPolicy;
