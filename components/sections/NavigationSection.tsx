import React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

export const NavigationSection = () => {
  // Navigation items data
  const navItems = [
    { name: "Accueil", active: true },
    { name: "A propos", active: false },
    { name: "Nos solutions", active: false },
    { name: "Tarifs", active: false },
    { name: "Ressources", active: false },
    { name: "Contact", active: false },
  ];

  return (
    <header className="w-full py-4 px-[60px]">
      <div className="flex items-center justify-between w-full">
        <img className="w-[100.51px] h-[30px]" alt="Logo" src="/logo.svg" />

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-4">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <div className="inline-flex flex-col h-9 items-center justify-center gap-0.5">
                    <div
                      className={`${item.active ? "" : "opacity-60"} text-[#1e1e1e] w-fit [font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap`}
                    >
                      {item.name}
                    </div>
                    <div
                      className={`w-5 h-0.5 rounded-[1000px] ${item.active ? "bg-[#deb83b]" : ""}`}
                    />
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3 h-10">
          <span className="[font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-6 whitespace-nowrap">
            S&apos;inscrire
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 bg-[#f7e1aa] rounded-full p-0 flex items-center justify-center"
          >
            <div className="w-5 h-5 bg-[url(/arrow-right.svg)] bg-[100%_100%]" />
          </Button>
        </div>
      </div>
    </header>
  );
};
