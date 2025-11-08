import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Testimonial, testimonials } from "../../../../lib/testimonials";

export const TestimonialCarousel = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Récupérer le témoignage actuel
  const currentTestimonial: Testimonial = testimonials[currentIndex];

  // Fonction pour aller au témoignage suivant
  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 150);
    }
  };

  // Fonction pour aller au témoignage précédent
  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setTimeout(() => setIsAnimating(false), 150);
    }
  };

  // Fonction pour aller à un témoignage spécifique via les points
  const handleDotClick = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 150);
    }
  };

  const getVisibleDots = () => {
    const totalTestimonials = testimonials.length;
    if (totalTestimonials <= 3) {
      return testimonials.map((_, index) => index);
    }

    let dotsToShow = [];
    if (currentIndex === 0) {
      dotsToShow = [0, 1, 2];
    } else if (currentIndex === totalTestimonials - 1) {
      dotsToShow = [
        totalTestimonials - 3,
        totalTestimonials - 2,
        totalTestimonials - 1,
      ];
    } else {
      dotsToShow = [currentIndex - 1, currentIndex, currentIndex + 1];
    }
    return dotsToShow;
  };

  return (
    <>
      <div className="flex flex-col w-full gap-8">
        {/* Testimonial card avec animation */}
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-0 flex flex-col gap-6">
            {/* Citation avec hauteur fixe et débordement caché */}
            <div
              className={`transition-opacity duration-150 h-[500px] lg:h-[350px] overflow-hidden ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="relative">
                <p className="font-text-large text-[#1e1e1e] text-[length:var(--text-large-font-size)] tracking-[var(--text-large-letter-spacing)] leading-[var(--text-large-line-height)] [font-style:var(--text-large-font-style)] font-normal  font-display-h3">
                  "{currentTestimonial.quote}"
                </p>
              </div>
            </div>

            {/* Auteur et rôle */}
            <div className="flex items-center gap-3 w-full">
              <Avatar className="w-[60px] h-[60px] rounded-none bg-[#cd9f25] flex-shrink-0">
                <AvatarImage
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                />
                <AvatarFallback className="text-white font-bold text-sm">
                  {currentTestimonial.initials}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start justify-center gap-1 h-[48px]">
                <span className="font-label-large text-[#cd9f25] text-[length:var(--label-large-font-size)] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)] [font-style:var(--label-large-font-style)]">
                  {currentTestimonial.name}
                </span>
                <span className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                  {currentTestimonial.title}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation controls - Hauteur fixe pour éviter le chevauchement */}
        <div className="flex items-center justify-between w-full pt-4">
          {/* Pagination dots - Gauche */}
          <div className="flex items-center gap-2 h-[50px]">
            {getVisibleDots().map((index) => (
              <button
                key={`dot-${index}`}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                  index === currentIndex ? "bg-[#cd9f25]" : "bg-[#d1d1d1]"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows - Droite */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={isAnimating}
              className="w-10 h-10 rounded-full border-[1px] border-[#1e1e1e] hover:bg-[#fbf9eb] transition-colors duration-200 flex items-center justify-center flex-shrink-0"
              aria-label="Témoignage précédent"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L6 10L12 16"
                  stroke="#1e1e1e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={isAnimating}
              className="w-10 h-10 rounded-full border-[1px] border-[#1e1e1e] hover:bg-[#fbf9eb] transition-colors duration-200 flex items-center justify-center flex-shrink-0"
              aria-label="Témoignage suivant"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4L14 10L8 16"
                  stroke="#1e1e1e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Modal pour afficher le texte complet */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl max-h-[80vh] overflow-y-auto shadow-lg">
            {/* Titre */}
            <h3 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Avis complet
            </h3>

            {/* Citation complète */}
            <p className="font-text-large text-[#1e1e1e] text-[length:var(--text-large-font-size)] tracking-[var(--text-large-letter-spacing)] leading-[var(--text-large-line-height)] [font-family:'Sofia_Pro'] font-light mb-6">
              "{currentTestimonial.quote}"
            </p>

            {/* Auteur */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#d1d1d1]">
              <Avatar className="w-[60px] h-[60px] rounded-none bg-[#cd9f25]">
                <AvatarImage
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                />
                <AvatarFallback className="text-white font-bold text-sm">
                  {currentTestimonial.initials}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start justify-center gap-1">
                <span className="font-label-large text-[#cd9f25] text-[length:var(--label-large-font-size)] tracking-[var(--label-large-letter-spacing)] leading-[var(--label-large-line-height)]">
                  {currentTestimonial.name}
                </span>
                <span className="font-text-medium text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)]">
                  {currentTestimonial.title}
                </span>
              </div>
            </div>

            {/* Bouton Fermer */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-[#cd9f25] text-white py-2 rounded-lg font-semibold hover:bg-[#b8891f] transition-colors duration-200"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
};
