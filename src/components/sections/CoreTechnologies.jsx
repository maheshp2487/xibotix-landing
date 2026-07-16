"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Eye, Network, Activity, Cpu, Radio, ChevronDown } from "lucide-react";
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

const technologies = [
  {
    id: "ai",
    icon: Brain,
    name: "Artificial Intelligence",
    brief: "Autonomous decision-making and natural interaction.",
    detail: "Cognitive models enabling robots to perceive, reason, and act with human-like adaptability.",
  },
  {
    id: "cv",
    icon: Eye,
    name: "Computer Vision",
    brief: "Spatial mapping and environmental perception.",
    detail: "Real-time object recognition, depth sensing, and scene understanding for navigation and manipulation.",
  },
  {
    id: "ml",
    icon: Network,
    name: "Machine Learning",
    brief: "Adaptive algorithms that improve over time.",
    detail: "Continuous learning from interaction data to refine responses, predict needs, and optimize behavior.",
  },
  {
    id: "robotics",
    icon: Activity,
    name: "Robotics & Motion",
    brief: "Fluid, precise mechanical actuation.",
    detail: "Expressive humanoid movement and precision rehabilitation — from facial micro-expressions to exoskeleton control.",
  },
  {
    id: "embedded",
    icon: Cpu,
    name: "Embedded Systems",
    brief: "Low-latency edge processing.",
    detail: "Rapid sensor fusion and control loop execution at the device level without cloud dependency.",
  },
  {
    id: "sensor",
    icon: Radio,
    name: "Sensor Fusion",
    brief: "Multisensory data integration.",
    detail: "Combining LiDAR, IMU, force/torque sensors, and cameras for seamless autonomous operation.",
  },
];

export default function CoreTechnologies() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="core-technologies"
      className="relative w-full bg-background section-spacing section-divider"
      aria-label="Core Technologies"
    >
      <Container>
        {/* Centered Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-8 lg:mb-10 w-full"
        >
          <span className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary border border-white/10 px-4 py-1.5 rounded-full mb-5">
            Foundation
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] font-medium tracking-tight text-white mb-4">
            Intelligent by design.
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-relaxed text-text-secondary font-body max-w-2xl mx-auto">
            The technologies powering our humanoid systems and rehabilitation devices.
          </p>
        </motion.div>

        {/* 3×2 Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-4 lg:gap-y-5 w-full">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            const isExpanded = expandedId === tech.id;
            return (
              <motion.div
                key={tech.id}
                custom={i * 0.06}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className={cn(
                  "group relative flex flex-col p-5 sm:p-6 rounded-2xl border cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden hover-glow",
                  isExpanded
                    ? "bg-surface/60 border-primary/20 shadow-[0_8px_32px_rgba(59,130,246,0.06)]"
                    : "bg-surface/30 border-white/5 hover:bg-surface/50 hover:border-white/10 hover:-translate-y-1"
                )}
                onClick={() => toggleExpand(tech.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleExpand(tech.id); }}}
                aria-expanded={isExpanded}
              >
                {/* Header row: icon + name + chevron */}
                <div className="relative flex items-center gap-3 z-10">
                  <motion.div
                    animate={{
                      rotate: isExpanded ? [0, -10, 0] : 0,
                      scale: isExpanded ? [1, 1.1, 1] : 1
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={cn(
                      "flex items-center justify-center w-9 h-9 rounded-xl border shrink-0 transition-all duration-500",
                      isExpanded
                        ? "bg-primary/10 border-primary/30"
                        : "bg-white/[0.03] border-white/10 group-hover:border-primary/30 group-hover:bg-primary/5"
                    )}
                  >
                    <Icon className={cn(
                      "w-4 h-4 transition-colors duration-500",
                      isExpanded ? "text-primary" : "text-text-secondary group-hover:text-primary"
                    )} />
                  </motion.div>
                  <h3 className="text-[15px] sm:text-base font-heading font-medium text-white tracking-tight flex-1 group-hover:translate-x-0.5 transition-transform duration-300">
                    {tech.name}
                  </h3>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="shrink-0"
                  >
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-colors duration-300",
                      isExpanded ? "text-primary" : "text-text-muted group-hover:text-white"
                    )} />
                  </motion.div>
                </div>

                {/* Brief (always visible) */}
                <p 
                  style={{ paddingLeft: "4px" }}
                  className="relative text-[13px] leading-relaxed text-text-secondary font-body mt-3 z-10"
                >
                  {tech.brief}
                </p>

                {/* Expandable detail */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, y: -10 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden relative z-10 px-4 -mx-4"
                    >
                      <p 
                        style={{ paddingLeft: "4px" }}
                        className="text-[13px] leading-relaxed text-white/80 font-body mt-3 pt-3 pb-4 border-t border-white/10"
                      >
                        {tech.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
