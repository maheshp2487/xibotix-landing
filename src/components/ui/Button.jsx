"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Button — Reusable button primitive with variant support.
 *
 * Variants:
 *   - primary:  Solid blue fill
 *   - secondary: Outlined with border
 *   - ghost:    Transparent background, subtle hover
 *   - accent:   Solid cyan fill
 *
 * Sizes:
 *   - sm, md, lg
 */
const variantStyles = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-primary/40",
  secondary:
    "bg-transparent border border-surface-border text-text hover:border-primary hover:text-primary",
  ghost:
    "bg-transparent text-text-secondary hover:text-text hover:bg-surface-light",
  accent:
    "bg-accent text-background hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/40",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    className,
    disabled = false,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-body font-medium",
        "transition-all duration-300 ease-out",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
        "cursor-pointer select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
