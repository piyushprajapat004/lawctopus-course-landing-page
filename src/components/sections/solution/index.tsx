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
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70 mb-6 font-heading pb-2"
          >
            {solutionContent.title}
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
          >
            {solutionContent.subtitle}
          </motion.p>
          
          <motion.div 
            variants={fadeInUp} 
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10"
          >
            {solutionContent.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm md:text-base font-medium">
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-4">
            <Link 
              href={solutionContent.cta.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "relative group h-12 px-8 text-base w-full sm:w-auto shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] transition-shadow duration-300"
              )}
            >
              <span className="relative z-10">{solutionContent.cta.label}</span>
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual Composition */}
        <SolutionVisual />

      </div>
    </section>
  );
}
