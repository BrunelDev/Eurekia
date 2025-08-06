import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import { FooterSection } from "../../components/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";
import { Button } from "../../components/ui/button";

export const DevisChoice = () => {
 

  const handleChoice = (sujet: string) => {
    window.location.href = `/contact?sujet=${sujet}`;
  };

  return (
    <>
      <NavigationSection />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] bg-gray-50 p-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4 font-display-h6">
            Choisissez votre type de devis
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-display-h6">
            Nous offrons deux options pour répondre au mieux à vos besoins.
            Sélectionnez celle qui correspond à votre projet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Devis Personnalisé Card */}
          <Card className="flex flex-col justify-between p-6 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 font-display-h6">
                  Devis Personnalisé
                </CardTitle>
                <CardDescription className="mt-2 text-gray-600 font-display-h6">
                  Idéal pour les projets complexes ou de grande envergure.
                  Obtenez une estimation détaillée et adaptée à vos
                  spécifications uniques.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700 font-display-h6">
                  <li>Analyse approfondie de votre projet</li>
                  <li>Solutions sur mesure</li>
                  <li>Accompagnement par un expert</li>
                </ul>
              </CardContent>
            </div>
            <div className="mt-6">
              <Button
                onClick={() => handleChoice("Devis personnalisé")}
                className="w-full bg-radial-gold hover:brightness-90 hover:shadow-md transition-all duration-300"
              >
                <h6 className="text-center font-display-h6 text-gray-700">
                  Demander un devis personnalisé
                </h6>
              </Button>
            </div>
          </Card>

          {/* Devis Instantané Card */}
          <Card className="flex flex-col justify-between p-6 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 font-display-h6">
                  Devis Instantané
                </CardTitle>
                <CardDescription className="mt-2 text-gray-600 font-display-h6">
                  Parfait pour les projets simples et rapides. Obtenez une
                  estimation immédiate pour votre chantier.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700 font-display-h6">
                  <li>Réponse rapide et automatisée</li>
                  <li>Processus simple et direct</li>
                  <li className="font-bold">
                    Pour les chantiers de superficie inférieure à 150m²
                  </li>
                </ul>
              </CardContent>
            </div>
            <div className="mt-6">
              <Button
                onClick={() => handleChoice("Devis instantané")}
                className="w-full bg-radial-gold hover:brightness-90 hover:shadow-md transition-all duration-300"
              >
                <h6 className="text-center font-display-h6 text-gray-700">
                  Obtenir un devis instantané
                </h6>
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <FooterSection />
    </>
  );
};
