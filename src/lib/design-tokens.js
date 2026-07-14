/* ===================================================================
   XIBOTIX — Design Tokens (JS)
   Central source of truth for design values used across components.
   =================================================================== */

export const colors = {
  background: "#050816",
  surface: "#0B1220",
  surfaceLight: "#111B2E",
  surfaceBorder: "#1A2742",
  primary: "#3B82F6",
  primaryHover: "#2563EB",
  primaryLight: "rgba(59, 130, 246, 0.12)",
  accent: "#22D3EE",
  accentHover: "#06B6D4",
  accentLight: "rgba(34, 211, 238, 0.12)",
  text: "#F8FAFC",
  textSecondary: "#94A3B8",
  textMuted: "#64748B",
  white: "#FFFFFF",
};

export const gradients = {
  primary: "linear-gradient(135deg, #3B82F6, #22D3EE)",
  surface: "linear-gradient(135deg, #0B1220, #111B2E)",
  radialPrimary: "radial-gradient(circle at center, rgba(59,130,246,0.15), transparent 70%)",
  radialAccent: "radial-gradient(circle at center, rgba(34,211,238,0.10), transparent 70%)",
};

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const transitions = {
  smooth: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  bounce: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  spring: { type: "spring", stiffness: 120, damping: 20 },
};
