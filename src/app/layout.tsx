import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Expert-Level Contract Drafting & Freelancing | Lawctopus Law School",
    template: "%s | Lawctopus Law School",
  },
  description: "Mastering Contract Drafting and Freelancing. Save 4 years of your legal career in just 6 months. Get a 100% Money-Back Guarantee and learn to draft 24 essential agreements.",
  metadataBase: new URL('https://contract-drafting.lawctopus.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Expert-Level Contract Drafting & Freelancing",
    description: "Mastering Contract Drafting and Freelancing. Save 4 years of your legal career in just 6 months. Draft 24 essential agreements and launch your freelance career.",
    url: 'https://contract-drafting.lawctopus.com',
    siteName: 'Lawctopus Law School',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Expert-Level Contract Drafting & Freelancing",
    description: "Save 4 years of your legal career in just 6 months. Master contract drafting & launch your freelance career.",
    creator: '@lawctopus',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
