import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useState } from "react";
import { FooterSection } from "../../components/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";
import { toast } from "sonner";

export const NewsletterRegister = () => {
  const queryParams = new URLSearchParams(location.search);
  const emailFromQuery = queryParams.get("email");
  const [email, setEmail] = useState(emailFromQuery || "");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      email,
      first_name: firstName,
      last_name: lastName,
    };

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/9cb4yl7issaxao75j7x32gp7n03ncs9d",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Merci de vous être inscrit à notre newsletter!");
        setEmail("");
        setFirstName("");
        setLastName("");
        setTimeout(() => {
          window.location.href = "/contact";
        }, 2000);
      } else {
        throw new Error("Échec de l'envoi");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      toast.error(
        "Une erreur s'est produite lors de l'inscription. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavigationSection />
      <div className="flex items-center justify-center min-h-[calc(100vh-72px)] bg-gray-100">
        <div className="p-8 bg-white shadow-md rounded-lg max-w-md w-full mx-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 [font-family:'Sofia_Pro-Bold',Helvetica]">
            Inscrivez-vous à notre Newsletter
          </h2>
          <p className="text-center mb-6 text-gray-600 [font-family:'Sofia_Pro-Regular',Helvetica]">
            Recevez les dernières nouvelles et offres d'Eurêka directement dans
            votre boîte de réception.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="firstName" className="sr-only font-display-h6">
                Prénom
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Votre prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full border-b border-gray-300 mb-4 placeholder:[font-family:'Sofia_Pro-Regular',Helvetica]"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="sr-only font-display-h6">
                Nom
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Votre nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full border-b border-gray-300 mb-4 placeholder:[font-family:'Sofia_Pro-Regular',Helvetica]"
              />
            </div>
            <div>
              <Label htmlFor="email" className="sr-only font-display-h6">
                Adresse e-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Votre adresse e-mail"
                defaultValue={emailFromQuery || email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-b border-gray-300 placeholder:[font-family:'Sofia_Pro-Regular',Helvetica]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-radial-gold hover:brightness-90 hover:shadow-md transition-all duration-300"
              disabled={isSubmitting}
            >
              <h6 className="text-center font-display-h6 text-gray-700">
                {isSubmitting ? "Envoi en cours..." : "S'inscrire"}
              </h6>
            </Button>
          </form>
        </div>
      </div>
      <FooterSection />
    </>
  );
};
