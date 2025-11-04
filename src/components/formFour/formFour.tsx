import { ClientReviewsSection } from "../formFive/sections/ClientReviewsSection/ClientReviewsSection";
import { useEffect } from "react";
import LeftComponent from "./leftComponent";

export default function FormFour() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <main className="bg-[#f7f7f8] w-full flex flex-col px-4 sm:px-0">
      <div className="bg-[#f7f7f8] w-full flex flex-col relative">
        <div className="flex flex-col-reverse sm:flex-col lg:flex-row lg:pr-24 w-full gap-6 ">
          <div className="w-full lg:w-[55%] animate-fade-in opacity-0 [--animation-delay:200ms] pb-8 sm:pb-0">
            <ClientReviewsSection />
          </div>

          <section className="w-full lg:w-[76%] lg:ml-[1%] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <LeftComponent />
          </section>
        </div>
      </div>
    </main>
  );
}
