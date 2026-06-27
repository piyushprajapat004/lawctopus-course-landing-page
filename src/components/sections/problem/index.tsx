"use client";

import { motion } from "framer-motion";
import { BookX, TrendingDown, Clock } from "lucide-react";
import { problemContent } from "@/content/problem";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const iconMap = {
  BookX,
  TrendingDown,
  Clock,
};

export function ProblemSection() {
  return (
    <section className="py-24 relative overflow-hidden border-y border-border/30">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-muted/50 via-background to-background -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center"
        >
          {/* Left: Section Header */}
          <div className="md:w-1/3 text-left">
            <motion.h2 
              variants={fadeInUp} 
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
            >
              {problemContent.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp} 
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {problemContent.subtitle}
            </motion.p>
          </div>

          {/* Right: Problem Cards */}
          <div className="md:w-2/3 flex flex-col gap-6">
            {problemContent.problems.map((problem, index) => {
              const IconComponent = iconMap[problem.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={cn(
                    "group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 md:p-8",
                    "rounded-3xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-sm",
                    "hover:border-destructive/30 hover:shadow-2xl hover:shadow-destructive/5 transition-all duration-500"
                  )}
                >
                  <div className="shrink-0 size-16 rounded-2xl bg-destructive/5 border border-destructive/10 flex items-center justify-center group-hover:bg-destructive/10 group-hover:scale-105 transition-all duration-500">
                    {IconComponent && <IconComponent className="size-7 text-destructive opacity-80 group-hover:opacity-100 transition-opacity" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
