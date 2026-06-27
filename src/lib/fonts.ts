import { Inter, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Font configuration.
 * Centralize all Google Font imports here to keep layout.tsx clean.
 *
 * Inter          → Body text (clean, professional)
 * Plus Jakarta   → Headings (modern, distinctive)
 */

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
