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
        "mb-12 sm:mb-14 md:mb-16",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {tag && (
        <span className="inline-block mb-4 sm:mb-5 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-[0.15em] uppercase bg-primary-light text-primary border border-primary/20 font-body">
          {tag}
        </span>
      )}

      <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.02em] leading-tight text-text">
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 sm:mt-5 text-text-secondary text-[15px] sm:text-base md:text-lg leading-relaxed font-body",
            align === "center" && "max-w-xl sm:max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
