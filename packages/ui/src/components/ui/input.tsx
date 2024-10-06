import * as React from "react";
import { cn } from "@repo/ui/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn("custom-input", className)} // Use custom CSS class
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
