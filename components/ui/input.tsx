import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-2xl border border-input bg-transparent px-2.5 py-1 text-base outline-none",
        "transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out",
        "active:scale-[0.995]",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        "placeholder:text-muted-foreground",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        "motion-reduce:transition-none motion-reduce:transform-none",
        "md:text-sm",
        "dark:bg-input/30 dark:disabled:bg-input/80",
        "dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",

        type === "number" &&
          "[appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none",

        className,
      )}
      {...props}
    />
  );
}

export { Input };
