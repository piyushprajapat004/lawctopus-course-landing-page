"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { institutionsContent } from "@/content/institutions";
import { GraduationCap } from "lucide-react";

export function InstitutionsSection() {
  if (!institutionsContent.institutions.length) return null;

  return (
    <section className="relative py-24 md:py-32 border-y border-border/30 bg-muted/20">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/5 rounded-2xl mb-6">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground mb-4">
            {institutionsContent.title}
          </h2>
          <p className="text-muted-foreground">
            {institutionsContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {institutionsContent.institutions.map((inst, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative flex items-center justify-center px-6 md:px-8 py-4 bg-background border border-border/40 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-sm md:text-base font-bold tracking-tight text-foreground/60 group-hover:text-foreground transition-colors uppercase">
                {inst.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
