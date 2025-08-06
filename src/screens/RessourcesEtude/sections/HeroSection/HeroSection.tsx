import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "../../../../components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-20 z-[3]">
      <div className="w-full mx-auto px-4 sm:px-8 md:px-[60px] flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8 relative">
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col justify-center gap-8 h-80 sm:h-96 md:h-[600px] relative">
          <NavigationMenu className="self-place-start rounded-none shadow-none md:absolute md:top-0 md:left-0">
            <NavigationMenuList className="rounded-none shadow-none">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-transparent p-0">
                  <h2 className="font-display-h5 text-xl text-[length:var(--display-h5-font-size)] font-[number:var(--display-h5-font-weight)] tracking-[var(--display-h5-letter-spacing)] leading-[var(--display-h5-line-height)] [font-style:var(--display-h5-font-style)] text-[#1e1e1e]">
                    Études de cas
                  </h2>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-none shadow-none">
                  <ul className="grid w-[150px] p-4 gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="https://blog.eurekaingenierie.com/">
                          <div className="font-medium hover:text-[#deb83b] transition-all duration-300 ease-out">
                            Blog
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#">
                          <div className="font-medium hover:text-[#deb83b] transition-all duration-300 ease-out">
                            Études de cas
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="https://blog.eurekaingenierie.com/">
                          <div className="font-medium hover:text-[#deb83b] transition-all duration-300 ease-out">
                            Glossaire
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex flex-col items-start gap-6">
            <h1 className="self-stretch font-display-h3 text-[length:var(--display-h3-font-size)] font-[number:var(--display-h3-font-weight)] tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)] [font-style:var(--display-h3-font-style)] text-[#1e1e1e]">
              Des projets concrets, des résultats mesurables
            </h1>
            <p className="self-stretch font-text-medium text-[length:var(--text-medium-font-size)] font-[number:var(--text-medium-font-weight)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)] text-[#1e1e1e]">
              Découvrez comment particuliers, professionnels et agents
              immobiliers utilisent les solutions EURÊKA pour gagner du temps,
              améliorer leurs documents et réussir leurs projets.
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 w-full">
          <div
            className="w-full h-80 sm:h-96 md:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: "url(/resource-1.png)" }}
          />
        </div>
      </div>
    </section>
  );
};
