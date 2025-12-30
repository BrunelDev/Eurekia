import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function CompleteForm() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="space-y-8">
        {/* Nom et informations de contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="nom"
              className="text-lg font-medium text-[#1e1e1e] [font-family:'Open_Sans']"
            >
              Votre nom *
            </Label>
            <Input
              id="nom"
              name="nom"
              placeholder="Votre nom"
              className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition placeholder:[font-family:'Open_Sans']"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="telephone"
              className="text-lg font-medium text-[#1e1e1e] [font-family:'Open_Sans']"
            >
              Téléphone *
            </Label>
            <div className="flex">
              <div className="flex items-center px-3 border-b-2 border-gray-300">
                <span className="mr-2">🇫🇷</span>
              </div>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                placeholder="Numéro de portable"
                className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition placeholder:[font-family:'Open_Sans'] flex-1"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <Label
              htmlFor="email"
              className="text-lg font-medium text-[#1e1e1e] [font-family:'Open_Sans']"
            >
              Votre email *
            </Label>
            <Input
              id="email"
              name="user_email"
              type="email"
              placeholder="Adresse email"
              className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition placeholder:[font-family:'Open_Sans']"
              required
            />
          </div>
        </div>

        {/* Adresse */}
        <div className="space-y-4">
          <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Open_Sans']">
            Adresse
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <Input
                name="adresse"
                placeholder="Adresse"
                className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition placeholder:[font-family:'Open_Sans']"
              />
            </div>
            <div>
              <Input
                name="code_postal"
                placeholder="Code Postal"
                className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition placeholder:[font-family:'Open_Sans']"
              />
            </div>
          </div>
        </div>

        {/* Type de projet */}
        <div className="space-y-4">
          <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Open_Sans']">
            Sélectionnez un élément qui décrit le mieux votre projet
          </Label>
          <RadioGroup name="type_projet" className="space-y-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="renovation_complete"
                id="renovation_complete"
              />
              <Label
                htmlFor="renovation_complete"
                className="[font-family:'Open_Sans']"
              >
                Rénovation complète
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="renovation_partielle"
                id="renovation_partielle"
              />
              <Label
                htmlFor="renovation_partielle"
                className="[font-family:'Open_Sans']"
              >
                Rénovation partielle
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="extension" id="extension" />
              <Label htmlFor="extension" className="[font-family:'Open_Sans']">
                Extension
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="construction" id="construction" />
              <Label
                htmlFor="construction"
                className="[font-family:'Open_Sans']"
              >
                Construction
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="amenagement_exterieur"
                id="amenagement_exterieur"
              />
              <Label
                htmlFor="amenagement_exterieur"
                className="[font-family:'Open_Sans']"
              >
                Aménagement extérieur
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="facades" id="facades" />
              <Label htmlFor="facades" className="[font-family:'Open_Sans']">
                Façades (inclus ouverture, fenêtres, volets)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="batiment_industriel"
                id="batiment_industriel"
              />
              <Label
                htmlFor="batiment_industriel"
                className="[font-family:'Open_Sans']"
              >
                Bâtiment industriel
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="locaux_professionnels"
                id="locaux_professionnels"
              />
              <Label
                htmlFor="locaux_professionnels"
                className="[font-family:'Open_Sans']"
              >
                Locaux professionnels
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Niveau de performance énergétique */}
        <div className="space-y-4">
          <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Open_Sans']">
            Sélectionner le niveau de performance énergétique actuel :
          </Label>
          <Select name="performance_energetique">
            <SelectTrigger className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400">
              <SelectValue placeholder="A afficher si concerne bâtiment (hors extérieur)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="existant">Existant</SelectItem>
              <SelectItem value="standard_rt2012">Standard RT2012</SelectItem>
              <SelectItem value="re2020">
                RE2020 (de base pour projet neuf)
              </SelectItem>
              <SelectItem value="bbc">
                BBC (Bâtiment Basse Consommation)
              </SelectItem>
              <SelectItem value="bioclimatique">Bioclimatique</SelectItem>
              <SelectItem value="passive">
                Passive (maison passive – Passivhaus)
              </SelectItem>
              <SelectItem value="autonome">
                Autonome (énergétiquement et/ou en eau)
              </SelectItem>
              <SelectItem value="hqe_breeam">
                HQE / BREEAM / LEED (certifications environnementales)
              </SelectItem>
              <SelectItem value="ne_sais_pas">Je ne sais pas</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Type de bien */}
        <div className="space-y-4">
          <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Open_Sans']">
            Quel est le bien concerné ? *
          </Label>
          <RadioGroup name="type_bien" className="space-y-3" required>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="appartement" id="appartement" />
              <Label
                htmlFor="appartement"
                className="[font-family:'Open_Sans']"
              >
                Appartement
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="maison" id="maison" />
              <Label htmlFor="maison" className="[font-family:'Open_Sans']">
                Maison
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="immeuble" id="immeuble" />
              <Label htmlFor="immeuble" className="[font-family:'Open_Sans']">
                Immeuble
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="bien_professionnel"
                id="bien_professionnel"
              />
              <Label
                htmlFor="bien_professionnel"
                className="[font-family:'Open_Sans']"
              >
                Bien professionnel
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="autre" id="autre" />
              <Label htmlFor="autre" className="[font-family:'Open_Sans']">
                Autre
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Surface */}
        <div className="space-y-4">
          <Label
            htmlFor="surface"
            className="text-lg font-medium text-[#1e1e1e] [font-family:'Open_Sans']"
          >
            Quelle est la surface du bien à rénover ou à construire ? *
          </Label>
          <Input
            id="surface"
            name="surface"
            placeholder="m2"
            className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition placeholder:[font-family:'Open_Sans']"
            required
          />
        </div>

        {/* Budget */}
        <div className="space-y-4">
          <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Open_Sans']">
            Quel est votre budget ? *
          </Label>
          <RadioGroup name="budget" className="space-y-3" required>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="moins_5000" id="moins_5000" />
              <Label htmlFor="moins_5000" className="[font-family:'Open_Sans']">
                Moins de 5000€
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10000_30000" id="10000_30000" />
              <Label
                htmlFor="10000_30000"
                className="[font-family:'Open_Sans']"
              >
                Entre 10 000 et 30 000€
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="30000_50000" id="30000_50000" />
              <Label
                htmlFor="30000_50000"
                className="[font-family:'Open_Sans']"
              >
                Entre 30 000 € et 50 000 €
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="100000_250000" id="100000_250000" />
              <Label
                htmlFor="100000_250000"
                className="[font-family:'Open_Sans']"
              >
                Entre 100 000 € et 250 000 €
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="500000_plus" id="500000_plus" />
              <Label
                htmlFor="500000_plus"
                className="[font-family:'Open_Sans']"
              >
                entre 500 000 € et plus
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Description du projet */}
        <div className="space-y-4">
          <Label
            htmlFor="description_projet"
            className="text-lg font-medium text-[#1e1e1e] [font-family:'Open_Sans']"
          >
            Voulez-vous décrire plus en détail votre projet ?
          </Label>
          <Textarea
            id="description_projet"
            name="description_projet"
            placeholder="Décrive mon projet (optionnel)"
            className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition placeholder:[font-family:'Open_Sans'] min-h-[100px]"
          />
        </div>

        {/* Bouton de soumission */}
        <div className="pt-6">
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg [font-family:'Open_Sans'] rounded-md transition-colors"
          >
            ENVOYER MA DEMANDE
          </Button>
        </div>
      </div>{" "}
    </div>
  );
}
