import emailjs from "@emailjs/browser";
import { CheckIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "react-phone-input-2/lib/style.css";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../../../../components/ui/button";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { Textarea } from "../../../../components/ui/textarea";
import DevisForm from "./DevisForm";

export const ContactFormSection = (): JSX.Element => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sujet = queryParams.get("sujet");

  const subjectOptions = [
    { id: "Information", label: "Demande d'information" },
    { id: "Devis personnalisé", label: "Devis" },
    { id: "Assistance intelligente", label: "Assistance intelligente" },
    { id: "Partenariat", label: "Partenariat" },
    { id: "Autre", label: "Autre" },
  ];
  // const devis = [
  //   { id: "Devis personnalisé", label: "Devis personnalisé" },
  //   { id: "Devis instantané", label: "Devis instantané" },
  // ];

  const [selectedSubject, setSelectedSubject] = useState<string>(
    sujet || "Information"
  );
  // état pour le sous-choix Devis (instantané / personnalisé)
  const [devisType, setDevisType] = useState<
    "instantane" | "personnalise" | null
  >(null);
  const form = useRef<HTMLFormElement>(null);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "sending">(
    "idle"
  );
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.current) return;

    setSubmissionStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmissionStatus("idle");
          toast.success("Votre message a été envoyé avec succès !");
          form.current?.reset();
        },
        (error) => {
          setSubmissionStatus("idle");
          toast.error("Une erreur s'est produite. Veuillez réessayer.");
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    if (sujet) {
      const formElement = document.getElementById("contact-form");
      console.log(formElement);
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [sujet]);

  return (
    <section
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
      id="contact-form"
    >
      <div className="mx-auto max-w-7xl">
        <form
          ref={form}
          className="flex flex-col gap-10 px-4"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="logo_url"
            value="https://www.eurekaingenierie.com/logo-black.png"
          />

          {/* Subject Selection */}

          <div className="flex flex-col gap-4">
            <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Open_Sans']">
              Sélectionnez un Sujet?
            </Label>
            <RadioGroup
              defaultValue={sujet || "Information"}
              className="flex flex-wrap gap-x-6 gap-y-4"
              onValueChange={setSelectedSubject}
              name="sujet"
            >
              {subjectOptions.map((option) => (
                <div key={option.id} className="flex items-center gap-2">
                  <div className="relative">
                    <RadioGroupItem
                      value={option.id}
                      id={option.id}
                      className="w-5 h-5 border-[#DEB83B] text-yellow-400 [font-family:'Open_Sans']"
                    />
                    {selectedSubject === option.id && (
                      <div className="w-5 h-5 bg-[#DEB83B] rounded-full top-0 left-0 absolute flex justify-center items-center">
                        <CheckIcon size={14} color="white" />
                      </div>
                    )}
                  </div>

                  <Label
                    htmlFor={option.id}
                    className="text-base text-[#1e1e1e] [font-family:'Open_Sans']"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Devis block (si sélectionné) : afficher si l'utilisateur a choisi "Devis" ou si l'URL fournit "Devis personnalisé" */}
          {(selectedSubject === "Devis" ||
            selectedSubject === "Devis personnalisé") && <DevisForm />}

          {/* Message Field */}
          {!(
            selectedSubject === "Devis" ||
            selectedSubject === "Devis personnalisé"
          ) && (
            <>
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="message"
                  className="text-lg font-medium text-[#1e1e1e] [font-family:'Open_Sans']"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Écrivez votre message ici..."
                  className="border-0 border-b-2 border-gray-300  rounded-none px-2 py-3 focus:outline-none focus:border-yellow-400 transition h-24 placeholder:[font-family:'Open_Sans'] placeholder:text-base"
                  required
                />
              </div>
              {/* Submit Button */}
              <div className="flex flex-col items-end w-full pt-6">
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-[#F6F2CB] hover:bg-[#EFE299] text-black py-3 px-8 shadow-none rounded-none disabled:opacity-50 [font-family:'Open_Sans']"
                  disabled={submissionStatus === "sending"}
                >
                  {submissionStatus === "sending" ?
                    "Envoi en cours..."
                  : "Envoyer le message"}
                </Button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
};
