"use client";

import { motion } from "framer-motion";
import { 
  FileCheck2, 
  Briefcase, 
  Globe, 
  FolderOpen, 
  Clock, 
  Infinity as InfinityIcon,
  type LucideIcon 
} from "lucide-react";
import { outcomesContent } from "@/content/outcomes";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const IconMap: Record<string, LucideIcon> = {
  FileCheck2,
  Briefcase,
  Globe,
  FolderOpen,
  Clock,
  Infinity: InfinityIcon,
};

export function OutcomesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Premium elevated background diffusions */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
            {outcomesContent.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            {outcomesContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {outcomesContent.outcomes.map((outcome, index) => {
            const Icon = IconMap[outcome.iconName];
            
            // Create a varied, editorial grid rhythm
            let colSpan = "lg:col-span-1";
            if (index === 0 || index === 3) {
              colSpan = "lg:col-span-2";
            } else if (index === 4) {
              colSpan = "lg:col-span-2";
            } else if (index === 5) {
               colSpan = "lg:col-span-2";
            }

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={cn(
                  "group relative flex flex-col justify-between rounded-[2rem] border border-border/40 bg-card/50 p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:bg-card hover:border-border/80 overflow-hidden",
                  colSpan
                )}
              >
                {/* Subtle highlight effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-muted border border-border/50 text-foreground group-hover:text-primary group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500">
                    {Icon && <Icon className="h-6 w-6 transition-colors" />}
                  </div>
                  <div className="mt-auto">
                    <h3 className={cn("mb-3 font-medium tracking-tight text-foreground", colSpan.includes("col-span-2") ? "text-2xl" : "text-xl")}>
                      {outcome.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground font-light">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
