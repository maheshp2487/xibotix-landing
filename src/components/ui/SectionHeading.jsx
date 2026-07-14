"use client";

import { cn } from "@/lib/utils";

/**
 * SectionHeading — Consistent section title block.
 *
 * Props:
 *   - tag:       Small eyebrow label above the heading
 *   - title:     Main heading (can contain JSX for gradient spans)
 *   - subtitle:  Description paragraph below the heading
 *   - align:     "center" | "left" (default: "center")
 *   - className: Additional wrapper classes
 */
export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  className,
}) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {tag && (
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-primary-light text-primary border border-primary/20 font-body">
          {tag}
        </span>
      )}

      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-text">
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-5 text-text-secondary text-base md:text-lg leading-relaxed font-body",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
