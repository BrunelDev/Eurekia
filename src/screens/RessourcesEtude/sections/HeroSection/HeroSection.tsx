import * as React from "react";
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  ChevronDownIcon,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "../../../../components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
  return (
    <section className="relative w-full h-[832px] z-[3]">
      <div
        className="absolute w-[564px] h-[760px] top-[72px] right-[60px] bg-cover bg-center"
        style={{ backgroundImage: "url(/resource-1.png)" }}
      />
      <div className="inline-flex items-center gap-2 absolute top-[92px] left-[60px]">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-transparent">
                {" "}
                <h2 className="font-display-h5 text-xl text-[length:var(--display-h5-font-size)] font-[number:var(--display-h5-font-weight)] tracking-[var(--display-h5-letter-spacing)] leading-[var(--display-h5-line-height)] [font-style:var(--display-h5-font-style)] text-[#1e1e1e]">
                  Etudes de cas
                </h2>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="rounded-none">
                <ul className="grid w-[150px] p-4 gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">
                        <div className="font-medium">Blog</div>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#">
                        <div className="font-medium">Etudes de cas</div>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#">
                        <div className="font-medium">Actualités</div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex flex-col w-[564px] items-start gap-8 absolute top-[322px] left-[60px]">
        <h1 className="self-stretch font-display-h3 text-[length:var(--display-h3-font-size)] font-[number:var(--display-h3-font-weight)] tracking-[var(--display-h3-letter-spacing)] leading-[var(--display-h3-line-height)] [font-style:var(--display-h3-font-style)] text-[#1e1e1e]">
          Des projets concrets, des résultats mesurables
        </h1>

        <p className="self-stretch font-text-medium text-[length:var(--text-medium-font-size)] font-[number:var(--text-medium-font-weight)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)] text-[#1e1e1e]">
          Découvrez comment particuliers, professionnels et agents immobiliers
          utilisent les solutions EURÊKA pour gagner du temps, améliorer leurs
          documents et réussir leurs projets.
        </p>
      </div>
    </section>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
