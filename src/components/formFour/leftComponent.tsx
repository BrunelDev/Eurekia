import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";


 const contactItems = [
    {
      icon: <MapPinIcon className="w-7 h-7 text-black" />,
      description: "Nos bureaux sont situés :",
      link: "/contact/carte",
      href: "/contact/carte",
      target: "_self",
    },
    {
      icon: <PhoneIcon className="w-7 h-7 text-black" />,
      description: "Appelez-nous du lundi au vendredi, de 9h à 18h",
      link: "0615663970",
      href: "tel:0615663970",
    },
    {
      icon: <MailIcon className="w-7 h-7 text-black" />,
      description: "Nous répondons sous 24h ouvrées",
      link: "contact@eurekaingenierie.com",
      href: "mailto:contact@eurekaingenierie.com",
    },
  ];

const statistics = [
  { number: "6800+", label: "Plans réalisés" },
  // { number: "900+", label: "Cerfas remplis" },
  // { number: "96%", label: "Permis acceptés" },
  { number: "70%", label: "D'économie" },
];

export default function LeftComponent() {
  const isPersonnalized = false;

  return (
    <section className="flex flex-col w-full items-start gap-4 sm:gap-3 pt-0 px-4 sm:px-0 relative">
      {/* Header */}
      <header className="flex flex-col items-start w-full animate-fade-in opacity-1">
        <h1 className="w-full font-heading-h2 text-yellow-500 tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] font-medium text-lg sm:text-2xl">
          Félicitations !
        </h1>

        <p className="w-full font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)] text-xs sm:text-sm ">
          {isPersonnalized
            ? "Nous avons bien reçu votre demande de devis. Elle a été confiée à nos techniciens afin d'analyser plus en détail votre projet."
            : "Votre devis vient tout juste d'être envoyé dans votre boîte mail, consultez-le dès maintenant !"}
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-start gap-6 sm:gap-8 w-full animate-fade-in opacity-1 [--animation-delay:200ms]">
        <div className="flex flex-col items-start gap-2 w-full">
          {/* Contact Card */}
          <Card className="w-full bg-white border-0 shadow-none rounded-none">
            <CardContent className="flex flex-col items-start gap-4 p-4 sm:p-5">
              <div className="flex flex-col items-start gap-1 w-full">
                <h2 className="w-full mt-[-1.00px] font-heading-h3 text-[#021327] text-xs sm:text-xl tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] font-medium">
                  {isPersonnalized
                    ? "Un expert vous rappellera prochainement pour en savoir plus sur votre projet. "
                    : "Des questions ? Envie de valider votre devis ?"}
                </h2>

                <p className="w-full font-medium tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] text-[#6d7074] text-xs sm:text-base ">
                  {isPersonnalized
                    ? "En attendant, vous pouvez nous contacter si vous avez la moindre question."
                    : "Contactez l'équipe dès maintenant par téléphone ou par mail."}
                </p>
              </div>

                <div className="w-full flex flex-col gap-4 sm:gap-5 mt-2">
                  {contactItems.map((item, index) => (
                    <Link
                      to={item.href}
                      target={item.target}
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 no-underline group transition-all hover:translate-x-1"
                    >
                      <div className="flex-shrink-0 flex w-12 h-12 sm:w-14 sm:h-14 items-center justify-center rounded-full bg-radial-gold-circle group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0">
                        <p className="text-[#6d7074] font-light text-xs sm:text-sm">
                          {item.description}
                        </p>
                        <p className="text-sm sm:text-base font-medium text-yellow-600 group-hover:text-yellow-500 transition-colors break-words">
                          {item.link === "/contact/carte"
                            ? "159 Chemin du Val de Cagne 06800 Cagnes-sur-Mer FRANCE"
                            : item.link}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <p className="w-full text-[#6d7074] text-xs tracking-[var(--text-smallest-letter-spacing)]">
            Les résultats des simulations sont indicatifs et ne constituent pas
            une offre définitive. Le devis final sera validé après examen
            attentif de votre dossier (et promis, on ne fait pas de lancer de
            fléchettes pour décider du prix).
            <br />
            <br />
            Si notre proposition vous plaît, envoyez-nous simplement un e-mail.
            Nous l&apos;étudierons sérieusement et vous confirmerons rapidement
            votre devis, pour avancer sereinement dans votre projet.
          </p>
        </div>

        {/* Statistics */}
        <Card className="w-full bg-[#042347] border-0 shadow-none animate-fade-in opacity-1 [--animation-delay:400ms] rounded-none ">
          <CardContent className="flex flex-col items-center justify-center gap-2.5 p-4 sm:p-5">
            <div className="grid grid-cols-2 sm:flex sm:h-16 items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full sm:w-[98px] items-center sm:items-start gap-1"
                >
                  <div className="w-full mt-[-1.00px] text-white text-xl sm:text-3xl text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)]">
                    {stat.number}
                  </div>

                  <div className="w-full font-text-medium font-[number:var(--text-medium-font-weight)] text-white text-xs sm:text-sm lg:text-[length:var(--text-medium-font-size)] text-center tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)] sm:text-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
