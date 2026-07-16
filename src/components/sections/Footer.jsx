"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui";

const navigation = {
  main: [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Products", href: "products" },
    { name: "Core Tech", href: "core-technologies" },
    { name: "Why Us", href: "why-xibotix" },
    { name: "Contact", href: "contact" },
  ],
  products: [
    { name: "Humanoid Robotics", href: "products" },
    { name: "Rehabilitation Devices", href: "products" },
  ],
};

const handleNavigation = (e, id) => {
  if (window.location.pathname === "/") {
    e.preventDefault();
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
  }
};

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8 lg:pt-20 lg:pb-10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container>
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Brand */}
          <div className="space-y-6 flex flex-col items-start">
            <a
              href="https://www.xibotix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity duration-300"
              aria-label="Official XIBOTIX Website"
            >
              <span className="font-heading font-bold text-xl tracking-[0.2em] text-white uppercase">
                XIBOTIX
              </span>
            </a>
            <p className="text-[14px] leading-relaxed text-text-secondary/90 font-body max-w-[280px]">
              Pioneering intelligent robotics and advanced rehabilitation technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-start">
            <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-6">
              Navigation
            </h3>
            <ul role="list" className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/#${item.href}`}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className="inline-block text-[14px] text-text-secondary/80 hover:text-white hover:opacity-100 transition-all duration-300 font-body"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col items-start">
            <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-6">
              Products
            </h3>
            <ul role="list" className="space-y-4">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/#${item.href}`}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className="inline-block text-[14px] text-text-secondary/80 hover:text-white hover:opacity-100 transition-all duration-300 font-body"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-start">
            <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-6">
              Connect
            </h3>
            <ul role="list" className="space-y-4">
              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/company/xibotix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[14px] text-text-secondary/80 hover:text-white hover:opacity-100 transition-all duration-300 font-body"
                  aria-label="XIBOTIX on LinkedIn"
                >
                  <svg className="h-4 w-4 text-text-secondary/60 group-hover:text-accent transition-colors duration-300 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn
                </a>
              </li>
              {/* Email */}
              <li>
                <a
                  href="mailto:connect@xibotix.com"
                  className="group flex items-center gap-3 text-[14px] text-text-secondary/80 hover:text-white hover:opacity-100 transition-all duration-300 font-body"
                  aria-label="Email XIBOTIX"
                >
                  <Mail className="h-4 w-4 text-text-secondary/60 group-hover:text-accent transition-colors duration-300 shrink-0" />
                  connect@xibotix.com
                </a>
              </li>
              {/* Location */}
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mysuru,+Karnataka,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-[14px] text-text-secondary/80 hover:text-white hover:opacity-100 transition-all duration-300 font-body max-w-[200px]"
                  aria-label="XIBOTIX Location on Google Maps"
                >
                  <MapPin className="h-4 w-4 text-text-secondary/60 group-hover:text-accent transition-colors duration-300 shrink-0 mt-0.5" />
                  <span>Mysuru, Karnataka, India</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-text-secondary/60 font-body">
            &copy; 2026 XIBOTIX Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] font-body">
            <Link 
              href="/privacy" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary/70 hover:text-white hover:opacity-100 transition-all duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link 
              href="/terms" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary/70 hover:text-white hover:opacity-100 transition-all duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
