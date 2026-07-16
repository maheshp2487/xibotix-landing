"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Products", href: "products" },
  { label: "Core Tech", href: "core-technologies" },
  { label: "Why Us", href: "why-xibotix" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ---- Scroll listener ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- Lock body scroll when mobile menu is open ---- */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ---- Smooth scroll helper ---- */
  const scrollTo = useCallback(
    (id) => {
      setMobileOpen(false);
      const go = () => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      };
      if (mobileOpen) {
        setTimeout(go, 280);
      } else {
        go();
      }
    },
    [mobileOpen]
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
        scrolled
          ? "bg-background/40 backdrop-blur-2xl border-b border-white/5 py-3"
          : "bg-transparent py-5 lg:py-8"
      )}
      role="banner"
    >
      <Container>
        <nav
          className="flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* ---- Logo ---- */}
          <a
            href="https://www.xibotix.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 flex items-center gap-3 group shrink-0 hover:scale-105 transition-transform duration-300"
            aria-label="Official XIBOTIX Website"
          >
            <span className="font-heading text-lg lg:text-[22px] font-semibold tracking-[0.1em] text-white">
              XIBOTIX
            </span>
          </a>

          {/* ---- Desktop Links (Center) ---- */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-8" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className={cn(
                      "text-[13px] font-medium tracking-wide uppercase font-body",
                      "text-text-secondary hover:text-accent hover:scale-105 inline-block cursor-pointer",
                      "transition-all duration-300"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>



          {/* ---- Mobile Toggle ---- */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 lg:hidden flex items-center justify-center w-10 h-10 -mr-2 text-text hover:text-white transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
          </button>
        </nav>
      </Container>

      {/* ---- Mobile Menu ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-3xl"
              aria-hidden="true"
            />

            {/* Content */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] gap-8 px-8 py-20 overflow-y-auto"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-3xl font-heading font-medium tracking-wide text-text-secondary hover:text-accent hover:scale-105 cursor-pointer transition-all duration-300"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <a
                  href="mailto:connect@xibotix.com"
                  aria-label="Contact XIBOTIX"
                  className="inline-flex items-center justify-center px-10 py-3.5 rounded-full text-sm font-medium font-body uppercase tracking-widest text-background bg-white hover:bg-accent hover:scale-[1.03] whitespace-nowrap cursor-pointer transition-all duration-300"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
