"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, ChevronDown, X } from "lucide-react";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const products = [
  {
    id: "humanoid",
    title: "Humanoid Robotics",
    subtitle: "Project Manu & Cognitive Systems",
    brief: "Advanced humanoid systems with human-like expressiveness and autonomous perception.",
    description: "Designed to seamlessly integrate into service, healthcare, and research roles through real-time cognitive processing and adaptive learning.",
    image: "/product-humanoid.png",
    accent: "primary",
    capabilities: [
      "Real-time facial expression tracking",
      "Natural language interaction",
      "Autonomous spatial navigation",
      "Adaptive learning architecture",
    ],
  },
  {
    id: "rehab",
    title: "Rehabilitation Devices",
    subtitle: "Robotic Exoskeletons & Assistive Tech",
    brief: "Precision-engineered medical devices that accelerate recovery and restore mobility.",
    description: "Utilizing sensor-driven feedback and controlled mechanics for personalized rehabilitation with real-time telemetry.",
    image: "/product-rehab.png",
    accent: "accent",
    capabilities: [
      "High-precision biomechanical sensors",
      "Adaptive resistance & assistance modes",
      "Real-time rehabilitation telemetry",
      "Ergonomic, lightweight exoskeleton frame",
    ],
  },
];

export default function Products() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="products"
      className="relative w-full bg-background section-spacing section-divider"
      aria-label="Products & Domains"
    >
      <Container>

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-8 lg:mb-10 w-full"
        >
          <span className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary border border-white/10 px-4 py-1.5 rounded-full mb-5">
            Core Domains
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-medium tracking-tight text-white mb-4">
            Two divisions.
            <br />
            <span className="text-text-secondary">One shared vision.</span>
          </h2>
        </motion.div>

        {/* Product Cards Grid — Inline Expand */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              custom={i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <ProductCard
                product={product}
                isExpanded={expandedId === product.id}
                onToggle={() => toggleExpand(product.id)}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   ProductCard — Inline Expand/Collapse
   ============================================================ */
function ProductCard({ product, isExpanded, onToggle }) {
  const isPrimary = product.accent === "primary";

  return (
    <div
      className={cn(
        "group relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover-glow",
        isExpanded
          ? "bg-surface/50 border-white/10"
          : "bg-surface/30 border-white/5 hover:bg-surface/40 hover:border-white/10"
      )}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(); } }}
      aria-expanded={isExpanded}
      aria-label={`${product.title} — click to ${isExpanded ? "collapse" : "expand"} details`}
    >
      {/* Image strip */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-black/50 shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
      </div>

      {/* Summary — always visible */}
      <div className="px-6 py-3 sm:px-8 sm:py-4">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <div
              className={cn(
                "text-[11px] font-medium tracking-[0.15em] uppercase mb-3.5",
                isPrimary ? "text-primary" : "text-accent"
              )}
            >
              {product.subtitle}
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-medium text-white tracking-tight">
              {product.title}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="shrink-0 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
          >
            <ChevronDown className={cn(
              "w-4 h-4 transition-colors duration-300",
              isExpanded ? "text-primary" : "text-text-muted"
            )} />
          </motion.div>
        </div>
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-text-secondary font-body">
          {product.brief}
        </p>

        {/* Expandable detail */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-white/10">
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-white/80 font-body mb-5">
                  {product.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {product.capabilities.map((cap, ci) => (
                    <li key={ci} className="flex items-start gap-3">
                      <div
                        className={cn(
                          "flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5",
                          isPrimary ? "bg-primary/10" : "bg-accent/10"
                        )}
                      >
                        <Check
                          className={cn(
                            "w-3 h-3 stroke-[3]",
                            isPrimary ? "text-primary" : "text-accent"
                          )}
                        />
                      </div>
                      <span className="text-[14px] text-white/90 font-body leading-snug">
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
