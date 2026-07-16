"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui";

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


export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-background section-spacing section-divider scroll-mt-24"
      aria-label="About XIBOTIX"
    >
      <Container className="flex flex-col items-center text-center w-full">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium tracking-tight text-white mb-6 sm:mb-8">
            Engineering intelligence
            for the real world.
          </h2>

          <p className="text-[16px] sm:text-[18px] leading-relaxed text-text-secondary font-body mx-auto w-full">
            Intelligent robotics and precision medical devices that serve, heal, and empower.
          </p>
        </motion.div>

        {/* Image — robotics lab, compact */}
        <motion.div
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden border border-white/5 bg-surface/30 mt-10 sm:mt-12 max-h-[480px]"
        >
          <Image
            src="/about-robotics-lab.png"
            alt="XIBOTIX Advanced Robotics Research Laboratory"
            fill
            className="object-cover object-center opacity-80"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
          {/* Subtle inner shadow overlay to blend image into the dark container */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>

      </Container>
    </section>
  );
}
