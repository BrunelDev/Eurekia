import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { useLocation } from "react-router-dom";

export const NavigationSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  // Navigation menu items data
  const navItems = [
    { label: "Accueil", path: "/", active: location.pathname === "/" },
    {
      label: "À propos",
      path: "/a-propos",
      active: location.pathname === "/a-propos",
    },
    {
      label: "Nos solutions",
      path: "/nos-solutions",
      active: location.pathname === "/nos-solutions",
    },
    {
      label: "Tarifs",
      path: "/pricing",
      active: location.pathname === "/pricing",
    },
    {
      label: "Ressources",
      path: "/ressources",
      active: location.pathname === "/ressources",
    },
    {
      label: "Contact",
      path: "/contact",
      active: location.pathname === "/contact",
    },
  ];

  return (
    <header
      className="w-full bg-white py-4 px-4 sm:px-8 md:px-[60px] relative"
      style={{ zIndex: 9999 }}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link to="/">
          <img
            className="w-[100.51px] h-[30px]"
            alt="Logo"
            src="/logo-black.svg"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-4">
            {navItems.map((item) => (
              <NavigationMenuItem
                key={item.label}
                className="h-9 flex flex-col items-center justify-center gap-0.5"
              >
                <Link
                  to={item.path}
                  className="relative group flex flex-col items-center"
                >
                  <span
                    className={`font-label-medium text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]  transition-all duration-300 ease-out ${
                      item.active
                        ? "text-[#1e1e1e]"
                        : "text-[#1e1e1e] opacity-60 hover:text-[#deb83b]"
                    }`}
                  >
                    {item.label}
                  </span>
                  <div
                    className={`absolute -bottom-3 left-1/2 -translate-x-1/2 h-0.5 bg-[#deb83b] transition-all duration-300 ease-out ${
                      item.active ? "w-[30px] mx-auto" : "w-0"
                    }`}
                  />
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Sign Up Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Sign Up Button */}
          <div className="hidden md:flex items-center gap-3 h-10 cursor-pointer">
            <span className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#1e1e1e] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
              S'inscrire
            </span>
            <div className="w-8 h-8 rounded-[1000px] overflow-hidden flex items-center justify-center [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 bg-[url(/arrow-right.svg)] bg-[100%_100%]" />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50">
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <div className="border rounded-md p-2">
                  <Menu size={24} />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <NavigationMenu className="md:hidden absolute top-0 left-0 right-0 w-full max-w-full h-screen bg-white z-10 flex flex-col gap-y-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 absolute top-4 right-4"
          >
            <X size={24} />
          </button>
          <NavigationMenuList className="flex flex-col items-center gap-4 py-4 w-full">
            {navItems.map((item) => (
              <NavigationMenuItem
                key={item.label}
                className={`h-9 flex flex-col items-center justify-center gap-0.5`}
              >
                <Link
                  to={item.path}
                  className="relative group flex flex-col items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
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
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-[#deb83b] transition-all duration-300 ease-out ${
                      item.active ? "w-1/2" : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          {/* Sign Up Button for Mobile */}
          <div className="flex items-center justify-center gap-3 h-10 py-4 cursor-pointer">
            <span className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#1e1e1e] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
              S'inscrire
            </span>
            <div className="w-8 h-8 rounded-[1000px] overflow-hidden flex items-center justify-center [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 bg-[url(/arrow-right.svg)] bg-[100%_100%]" />
              </div>
            </div>
          </div>
        </NavigationMenu>
      )}
    </header>
  );
};
