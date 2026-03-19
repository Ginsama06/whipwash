import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { cn } from "./ui/utils";
import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

interface LinkButtonProps extends VariantProps<typeof buttonVariants> {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function LinkButton({
  to,
  children,
  variant,
  size,
  className,
  onClick,
}: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}