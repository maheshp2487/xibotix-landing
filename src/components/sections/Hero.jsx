"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui";

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: custom,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[75vh] flex items-center justify-center bg-background overflow-hidden"
      aria-label="Hero"
    >
      {/* ---- Background: Hero Product Image for depth ---- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-full h-full max-w-4xl opacity-[0.12] scale-110">
          <Image
            src="/hero-robot.png"
            alt=""
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        {/* Fade overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center w-full">

          <motion.div
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="mb-6 sm:mb-8"
          >
            <span className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              The Next Evolution
            </span>
          </motion.div>

          <motion.h1
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="font-heading text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-white max-w-4xl"
          >
            Uniting Humans
            <br />
            <span className="text-text-secondary">And Machines.</span>
          </motion.h1>

          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="text-[16px] sm:text-[18px] text-text-secondary font-body leading-relaxed max-w-2xl mt-6 sm:mt-8 mx-auto"
          >
            Pioneering expressive humanoid robotics and precision rehabilitation devices that redefine human potential.
          </motion.p>

          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-12"
          >
            <button
              onClick={() => {
                const el = document.getElementById("about");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
              }}
              aria-label="Discover XIBOTIX"
              className="group flex items-center justify-center gap-3 w-full sm:w-auto min-w-[220px] px-12 py-5 rounded-full text-[16px] font-medium font-body text-background bg-white hover:bg-accent hover:scale-[1.03] whitespace-nowrap cursor-pointer transition-all duration-300"
            >
              Discover XIBOTIX
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("products");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
              }}
              aria-label="View Products"
              className="w-full sm:w-auto min-w-[220px] px-12 py-5 rounded-full text-[16px] font-medium font-body text-white bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-accent/20 hover:text-accent hover:scale-[1.03] whitespace-nowrap cursor-pointer transition-all duration-300"
            >
              View Products
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
