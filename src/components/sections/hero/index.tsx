"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { heroContent } from "@/content/hero";
import { buttonVariants } from "@/components/ui/button";
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/animations";
import { HeroVisual } from "./hero-visual";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16">
      {/* Subtle Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center rounded-full bg-primary/5 backdrop-blur-md px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 shadow-sm">
                {heroContent.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/60 mb-6 font-heading pb-2"
            >
              {heroContent.headline}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-10"
            >
              <Link 
                href={heroContent.primaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg" }), 
                  "relative group w-full sm:w-auto h-12 px-8 text-base shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] transition-shadow duration-300"
                )}
              >
                <span className="relative z-10">{heroContent.primaryCta.label}</span>
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
              </Link>
              <Link 
                href={heroContent.secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto h-12 px-8 text-base bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-colors"
                )}
              >
                {heroContent.secondaryCta.label}
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-sm text-muted-foreground"
            >
              {heroContent.trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                  <span>{indicator}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Visual */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="w-full h-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
