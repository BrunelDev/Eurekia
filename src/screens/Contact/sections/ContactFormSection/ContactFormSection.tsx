import emailjs from "@emailjs/browser";
import { CheckIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
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
    { id: "Devis", label: "Devis" },
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
  type Status = "idle" | "sending" | "success" | "error";
  const [submissionResults, setSubmissionResults] = useState<{
    main: Status;
    devis: Status;
  }>({ main: "idle", devis: "idle" });
  const timeoutRef = useRef<{ [k: string]: number | null }>({ main: null, devis: null });
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = async (
    event?: React.FormEvent,
    source: "main" | "devis" = "main"
  ) => {
    if (event) event.preventDefault();
    if (!form.current) return;

    // Before sending, serialize Devis checkbox group into a single hidden input
    try {
      const formEl = form.current;
      const checked = Array.from(
        formEl.querySelectorAll<HTMLInputElement>(
          'input[name="devis_project_categories"]:checked'
        )
      ).map((el) => el.value);

      let hidden = formEl.querySelector(
        'input[name="devis_project_categories_serialized"]'
      ) as HTMLInputElement | null;
      if (!hidden) {
        hidden = document.createElement("input");
        hidden.type = "hidden";
        hidden.name = "devis_project_categories_serialized";
        formEl.appendChild(hidden);
      }
      hidden.value = checked.join(", ");
    } catch (err) {
      console.warn("Failed to serialize devis categories:", err);
    }

    // start sending for the given source only
    setSubmissionResults((prev) => ({ ...prev, [source]: "sending" }));

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmissionResults((prev) => ({ ...prev, [source]: "success" }));
      toast.success("Votre message a été envoyé avec succès !");
      form.current?.reset();

      // remove serialized hidden input if present
      try {
        const formEl = form.current;
        const hidden = formEl?.querySelector(
          'input[name="devis_project_categories_serialized"]'
        );
        if (hidden && hidden.parentNode) hidden.parentNode.removeChild(hidden);
      } catch (e) {
        console.warn("Could not remove serialized hidden input:", e);
      }

      // clear any previous timeout for this source
      if (timeoutRef.current[source]) {
        window.clearTimeout(timeoutRef.current[source] as number);
      }
      // after 4s, reset to idle for this source
      timeoutRef.current[source] = window.setTimeout(() => {
        setSubmissionResults((prev) => ({ ...prev, [source]: "idle" }));
        timeoutRef.current[source] = null;
      }, 4000) as unknown as number;
    } catch (error: any) {
      setSubmissionResults((prev) => ({ ...prev, [source]: "error" }));
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
      console.log("FAILED...", error?.text || error);

      if (timeoutRef.current[source]) {
        window.clearTimeout(timeoutRef.current[source] as number);
      }
      // after 6s, allow retry for this source
      timeoutRef.current[source] = window.setTimeout(() => {
        setSubmissionResults((prev) => ({ ...prev, [source]: "idle" }));
        timeoutRef.current[source] = null;
      }, 6000) as unknown as number;
    }
  };

  useEffect(() => {
    return () => {
      Object.keys(timeoutRef.current).forEach((k) => {
        const v = timeoutRef.current[k];
        if (v) window.clearTimeout(v as number);
      });
    };
  }, []);

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
          {!sujet &&
            selectedSubject !== "Devis personnalisé" &&
            selectedSubject !== "Devis instantané" && (
              <div className="flex flex-col gap-4">
                <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Sofia_Pro']">
                  Sélectionnez un Sujet?
                </Label>
                <RadioGroup
                  defaultValue="Information"
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
                          className="w-5 h-5 border-[#DEB83B] text-yellow-400 [font-family:'Sofia_Pro']"
                        />
                        {selectedSubject === option.id && (
                          <div className="w-5 h-5 bg-[#DEB83B] rounded-full top-0 left-0 absolute flex justify-center items-center">
                            <CheckIcon size={14} color="white" />
                          </div>
                        )}
                      </div>

                      <Label
                        htmlFor={option.id}
                        className="text-base text-[#1e1e1e] [font-family:'Sofia_Pro']"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

                  

          {/* Devis block (si sélectionné) : afficher si l'utilisateur a choisi "Devis" ou si l'URL fournit "Devis personnalisé" */}
          {(selectedSubject === "Devis" || selectedSubject === "Devis personnalisé") && (
            // pass the MAIN submission status so the Devis button becomes the primary action
            <DevisForm submissionStatus={submissionResults.main} onSubmitSource={(src) => handleSubmit(undefined, src)} />
          )}

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="message"
              className="text-lg font-medium text-[#1e1e1e] [font-family:'Sofia_Pro']"
            >
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Écrivez votre message ici..."
              className="border-0 border-b-2 border-gray-300  rounded-none px-2 py-3 focus:outline-none focus:border-yellow-400 transition h-24 placeholder:[font-family:'Sofia_Pro'] placeholder:text-base"
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-end w-full pt-6">
            <div className="w-full flex">
              <button
                type="button"
                // this small button now triggers the 'devis' submission flow
                onClick={() => handleSubmit(undefined, "devis")}
                disabled={submissionResults.devis === "sending"}
                className={`ml-auto px-6 py-2 rounded-md font-semibold transition-colors duration-150 [font-family:'Sofia_Pro']
                  ${submissionResults.devis === "success" ? "bg-green-600 text-white" : "bg-[#cd9f25] text-white hover:bg-[#b8891f]"}
                `}
              >
                {submissionResults.devis === "sending" && "Envoi en cours..."}
                {submissionResults.devis === "success" && "Demande envoyée ✔"}
                {submissionResults.devis === "idle" && "Envoyer le message"}
              </button>
            </div>
            <div className="mt-2 w-full md:w-auto text-left">
              {submissionResults.main === "success" && (
                <p className="text-sm text-green-700">Merci — votre message a bien été envoyé.</p>
              )}
              {submissionResults.main === "error" && (
                <p className="text-sm text-red-600">Une erreur est survenue. Vérifiez votre connexion et réessayez.</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
