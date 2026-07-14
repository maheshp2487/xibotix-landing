"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * AnimateOnScroll — Wrapper that triggers Framer Motion animations
 * when the element enters the viewport.
 *
 * Props:
 *   - variants:  Framer Motion variants object ({ hidden, visible })
 *   - custom:    Custom value passed to variant function (e.g. delay)
 *   - once:      Animate only once (default: true)
 *   - threshold: IntersectionObserver amount (default: 0.2)
 *   - as:        HTML element tag (default: "div")
 *   - children, className, ...rest
 */
export default function AnimateOnScroll({
  children,
  variants,
  custom = 0,
  once = true,
  threshold = 0.2,
  as = "div",
  className,
  ...props
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  });

  const MotionComponent = motion.create(as);

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={custom}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
