"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";
import { buttonVariants } from "@/components/ui/button";
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/animations";
import { HeroVisual } from "./hero-visual";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-12 sm:py-16 md:py-24 lg:py-32 scroll-mt-32">
      {/* Singular, dramatic edge light — clamped to prevent mobile overflow */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-primary/10 rounded-full blur-[200px] -z-10 mix-blend-screen opacity-80 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ═══ DESKTOP LAYOUT (lg+): Side-by-side with absolute visual ═══ */}
        <div className="hidden lg:block relative min-h-[600px]">
          {/* Abstract Visual - Absolute overlay for desktop */}
          <div className="absolute top-0 right-[-5%] w-[60%] h-full opacity-100 pointer-events-none -z-10 -translate-y-12">
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="w-full h-full flex items-center justify-end"
            >
              <HeroVisual />
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-2xl relative z-10"
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <span className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                <span className="w-8 h-px bg-primary/50" />
                {heroContent.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl xl:text-[6rem] font-normal tracking-tighter text-foreground mb-10 font-heading leading-[0.95] drop-shadow-sm"
            >
              {heroContent.headline}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl xl:text-2xl text-muted-foreground/80 mb-16 leading-relaxed font-light max-w-lg"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-row w-auto gap-8 mb-20 items-center"
            >
              <Link 
                href={heroContent.primaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg" }), 
                  "relative group h-16 px-12 text-lg shadow-sm hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(var(--primary-rgb),0.3)] transition-all duration-700 rounded-full overflow-hidden border border-primary/20"
                )}
              >
                <span className="relative z-10 font-medium tracking-wide">{heroContent.primaryCta.label}</span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
              <Link 
                href={heroContent.secondaryCta.href}
                className="group flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {heroContent.secondaryCta.label}
                <span className="block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-row flex-wrap gap-x-12 gap-y-4 text-sm text-muted-foreground/60 font-light tracking-wide"
            >
              {heroContent.trustIndicators.map((indicator, index) => (
                <span key={index} className="flex items-center gap-3">
                  <span className="size-1 rounded-full bg-border" />
                  {indicator}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ═══ MOBILE / TABLET LAYOUT (< lg): Stacked, text-first ═══ */}
        <div className="lg:hidden">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                <span className="w-6 sm:w-8 h-px bg-primary/50" />
                {heroContent.badge}
                <span className="w-6 sm:w-8 h-px bg-primary/50" />
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tighter text-foreground mb-6 sm:mb-8 font-heading leading-[0.95] drop-shadow-sm"
            >
              {heroContent.headline}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground/80 mb-8 sm:mb-10 leading-relaxed font-light max-w-lg mx-auto"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-6 mb-8 sm:mb-10 items-center"
            >
              <Link 
                href={heroContent.primaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg" }), 
                  "relative group w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg shadow-sm hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(var(--primary-rgb),0.3)] transition-all duration-700 rounded-full overflow-hidden border border-primary/20"
                )}
              >
                <span className="relative z-10 font-medium tracking-wide">{heroContent.primaryCta.label}</span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
              <Link 
                href={heroContent.secondaryCta.href}
                className="group flex items-center gap-2 text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {heroContent.secondaryCta.label}
                <span className="block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-muted-foreground/60 font-light tracking-wide"
            >
              {heroContent.trustIndicators.map((indicator, index) => (
                <span key={index} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-border" />
                  {indicator}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual below text on mobile */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="mt-10 sm:mt-14 md:mt-16 w-full max-w-md mx-auto"
          >
            <HeroVisual />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
