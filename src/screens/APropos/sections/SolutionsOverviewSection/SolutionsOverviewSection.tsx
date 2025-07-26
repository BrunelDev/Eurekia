import { Card, CardContent } from "../../../../components/ui/card";

export const SolutionsOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16">
      <div className="relative bg-[url(/apropos-hero.jpg)] bg-center bg-cover w-full h-[832px] flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-[832px] bg-[#00000066]" />
        <h6 className="text-center text-[48px] text-white z-50 w-[60%]">
          EURÊKA INGENIERIE — Là où l’expertise rencontre l’intelligence
          artificielle
        </h6>
      </div>

      <div className="relative mx-auto bg-[url(hero-bg.png)] bg-center bg-cover bg-no-repeat">
        <div className="relative flex justify-center">
          {/*if w > h, h = w, else w = h*/}
         
            <Card className="relative max-w-4xl mx-auto bg-[100%_100%] border-none shadow-none">
              <CardContent className="flex justify-center items-center min-h-[832px]">
                <div className="flex flex-col items-center max-w-[564px] gap-8 text-center">
                  <h2 className="font-display-h4 text-[#1e1e1e] text-[length:var(--display-h4-font-size)] tracking-[var(--display-h4-letter-spacing)] leading-[var(--display-h4-line-height)] [font-style:var(--display-h4-font-style)]">
                    Notre mission : simplifier la complexité technique du
                    bâtiment
                  </h2>

                  <p className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                    Chez EURÊKA INGENIERIE, nous croyons que la réussite
                    d&apos;un projet dépend d&apos;une information claire,
                    d&apos;un cadre réglementaire maîtrisé et d&apos;outils
                    intelligents accessibles à tous.
                    <br />
                    <br />
                    Notre mission est d&#39;accompagner les particuliers,
                    professionnels et agents immobiliers dans leurs démarches
                    techniques, administratives et documentaires, grâce à une
                    alliance unique entre ingénierie humaine et intelligence
                    artificielle.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
      </div>
    </section>
  );
};
