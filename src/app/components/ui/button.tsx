import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-teal-300 shadow-sm hover:shadow-md active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border-2 border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
        secondary:
          "bg-white text-teal-700 hover:bg-gray-50 border-2 border-teal-100",
        ghost: "hover:bg-gray-100 shadow-none",
        link: "text-teal-700 underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg gap-1.5 px-4",
        lg: "h-14 rounded-xl px-8 text-base",
        icon: "size-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };