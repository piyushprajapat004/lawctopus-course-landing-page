/**
 * Application-wide constants.
 * Centralize magic strings, URLs, and config values here.
 */

export const SITE_CONFIG = {
  name: "Lawctopus Course",
  description:
    "Premium legal education courses by Lawctopus — Empowering law students and professionals.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lawctopus.com",
  ogImage: "/og-image.jpg",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/lawctopus",
  linkedin: "https://linkedin.com/company/lawctopus",
  instagram: "https://instagram.com/lawctopus",
} as const;
