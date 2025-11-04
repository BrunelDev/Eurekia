import { useState } from "react";
import { cn } from "../../../lib/utils";
import { Button } from "../../ui/button";

export default function BackButton({
  handleClick,
  disabled,
  className,
}: {
  handleClick?: () => void;
  disabled?: boolean;
  className?: string;
}) {
  const [animationClass, setAnimationClass] = useState("");

  const handleMouseEnter = () => {
    setAnimationClass("animate-hover-bounce");
  };

  const handleMouseLeave = () => {
    setAnimationClass("animate-hover-bounce-reverse");
  };
  console.log(disabled);
  return (
    <Button
      variant="outline"
      className={cn(
        "h-9 sm:h-10 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#f7f7f8] font-label-medium font-[number:var(--label-medium-font-weight)] text-xs sm:text-sm tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)] whitespace-nowrap [--animation-delay:0ms] text-[#6D7074] border border-[#B8B9C1] shadow-none cursor-pointer rounded-lg",
        className
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={animationClass + " text-[#6D7074]"}>Retour</div>
    </Button>
  );
}
