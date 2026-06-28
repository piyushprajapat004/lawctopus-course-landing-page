"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { solutionContent } from "@/content/solution";
import { buttonVariants } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SolutionVisual } from "./solution-visual";
import { cn } from "@/lib/utils";

export function SolutionSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Massive soft light burst breaking the tension from the problem section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] bg-primary/10 rounded-full blur-[200px] -z-10 mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 
            variants={fadeInUp} 
            className="text-5xl md:text-6xl lg:text-[5rem] font-medium tracking-tight text-foreground mb-8 font-heading leading-[1.05]"
          >
            {solutionContent.title}
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 font-light max-w-2xl"
          >
            {solutionContent.subtitle}
          </motion.p>
          
          <motion.div 
            variants={fadeInUp} 
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12"
          >
            {solutionContent.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm md:text-base font-medium px-4 py-2 rounded-full bg-secondary/30 border border-border/40">
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-4">
            <Link 
              href={solutionContent.cta.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "relative group h-12 px-8 text-base w-full sm:w-auto shadow-sm hover:shadow-[0_4px_20px_rgba(var(--primary-rgb),0.15)] transition-all duration-300 rounded-xl"
              )}
            >
              <span className="relative z-10">{solutionContent.cta.label}</span>
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual Composition */}
        <SolutionVisual />

      </div>
    </section>
  );
}
