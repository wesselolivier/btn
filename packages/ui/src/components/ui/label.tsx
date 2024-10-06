import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@repo/ui/lib/utils"

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  disabled?: boolean;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, disabled, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn("label", disabled && "label-disabled", className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
