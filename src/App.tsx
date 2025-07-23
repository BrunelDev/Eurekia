import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Pricing } from "./screens/Pricing";
import { Contact } from "./screens/Contact";
import { RessourcesEtudeDe } from "./screens/RessourcesEtude";
import { Accueil } from "./screens/Accueil";
import { NosSolutions } from "./screens/NosSolutions";
import { APropos } from "./screens/APropos";

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
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
