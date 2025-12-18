"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function DevisForm({
  submissionStatus,
  onSubmitSource,
}: {
  submissionStatus: "idle" | "sending" | "success" | "error";
  onSubmitSource?: (source: "devis" | "main") => void;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full mt-10 flex flex-col gap-12">
      {/* IDENTITÉ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        {/* NOM */}
        <div className="flex flex-col gap-2">
          <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Sofia_Pro']">
            Nom
          </Label>
          <Input
            name="devis_lastname"
            placeholder="DOE"
            className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition placeholder:[font-family:'Sofia_Pro']"
            required
          />
        </div>

        {/* PRENOM */}
        <div className="flex flex-col gap-2">
          <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Sofia_Pro']">
            Prénom
          </Label>
          <Input
            name="devis_firstname"
            placeholder="John"
            className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition placeholder:[font-family:'Sofia_Pro']"
            required
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Sofia_Pro']">
            Email
          </Label>
          <Input
            name="devis_email"
            type="email"
            placeholder="johndoe@gmail.com"
            className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition placeholder:[font-family:'Sofia_Pro']"
            required
          />
        </div>

        {/* TELEPHONE */}
        <div className="flex flex-col gap-2">
          <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Sofia_Pro']">
            Téléphone
          </Label>

          <PhoneInput
            country={"fr"}
            inputProps={{ name: "devis_phone", required: true }}
            inputStyle={{
              width: "100%",
              border: "0",
              borderBottom: "2px solid rgb(209, 213, 219)",
              borderRadius: "0",
              padding: "0.75rem 3rem",
              fontFamily: "Sofia_Pro",
              backgroundColor: "transparent",
              borderBottomColor: isFocused ? "rgb(250, 204, 21)" : "#ccc",
              outline: "none",
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>

        {/* ADRESSE */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Sofia_Pro']">
            Adresse
          </Label>
          <Input
            name="devis_address"
            placeholder="Adresse complète"
            className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition placeholder:[font-family:'Sofia_Pro']"
          />
        </div>

        {/* CODE POSTAL */}
        <div className="flex flex-col gap-2">
          <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Sofia_Pro']">
            Code postal
          </Label>
          <Input
            name="devis_postal_code"
            placeholder="75000"
            className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition placeholder:[font-family:'Sofia_Pro']"
          />
        </div>
      </div>

      {/* TYPE DE PROJET */}
      <div className="flex flex-col gap-4">
        <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Sofia_Pro']">
          Décrivez votre projet
        </Label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Rénovation complète",
            "Rénovation partielle",
            "Extension",
            "Construction neuve",
            "Aménagement intérieur",
            "Facades (cloisons, volets, fenêtres...)",
            "Bâtiment industriel / Hangar",
          ].map((label, i) => (
            <label key={i} className="flex gap-3 items-center cursor-pointer">
              <input
                type="checkbox"
                name="devis_project_categories"
                value={label}
                className="w-4 h-4 accent-[#cd9f25]"
              />
              <span className="text-[#1e1e1e] [font-family:'Sofia_Pro']">
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* NIVEAU ÉNERGETIQUE */}
      <div className="flex flex-col gap-3">
        <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Sofia_Pro']">
          Niveau de performance énergétique
        </Label>

        <select
          name="devis_energy_level"
          className="border-0 border-b-2 border-gray-300 py-3 text-[#1e1e1e] bg-transparent focus:border-yellow-400 outline-none [font-family:'Sofia_Pro']"
        >
          <option>Sélectionner…</option>
          <option>À rafraîchir ou rénovation lourde</option>
          <option>RT2012</option>
          <option>RE2020</option>
          <option>BBC</option>
          <option>Passif</option>
          <option>Autonome</option>
          <option>HQE / BREEAM / LEED</option>
          <option>Je ne sais pas</option>
        </select>
      </div>

      {/* SURFACE */}
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Sofia_Pro']">
          Surface à rénover / construire
        </Label>
        <Input
          name="devis_surface"
          placeholder="Ex : 120 m²"
          className="border-0 border-b-2 border-gray-300 rounded-none px-2 py-3 focus:border-yellow-400 transition placeholder:[font-family:'Sofia_Pro']"
        />
      </div>

      {/* BUDGET */}
      <div className="flex flex-col gap-4">
        <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Sofia_Pro']">
          Quel est votre budget ?
        </Label>

        <div className="flex flex-col gap-2">
          {[
            "Moins de 30 000 €",
            "Entre 30 000 € et 60 000 €",
            "Entre 60 000 € et 100 000 €",
            "Entre 100 000 € et 300 000 €",
            "Plus de 300 000 €",
          ].map((label, i) => (
            <label key={i} className="flex gap-3 items-center cursor-pointer">
              <input
                type="radio"
                name="devis_budget"
                value={label}
                className="w-4 h-4 accent-[#cd9f25]"
              />
              <span className="text-[#1e1e1e] [font-family:'Sofia_Pro']">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* DESCRIPTION PROJET */}
      <div className="flex flex-col gap-2">
        <Label className="text-lg font-medium text-[#1e1e1e] [font-family:'Sofia_Pro']">
          Décrivez votre projet
        </Label>

        <textarea
          name="devis_description"
          rows={5}
          placeholder="Expliquez votre projet (objectifs, délais, besoins...)"
          className="border-0 border-b-2 border-gray-300 rounded-none p-2 focus:border-yellow-400 transition bg-transparent [font-family:'Sofia_Pro']"
        />
      </div>

      {/* SUBMIT */}
      <div className="w-full flex">
        <button
          type="button"
          // this button is now the primary action (full width)
          disabled={submissionStatus === "sending"}
          onClick={() => onSubmitSource && onSubmitSource("main")}
          className={`w-full py-3 rounded-lg font-semibold transition [font-family:'Sofia_Pro'] ${
            submissionStatus === "success" ? "bg-green-600 text-white" : "bg-[#cd9f25] text-white hover:bg-[#b8891f]"
          }`}
        >
          {submissionStatus === "sending" && "Envoi en cours..."}
          {submissionStatus === "success" && "Demande envoyée ✔"}
          {submissionStatus === "idle" && "Envoyer ma demande"}
        </button>
      </div>
    </div>
  );
}
