import { cn } from "@/lib/utils";
import { ReactNode, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = false, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-glass p-6",
        hover && "glass-hover cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;