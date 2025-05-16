
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  ChartContainerProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full overflow-hidden rounded-md border bg-background p-6",
      className
    )}
    {...props}
  />
))
ChartContainer.displayName = "ChartContainer"
