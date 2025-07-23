import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Pricing } from "./screens/Pricing";
import { Contact } from "./screens/Contact";
import { RessourcesEtudeDe } from "./screens/RessourcesEtude";
import { Accueil } from "./screens/Accueil";

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
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
