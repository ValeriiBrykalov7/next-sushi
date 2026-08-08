"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer size-4 shrink-0 rounded-sm border border-primary/30 bg-gray-100 text-primary-foreground ring-offset-background",
      "transition-[background-color,border-color,color,transform] duration-200 ease-out",
      "active:scale-90",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
      "motion-reduce:transition-none",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      forceMount
      className={cn(
        "flex items-center justify-center text-current",
        "transition-[opacity,transform] duration-200 ease-out",
        "data-[state=unchecked]:scale-50 data-[state=unchecked]:-rotate-12 data-[state=unchecked]:opacity-0",
        "data-[state=checked]:scale-100 data-[state=checked]:rotate-0 data-[state=checked]:opacity-100",
        "motion-reduce:transition-none",
      )}
    >
      <Check className="h-4 w-4" strokeWidth={3} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
