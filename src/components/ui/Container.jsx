"use client";

import { cn } from "@/lib/utils";

/**
 * Container — Responsive max-width wrapper.
 *
 * Props:
 *   - size:  "sm" | "md" | "lg" | "xl" | "full" (default: "lg")
 *   - as:    HTML element tag (default: "div")
 *   - children, className, ...rest
 */
const maxWidthStyles = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[90rem]",
  full: "max-w-full",
};

export default function Container({
  children,
  size = "lg",
  as: Tag = "div",
  className,
  ...props
}) {
  return (
    <Tag
      className={cn("mx-auto w-full section-padding", maxWidthStyles[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
