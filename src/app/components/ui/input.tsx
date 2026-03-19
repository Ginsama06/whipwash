import * as React from "react";
import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-teal-300 focus:border-teal-500 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };