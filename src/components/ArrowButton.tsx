import { Button } from "./ui/button";

export default function ArrowButton({
  handleClick,
  text,
  lucideIcon,
}: {
  handleClick: () => void;
  text: string;
  lucideIcon: React.ReactNode;
}) {
  return (
    <Button
      variant="default"
      className="h-auto w-fit p-0 inline-flex items-center gap-3 group bg-transparent hover:bg-transparent hover:px-2 hover:gap-1 transition-all duration-300"
      onClick={handleClick}
    >
      <span className="group-hover:text-[#cd9f25] transition-all duration-300 font-label-medium font-[number:var(--label-medium-font-weight)] text-[#1e1e1e] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
        {text}
      </span>
      <div className="flex w-9 h-9 items-center justify-center rounded-full bg-radial-gold-circle group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:to-transparent transition-all duration-300">
        {lucideIcon}
      </div>
    </Button>
  );
}
