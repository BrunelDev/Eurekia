import { CheckIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { useState } from "react";

export const ContactFormSection = (): JSX.Element => {
  const subjectOptions = [
    { id: "information", label: "Demande d'information" },
    { id: "devis", label: "Devis" },
    { id: "assistance", label: "Assistance IA" },
    { id: "partenariat", label: "Partenariat" },
    { id: "autre", label: "Autre" },
  ];
  const [selectedSubject, setSelectedSubject] = useState<string>("information");

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24" id="contact-form">
      <div className="mx-auto max-w-7xl">
        <form className="flex flex-col gap-10 px-4">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="nom"
                className="text-lg font-medium text-[#1e1e1e]"
              >
                Nom
              </Label>
              <Input
                id="nom"
                placeholder="DOE"
                className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="prenom"
                className="text-lg font-medium text-[#1e1e1e]"
              >
                Prénom
              </Label>
              <Input
                id="prenom"
                placeholder="John"
                className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="email"
                className="text-lg font-medium text-[#1e1e1e]"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="telephone"
                className="text-lg font-medium text-[#1e1e1e]"
              >
                Téléphone
              </Label>
              <Input
                id="telephone"
                type="tel"
                placeholder="+33 1 23 45 67 89"
                className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition"
              />
            </div>
          </div>

          {/* Subject Selection */}
          <div className="flex flex-col gap-4">
            <Label className="text-lg font-medium text-[#1e1e1e]">
              Sélectionnez un Sujet?
            </Label>
            <RadioGroup
              defaultValue="information"
              className="flex flex-wrap gap-x-6 gap-y-4"
              onValueChange={(value) => {
                setSelectedSubject(value);
              }}
            >
              {subjectOptions.map((option) => (
                <div key={option.id} className="flex items-center gap-2">
                  <div className="relative">
                    <RadioGroupItem
                      value={option.id}
                      id={option.id}
                      className="w-5 h-5 border-[#DEB83B] text-yellow-400"
                    />
                    {selectedSubject === option.id && (
                      <div className="w-5 h-5 bg-[#DEB83B] rounded-full top-0 left-0 absolute flex justify-center items-center">
                        <CheckIcon size={14} color="white"/>
                      </div>
                    )}
                  </div>

                  <Label
                    htmlFor={option.id}
                    className="text-base text-[#1e1e1e]"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="message"
              className="text-lg font-medium text-[#1e1e1e]"
            >
              Message
            </Label>
            <Input
              id="message"
              placeholder="Écrivez votre message ici..."
              className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition h-24"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end w-full pt-6">
            <Button
              type="submit"
              className="w-full md:w-auto bg-[#F6F2CB] hover:bg-[#EFE299] text-black font-bold py-3 px-8 shadow-none rounded-none"
            >
              Envoyer le message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
