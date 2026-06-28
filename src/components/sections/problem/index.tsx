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
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Dense, moody background gradient, seamlessly transitioning from Hero */}
      <div className="absolute top-[-20%] left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-muted/30 via-background to-background -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start"
        >
          {/* Left: Section Header */}
          <div className="lg:w-[40%] text-left sticky top-32">
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-6 leading-[1.1]"
            >
              {problemContent.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp} 
              className="text-xl text-muted-foreground leading-relaxed font-light"
            >
              {problemContent.subtitle}
            </motion.p>
          </div>

          {/* Right: Problem Bento Grid */}
          <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {problemContent.problems.map((problem, index) => {
              const IconComponent = iconMap[problem.icon as keyof typeof iconMap];
              const isLarge = index === 0; // Make the first item span both columns

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={cn(
                    "group flex flex-col items-start gap-6 p-8",
                    "rounded-[2rem] bg-card border border-border/30 shadow-sm",
                    "hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 hover:border-border/60 transition-all duration-500 ease-out relative overflow-hidden",
                    isLarge ? "md:col-span-2 md:flex-row md:items-center" : "col-span-1"
                  )}
                >
                  {/* Subtle highlight effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={cn(
                    "shrink-0 rounded-2xl bg-muted border border-border/50 flex items-center justify-center group-hover:bg-destructive/5 group-hover:border-destructive/20 transition-colors duration-500 z-10",
                    isLarge ? "size-20" : "size-14"
                  )}>
                    {IconComponent && <IconComponent className={cn("text-muted-foreground group-hover:text-destructive transition-colors duration-500", isLarge ? "size-8" : "size-6")} />}
                  </div>
                  <div className="relative z-10">
                    <h3 className={cn("font-medium tracking-tight text-foreground mb-2", isLarge ? "text-2xl" : "text-xl")}>
                      {problem.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed font-light">
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
