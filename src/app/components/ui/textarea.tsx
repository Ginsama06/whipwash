import * as React from "react";
import { cn } from "./utils";

function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-teal-300 focus:border-teal-500 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };