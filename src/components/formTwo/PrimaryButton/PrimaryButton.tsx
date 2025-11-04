import { Loader2 } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../lib/utils";
import { Button } from "../../ui/button";

export const PrimaryButton = ({
  className,
  handleClick,
  disabled,
  isLoading = false,
}: {
  className?: string;
  handleClick?: () => void | Promise<void>;
  disabled?: boolean;
  isLoading?: boolean;
}) => {
  const [animationClass, setAnimationClass] = useState("");

  const handleMouseEnter = () => {
    setAnimationClass("animate-hover-bounce");
  };

  const handleMouseLeave = () => {
    setAnimationClass("animate-hover-bounce-reverse");
  };

  return (
    <Button
      className={cn(
        "px-3 sm:px-4 py-2 sm:py-2.5 h-9 sm:h-10 [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)] text-[#1e1e1e] font-label-small rounded-lg",
        className
      )}
      onClick={async () => {
        if (handleClick) {
          if (handleClick.constructor.name === "AsyncFunction") {
            await handleClick();
          } else handleClick();
        }
      }}
      disabled={disabled || isLoading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn("flex items-center gap-2 text-sm", animationClass)}>
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        Continuer
      </div>
    </Button>
  );
};
