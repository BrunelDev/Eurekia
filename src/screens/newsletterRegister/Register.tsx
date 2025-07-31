import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useState } from "react";
import { FooterSection } from "../../components/FooterSection";

export const NewsletterRegister = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique de soumission du formulaire à implémenter
    console.log(`Email soumis : ${email}`);
    alert(`Merci de vous être inscrit à notre newsletter avec l'adresse : ${email}`);
    setEmail(""); // Réinitialiser le champ après soumission
  };

  return (
    <>
    <div className="flex items-center justify-center min-h-[calc(100vh-72px)] bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 font-display-h6">
          Inscrivez-vous à notre Newsletter
        </h2>
        <p className="text-center mb-6 text-gray-600 font-display-h6">
          Recevez les dernières nouvelles et offres d'Eurêka directement dans votre boîte de réception.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="sr-only font-display-h6">
              Adresse e-mail
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Votre adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-b border-gray-300"
            />
          </div>
          <Button type="submit" className="w-full bg-radial-gold">
            <h6 className="text-center font-display-h6 text-gray-700">S'inscrire</h6>
          </Button>
        </form>
      </div>
    </div>
    <FooterSection />
    </>
  );
};

