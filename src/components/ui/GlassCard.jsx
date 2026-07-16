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
  sm: "p-5 md:p-6",
  md: "p-6 md:p-7",
  lg: "p-7 md:p-9",
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
        "bg-surface/60 backdrop-blur-xl border border-surface-border/40",
        variant === "hover" &&
          "transition-all duration-400 ease-out hover:border-primary/25 hover:bg-surface/80 hover:shadow-[0_8px_32px_rgba(59,130,246,0.06)] hover:-translate-y-1.5",
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
