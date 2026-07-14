"use client";

import { cn } from "@/lib/utils";

/**
 * GlassCard — Glassmorphism card primitive.
 *
 * Props:
 *   - variant: "default" | "hover" | "outlined"
 *   - padding: "sm" | "md" | "lg" (default: "md")
 *   - children, className, ...rest
 */
const paddingStyles = {
  sm: "p-4 md:p-5",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10",
};

export default function GlassCard({
  children,
  variant = "default",
  padding = "md",
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "bg-surface/60 backdrop-blur-xl border border-surface-border/50",
        variant === "hover" &&
          "transition-all duration-400 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
        variant === "outlined" &&
          "border-surface-border bg-transparent",
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
