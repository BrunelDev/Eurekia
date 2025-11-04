import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivacyPolicy from "./screens/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./screens/TermsOfService/TermsOfService";
import { Pricing } from "./screens/Pricing";
import { Contact } from "./screens/Contact";
import { RessourcesEtudeDe } from "./screens/RessourcesEtude";
import { Accueil } from "./screens/Accueil";
import { NosSolutions } from "./screens/NosSolutions";
import { APropos } from "./screens/APropos";
import { MapPage } from "./screens/Map";
import { Toaster } from "./components/ui/sonner";
import CookiesSettings from "./screens/CookiesSettings/CookiesSettings";
import ConditionsGenerales from "./screens/ConditionsGenerales/ConditionsGenerales";
import { NewsletterRegister } from "./screens/newsletterRegister/Register";
import { DevisChoice } from "./screens/DevisChoice";
import { Formulaire } from "./screens/Formulaire";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms",
    element: <TermsOfService />,
  },
  {
    path: "/ressources",
    element: <RessourcesEtudeDe />,
  },
  {
    path: "/nos-solutions",
    element: <NosSolutions />,
  },
  {
    path: "/a-propos",
    element: <APropos />,
  },
  {
    path: "/contact/carte",
    element: <MapPage />,
  },
  {
    path: "/newsletter",
    element: <NewsletterRegister />,
  },
  {
    path: "/pricing/devis",
    element: <DevisChoice />,
  },
  {
    path: "/cookies-settings",
    element: <CookiesSettings />,
  },
  {
    path: "/conditions-generales",
    element: <ConditionsGenerales />,
  },
  {
    path: "/formulaire",
    element: <Formulaire />,
  },
  {
    path: "/*",
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors />
    </>
  );
};
