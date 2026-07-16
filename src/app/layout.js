import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "XIBOTIX — Humanoid Robotics & Rehabilitation Devices",
  description:
    "XIBOTIX pioneers the future of intelligent robotics, building advanced humanoid systems and rehabilitation devices that redefine human-machine interaction.",
  keywords: [
    "XIBOTIX",
    "humanoid robotics",
    "rehabilitation devices",
    "robotics",
    "AI",
    "assistive technology",
  ],
  openGraph: {
    title: "XIBOTIX — Humanoid Robotics & Rehabilitation Devices",
    description:
      "Pioneering the future of intelligent robotics and rehabilitation technology.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "XIBOTIX — Humanoid Robotics & Rehabilitation Devices",
    description:
      "Pioneering the future of intelligent robotics and rehabilitation technology.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
