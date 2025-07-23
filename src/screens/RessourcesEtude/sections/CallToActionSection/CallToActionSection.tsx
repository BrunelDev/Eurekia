import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="py-20 w-full bg-white z-[1]">
      <Card className="max-w-screen-xl mx-auto border-none">
        <CardContent className="flex flex-col items-center gap-20 p-0">
          <div className="max-w-screen-md w-full flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-6 w-full">
              <h2 className="font-display-h4 font-[number:var(--display-h4-font-weight)] text-[length:var(--display-h4-font-size)] text-center leading-[var(--display-h4-line-height)] text-[#1e1e1e] tracking-[var(--display-h4-letter-spacing)] [font-style:var(--display-h4-font-style)] w-full">
                Et vous, pourquoi pas votre projet ?
              </h2>

              <p className="font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] text-center tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)] w-full">
                Testez nos outils dès aujourd&apos;hui et bénéficiez des mêmes
                résultats.
              </p>
            </div>

            <div className="flex items-center gap-8 w-[366px]">
              <Button className="flex-1 p-3 bg-[#f6f2cb] hover:bg-[#f6f2cb]/90 text-[#483621] font-label-small font-[number:var(--label-small-font-weight)] text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)] rounded-none h-auto">
                Créer un compte gratuit
              </Button>

              <Button
                variant="outline"
                className="flex-1 p-3 border-[#1e1e1e] text-[#1e1e1e] font-label-small font-[number:var(--label-small-font-weight)] text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)] rounded-none h-auto"
              >
                Tester un simulateur
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
