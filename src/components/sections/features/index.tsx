"use client";

import { motion } from "framer-motion";
import { 
  PenTool, 
  UserCheck, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Award,
  type LucideIcon 
} from "lucide-react";
import { featuresContent } from "@/content/features";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const IconMap: Record<string, LucideIcon> = {
  PenTool,
  UserCheck,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Award,
};

export function FeaturesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground mb-4">
            {featuresContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {featuresContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto"
        >
          {featuresContent.features.map((feature, index) => {
            const Icon = IconMap[feature.iconName];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group flex flex-col sm:flex-row gap-6 rounded-[2rem] border border-border/40 bg-card/50 p-8 shadow-sm backdrop-blur-sm transition-all hover:shadow-xl hover:bg-card hover:-translate-y-1 hover:border-border/80"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-300">
                  {Icon && <Icon className="h-7 w-7" />}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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
