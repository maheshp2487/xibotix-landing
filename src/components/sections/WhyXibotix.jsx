"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Microscope, HeartPulse } from "lucide-react";
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

const reasons = [
  {
    icon: Sparkles,
    title: "AI-Driven Innovation",
    description: "Cognitive architectures that learn, adapt, and operate autonomously.",
  },
  {
    icon: Users,
    title: "Human-Centered Engineering",
    description: "Every component precision-engineered to augment human capabilities.",
  },
  {
    icon: Microscope,
    title: "Research & Development",
    description: "Bridging theoretical robotics and commercial viability through rapid prototyping.",
  },
  {
    icon: HeartPulse,
    title: "Real-World Impact",
    description: "Restoring mobility and elevating service through intelligent technology.",
  },
];

export default function WhyXibotix() {
  return (
    <section
      id="why-xibotix"
      className="relative w-full bg-background section-spacing section-divider"
      aria-label="Why XIBOTIX"
    >
      <Container>
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-6 lg:mb-8 w-full"
        >
          <span className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary border border-white/10 px-4 py-1.5 rounded-full mb-5">
            The XIBOTIX Advantage
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-medium tracking-tight text-white">
            Engineering the impossible.
          </h2>
        </motion.div>

        {/* 2×2 Compact Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 w-full">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                custom={i * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group relative flex gap-4 p-5 sm:p-6 rounded-2xl bg-surface/30 border border-white/5 hover:bg-surface/50 hover:border-white/10 transition-all duration-500 hover-glow"
              >
                {/* Step Number */}
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <span className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-white/10 group-hover:text-primary/30 transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 group-hover:border-accent/30 transition-all duration-500">
                    <Icon className="w-3.5 h-3.5 text-text-secondary group-hover:text-accent transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-heading font-medium text-white tracking-tight mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-text-secondary font-body">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
