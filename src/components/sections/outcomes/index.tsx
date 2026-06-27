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
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70">
            {outcomesContent.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {outcomesContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {outcomesContent.outcomes.map((outcome, index) => {
            const Icon = IconMap[outcome.iconName];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/10 hover:bg-white/10 ring-1 ring-inset ring-white/10"
              >
                <div>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-300">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold tracking-tight">
                    {outcome.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {outcome.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
