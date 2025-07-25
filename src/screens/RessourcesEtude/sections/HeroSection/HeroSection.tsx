import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  NavigationMenuLink 
} from "../../../../components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-20 z-[3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[60px] flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col items-start gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-transparent p-0">
                  <h2 className="font-display-h5 text-xl text-[length:var(--display-h5-font-size)] font-[number:var(--display-h5-font-weight)] tracking-[var(--display-h5-letter-spacing)] leading-[var(--display-h5-line-height)] [font-style:var(--display-h5-font-style)] text-[#1e1e1e]">
                    Etudes de cas
                  </h2>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-none">
                  <ul className="grid w-[150px] p-4 gap-4">
                    <li><NavigationMenuLink asChild><a href="#"><div className="font-medium">Blog</div></a></NavigationMenuLink></li>
                    <li><NavigationMenuLink asChild><a href="#"><div className="font-medium">Etudes de cas</div></a></NavigationMenuLink></li>
                    <li><NavigationMenuLink asChild><a href="#"><div className="font-medium">Actualités</div></a></NavigationMenuLink></li>
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
              Découvrez comment particuliers, professionnels et agents immobiliers utilisent les solutions EURÊKA pour gagner du temps, améliorer leurs documents et réussir leurs projets.
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 w-full">
          <div 
            className="w-full h-80 sm:h-96 md:h-[600px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url(/resource-1.png)" }}
          />
        </div>

      </div>
    </section>
  );
};
