import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { useLocation } from "react-router-dom";

export const NavigationSection = (): JSX.Element => {
  const location = useLocation();
  // Navigation menu items data
  const navItems = [
    { label: "Accueil", path: "/", active: location.pathname === "/" },
    { label: "A propos", path: "/about", active: location.pathname === "/about" },
    { label: "Nos solutions", path: "/solutions", active: location.pathname === "/solutions" },
    { label: "Tarifs", path: "/pricing", active: location.pathname === "/pricing" },
    { label: "Ressources", path: "/ressources", active: location.pathname === "/ressources" },
    { label: "Contact", path: "/contact", active: location.pathname === "/contact" },
  ];

  return (
    <header className="w-full bg-white py-4 px-[60px] z-[4] relative">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <img
          className="w-[100.51px] h-[30px]"
          alt="Logo"
          src="/logo-black.svg"
        />

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-4">
            {navItems.map((item) => (
              <NavigationMenuItem
                key={item.label}
                className="h-9 flex flex-col items-center justify-center gap-0.5"
              >
                <Link to={item.path} className="flex flex-col items-center">
                  <span
                    className={`font-label-medium text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)] ${
                      item.active
                        ? "text-[#1e1e1e]"
                        : "text-[#1e1e1e] opacity-60"
                    }`}
                  >
                    {item.label}
                  </span>
                  <div
                    className={`w-5 h-0.5 rounded-[1000px] ${
                      item.active ? "bg-[#deb83b]" : ""
                    }`}
                  />
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Sign Up Button */}
        <div className="flex items-center gap-3 h-10">
          <span className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#1e1e1e] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
            S'inscrire
          </span>
          <div className="w-8 h-8 rounded-[1000px] overflow-hidden flex items-center justify-center [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 bg-[url(/arrow-right.svg)] bg-[100%_100%]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
