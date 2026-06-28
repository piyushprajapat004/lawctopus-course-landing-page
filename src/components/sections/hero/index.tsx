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
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Singular, dramatic edge light */}
      <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[200px] -z-10 mix-blend-screen opacity-80 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative min-h-[600px]">
          
          {/* Abstract Visual - Intentionally offsetting it to break the grid and overlap */}
          <div className="absolute top-0 right-[-10%] md:right-[-5%] w-[120%] md:w-[70%] h-full opacity-40 md:opacity-100 pointer-events-none -z-10 translate-y-24 md:-translate-y-12">
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="w-full h-full flex items-center justify-end"
            >
              <HeroVisual />
            </motion.div>
          </div>

          {/* Content - Massive, unrestricted scale */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-3xl relative z-10"
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <span className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                <span className="w-8 h-px bg-primary/50" />
                {heroContent.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl sm:text-[5.5rem] lg:text-[7.5rem] font-normal tracking-tighter text-foreground mb-10 font-heading leading-[0.95] drop-shadow-sm"
            >
              {heroContent.headline}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-2xl sm:text-3xl text-muted-foreground/80 mb-16 leading-relaxed font-light max-w-2xl"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-8 mb-20 items-center"
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

            {/* Restrained Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row flex-wrap gap-x-12 gap-y-4 text-sm text-muted-foreground/60 font-light tracking-wide"
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
      </div>
    </section>
  );
}
