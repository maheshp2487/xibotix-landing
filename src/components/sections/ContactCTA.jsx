"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui";

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative w-full bg-background section-spacing section-divider"
      aria-label="Contact Call to Action"
    >
      <Container className="flex flex-col items-center w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          className="relative w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden bg-surface/30 border border-white/5 py-12 sm:py-16 px-6 sm:px-12 lg:px-20 text-center"
        >
          {/* Ambient Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-32 bg-primary/15 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-24 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-block text-[12px] sm:text-[13px] font-medium tracking-[0.2em] uppercase text-text-secondary border border-white/10 px-5 py-2 rounded-full mb-8 bg-background/50 backdrop-blur-md">
              Get in Touch
            </span>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.15] font-medium tracking-tight text-white mb-6 sm:mb-8">
              Ready to redefine
              <br />
              <span className="text-text-secondary">the future with us?</span>
            </h2>

            <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed text-text-secondary font-body max-w-2xl mx-auto mb-10 sm:mb-12">
              Collaborate on intelligent robotics or explore our clinical devices.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <a
                href="mailto:connect@xibotix.com"
                aria-label="Send email to XIBOTIX"
                className="group flex items-center justify-center gap-2.5 w-full sm:w-[240px] px-8 py-3.5 rounded-full text-[14px] font-medium font-body text-background bg-white hover:bg-accent hover:scale-[1.03] whitespace-nowrap cursor-pointer transition-all duration-300 shadow-lg shadow-white/10"
              >
                <Mail className="w-4 h-4 shrink-0" />
                Contact XIBOTIX
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById("products");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
                }}
                aria-label="Explore Products"
                className="group flex items-center justify-center gap-2.5 w-full sm:w-[240px] px-8 py-3.5 rounded-full text-[14px] font-medium font-body text-white/70 bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-accent/10 hover:text-accent hover:scale-[1.03] whitespace-nowrap cursor-pointer transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
