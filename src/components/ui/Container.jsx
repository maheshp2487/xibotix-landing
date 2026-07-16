"use client";

import { cn } from "@/lib/utils";

/**
 * Container — Single centered max-width wrapper (1360px).
 *
 * Every section uses this same container to ensure
 * perfect horizontal alignment across the entire page.
 *
 * Props:
 *   - as:    HTML element tag (default: "div")
 *   - children, className, ...rest
 */
export default function Container({
  children,
  as: Tag = "div",
  className,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
